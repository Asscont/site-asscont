/* ==========================================================================
   Pré-renderização das tags de <head>, e geração do sitemap.

   POR QUE EXISTE

   O site é renderizado no navegador. O <title> e a descrição de cada página
   eram ajustados por JavaScript (i18n/Meta.tsx), e isso basta para o Google,
   que executa JavaScript. Mas WhatsApp, LinkedIn e Slack NÃO executam: leem o
   HTML cru. Resultado: qualquer link do site compartilhado em qualquer idioma
   aparecia com o título do index.html, sempre em português.

   O QUE FAZ

   Depois do `vite build`, para cada rota em cada idioma, escreve uma cópia do
   index.html com o <head> já certo: title, description, canonical, hreflang e
   Open Graph. O corpo continua vazio — quem monta a página é o React, como
   antes. É pré-renderização só do head, e é o suficiente para o problema.

     dist/index.html                    ->  /
     dist/servicos/index.html           ->  /servicos
     dist/en/servicos/index.html        ->  /en/servicos
     dist/publicacoes/<slug>/index.html ->  /publicacoes/<slug>

   O Azure serve `pasta/index.html` quando o pedido é `/pasta`, então as URLs
   limpas continuam iguais. O navigationFallback do staticwebapp.config.json
   segue valendo para o que não tiver arquivo.

   Gera também o dist/sitemap.xml e o dist/404.html.

   O SITEMAP É GERADO, NÃO ESCRITO À MÃO

   A lista de páginas vem das mesmas rotas e dos mesmos slugs que o site usa.
   Um artigo novo em data/publicacoes.ts entra no sitemap no próximo build, sem
   ninguém lembrar de nada. Um sitemap com URL que não existe é erro no Search
   Console; um sem a URL nova é página que o Google demora a achar.

   CUIDADO

   Este script depende de `.meta-build/coletar-meta.js`, que é produzido por
   `vite build --ssr`. Os dois passos estão no script `build` do package.json,
   na ordem certa. Rodar este arquivo à mão, sem aquele, falha com aviso.
   ========================================================================== */

import { readFile, writeFile, mkdir, rm, access } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const AQUI = dirname(fileURLToPath(import.meta.url));
const RAIZ = resolve(AQUI, '..');
const DIST = join(RAIZ, 'dist');
const BUILD_META = join(RAIZ, '.meta-build', 'coletar-meta.js');

/* Prioridade e frequência por rota, só para o sitemap. Valor não informado
   fica no padrão de baixo. É dica, não ordem: o Google usa como sugestão. */
const PESOS = {
  '': { prioridade: '1.0', frequencia: 'monthly' },
  servicos: { prioridade: '0.9', frequencia: 'monthly' },
  'quem-somos': { prioridade: '0.8', frequencia: 'monthly' },
  publicacoes: { prioridade: '0.8', frequencia: 'weekly' },
  contato: { prioridade: '0.8', frequencia: 'monthly' },
  'trabalhe-conosco': { prioridade: '0.7', frequencia: 'weekly' },
  termos: { prioridade: '0.3', frequencia: 'yearly' },
  privacidade: { prioridade: '0.3', frequencia: 'yearly' },
};

function escaparHtml(texto) {
  return String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Só o que precisa ser escapado dentro de <loc> de um XML. */
function escaparXml(texto) {
  return String(texto).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ------------------------------------------------------------------- head */

function montarHead(pagina) {
  const t = escaparHtml(pagina.titulo);
  const d = escaparHtml(pagina.descricao);

  const alternativas = pagina.alternativas
    .map(
      (a) =>
        `    <link rel="alternate" hreflang="${a.hreflang}" href="${escaparHtml(a.href)}" />`,
    )
    .join('\n');

  return [
    `    <title>${t}</title>`,
    `    <meta name="description" content="${d}" />`,
    `    <link rel="canonical" href="${escaparHtml(pagina.canonical)}" />`,
    alternativas,
    `    <meta property="og:type" content="${pagina.tipo}" />`,
    `    <meta property="og:site_name" content="ASSCONT" />`,
    `    <meta property="og:locale" content="${pagina.ogLocale}" />`,
    `    <meta property="og:title" content="${t}" />`,
    `    <meta property="og:description" content="${d}" />`,
    `    <meta property="og:url" content="${escaparHtml(pagina.canonical)}" />`,
    `    <meta name="twitter:card" content="summary" />`,
    `    <meta name="twitter:title" content="${t}" />`,
    `    <meta name="twitter:description" content="${d}" />`,
  ].join('\n');
}

/** Troca o <title> do molde pelas tags da página e ajusta o lang do <html>. */
function aplicar(molde, pagina) {
  let html = molde;

  html = html.replace(/<html([^>]*)\slang="[^"]*"/i, `<html$1 lang="${pagina.htmlLang}"`);

  const titulo = /[ \t]*<title>[\s\S]*?<\/title>/i;
  if (!titulo.test(html)) {
    throw new Error('index.html sem <title>: nao sei onde inserir as tags');
  }

  return html.replace(titulo, montarHead(pagina));
}

/* ---------------------------------------------------------------- sitemap */

function montarSitemap(paginas) {
  /* Uma entrada por página, com os alternates de idioma. O Google pede que
     cada URL do conjunto liste todas as suas alternativas, inclusive ela
     mesma — é assim que ele entende que são traduções, e não duplicatas. */
  const blocos = paginas.map((pagina) => {
    const rota = pagina.canonical.split('#')[0].replace(/^https?:\/\/[^/]+/, '');
    const chave = rota.replace(/^\/(en|es)(\/|$)/, '/').replace(/^\/|\/$/g, '');
    const base = chave.startsWith('publicacoes/')
      ? { prioridade: '0.7', frequencia: 'yearly' }
      : (PESOS[chave] ?? { prioridade: '0.5', frequencia: 'monthly' });

    /* Tradução tem prioridade um pouco menor que o português: é a mesma
       página, e o público principal do site é brasileiro. */
    const traducao = /^\/(en|es)(\/|$)/.test(rota);
    const prioridade = traducao
      ? Math.max(0.1, Number(base.prioridade) - 0.2).toFixed(1)
      : base.prioridade;

    const alternativas = pagina.alternativas
      .map(
        (a) =>
          `    <xhtml:link rel="alternate" hreflang="${a.hreflang}" href="${escaparXml(a.href)}"/>`,
      )
      .join('\n');

    return [
      '  <url>',
      `    <loc>${escaparXml(pagina.canonical)}</loc>`,
      alternativas,
      `    <changefreq>${base.frequencia}</changefreq>`,
      `    <priority>${prioridade}</priority>`,
      '  </url>',
    ].join('\n');
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<!-- Gerado por scripts/prerender.mjs durante o build. Nao editar a mao:',
    '     a proxima publicacao sobrescreve. Para mudar o conteudo, mexer nas',
    '     rotas em src/i18n/metaTextos.ts ou nos artigos em',
    '     src/data/publicacoes.ts. -->',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    '',
    blocos.join('\n'),
    '',
    '</urlset>',
    '',
  ].join('\n');
}

/* ------------------------------------------------------------------ main */

async function existe(caminho) {
  try {
    await access(caminho);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  if (!(await existe(BUILD_META))) {
    console.error(
      '\nprerender: falta .meta-build/coletar-meta.js.\n' +
        'Rode o build completo (npm run build), que faz os dois passos na ordem.\n',
    );
    process.exit(1);
  }

  const molde = await readFile(join(DIST, 'index.html'), 'utf8');
  const { coletar } = await import(pathToFileURL(BUILD_META).href);
  const { paginas } = coletar();

  for (const pagina of paginas) {
    const destino = join(DIST, pagina.arquivo);
    await mkdir(dirname(destino), { recursive: true });
    await writeFile(destino, aplicar(molde, pagina), 'utf8');
  }

  /* 404: mesmo molde, com noindex. Serve para o responseOverrides do Azure,
     quando/se for ligado. A tela em si é montada pelo React. */
  const quatroCemQuatro = molde
    .replace(/[ \t]*<title>[\s\S]*?<\/title>/i, '    <title>Página não encontrada | ASSCONT</title>')
    .replace('</head>', '    <meta name="robots" content="noindex, follow" />\n  </head>');
  await writeFile(join(DIST, '404.html'), quatroCemQuatro, 'utf8');

  await writeFile(join(DIST, 'sitemap.xml'), montarSitemap(paginas), 'utf8');

  await rm(join(RAIZ, '.meta-build'), { recursive: true, force: true });

  const idiomas = new Set(paginas.map((p) => p.htmlLang));
  console.log(
    `prerender: ${paginas.length} paginas em ${idiomas.size} idiomas, ` +
      'mais 404.html e sitemap.xml',
  );
}

main().catch((erro) => {
  console.error('prerender falhou:', erro);
  process.exit(1);
});
