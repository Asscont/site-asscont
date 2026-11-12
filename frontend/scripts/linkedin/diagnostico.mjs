/* ==========================================================================
   Diagnóstico do LinkedIn: só LISTA, não grava nada.

   Roda pelo botão manual do workflow "LinkedIn - posts da Início", com a
   opção modo = diagnostico. Serve para entender o que a API devolve antes de
   levar os artigos da newsletter "Ponto Contábil" para Publicações.

   Mostra:
     1. os 20 itens mais recentes da página, com tipo (imagem, artigo, vídeo,
        texto...), data, título e se já é um cartão de "Nas nossas redes";
     2. para cada ARTIGO público, todos os campos que a API devolve;
     3. se os artigos procurados (ARTIGOS_PROCURADOS) aparecem, olhando até
        LIMITE_BUSCA itens para trás;
     4. qual é o tipo de cada um dos cartões atuais de "Nas nossas redes";
     5. os itens do tipo "reference" (que só apontam para outro conteúdo,
        como um artigo da newsletter): todos os campos, o URN para onde
        apontam e o que a API devolve ao tentar abrir esse URN (ou o código
        e a mensagem de erro, se recusar). O mesmo para os compartilhamentos.

   O repositório é público, então o log também é. Por isso:
     - o token nunca é impresso (e o GitHub ainda o mascara);
     - post que não esteja PUBLICADO e PÚBLICO aparece só com id e estado;
     - links com parâmetros (links assinados e temporários) saem cortados;
     - identificadores de pessoas (urn:li:person:...) saem omitidos.

   Só faz pedidos de LEITURA (GET) à API.

   Entrada: LINKEDIN_TOKEN (segredo do repositório).
   ========================================================================== */

import { appendFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORGANIZACAO = 'urn:li:organization:24990701';
const VERSAO = '202610';
const LISTAR = 20; // itens mostrados em detalhe
const LIMITE_BUSCA = 100; // até onde procurar os artigos pedidos
const POR_PAGINA = 20;
const API = process.env.LINKEDIN_API_TESTE || 'https://api.linkedin.com/rest';

const ARTIGOS_PROCURADOS = [
  'O Brasil dos últimos 20 anos: o que os resultados econômicos nos ensinam?',
  'Faça o seu melhor e não se frustre',
];

const CARTOES = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'data', 'linkedinPosts.json');

class Falha extends Error {}

/* ------------------------------------------------------------- saída ---- */

const resumoMd = [];
function linha(texto = '') {
  console.log(texto);
  resumoMd.push(texto);
}

/* ------------------------------------------------------------ LinkedIn --- */

async function chamar(caminho, token) {
  const resposta = await fetch(`${API}${caminho}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'LinkedIn-Version': VERSAO,
      'X-Restli-Protocol-Version': '2.0.0',
    },
  });
  if (resposta.status === 401) {
    throw new Falha('token do LinkedIn expirado, gerar um novo (passo a passo em frontend/scripts/linkedin/LEIAME.md)');
  }
  if (!resposta.ok) {
    const corpo = (await resposta.text()).slice(0, 300);
    throw new Falha(`LinkedIn respondeu ${resposta.status} em ${caminho.split('?')[0]}: ${corpo}`);
  }
  return resposta.json();
}

async function buscarItens(token) {
  const autor = encodeURIComponent(ORGANIZACAO);
  const itens = [];
  const vistos = new Set();
  for (let inicio = 0; inicio < LIMITE_BUSCA; inicio += POR_PAGINA) {
    const j = await chamar(`/posts?author=${autor}&q=author&count=${POR_PAGINA}&start=${inicio}`, token);
    const novos = (j.elements || []).filter((p) => !vistos.has(p.id));
    novos.forEach((p) => vistos.add(p.id));
    itens.push(...novos);
    if (novos.length < POR_PAGINA) break; // acabou (ou a API ignorou o start)
  }
  return itens;
}

/* ---------------------------------------------------------- análise ---- */

function tipoDoPost(p) {
  const c = p.content || {};
  if (p.reshareContext) return 'compartilhamento';
  if (c.article) return 'artigo';
  if (c.reference) return 'referência';
  if (c.multiImage) return 'várias imagens';
  const midia = c.media?.id || '';
  if (midia.startsWith('urn:li:image:')) return 'imagem';
  if (midia.startsWith('urn:li:video:')) return 'vídeo';
  if (midia.startsWith('urn:li:document:')) return 'documento';
  if (c.poll) return 'enquete';
  if (c.celebration) return 'celebração';
  if (Object.keys(c).length) return `outro (${Object.keys(c).join(', ')})`;
  return 'texto';
}

const ehPublico = (p) => p.lifecycleState === 'PUBLISHED' && p.visibility === 'PUBLIC';

function limpar(texto) {
  return String(texto || '')
    .replace(/\{hashtag\|\\?#\|([^}]*)\}/g, '#$1')
    .replace(/@\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\\([\\()[\]{}@#*_~<>|])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function tituloDoPost(p) {
  const titulo = p.content?.article?.title;
  if (titulo) return limpar(titulo);
  const legenda = limpar(p.commentary);
  if (!legenda) return '(sem título nem legenda)';
  return `legenda: ${legenda.length > 90 ? `${legenda.slice(0, 87)}...` : legenda}`;
}

function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/* Cópia do post para mostrar no log: corta parâmetros de links (links
   assinados) e qualquer campo com cara de credencial. */
function seguro(valor, chave = '') {
  if (/token|secret|authorization/i.test(chave)) return '[omitido]';
  if (typeof valor === 'string') {
    return valor
      .replace(/(https?:\/\/[^\s?"]+)\?[^\s"]*/g, '$1?[parâmetros cortados]')
      .replace(/urn:li:person:[A-Za-z0-9_-]+/g, 'urn:li:person:[omitido]');
  }
  if (Array.isArray(valor)) return valor.map((v) => seguro(v));
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [seguro(k), seguro(v, k)]));
  }
  return valor;
}

const data = (p) => {
  const t = p.publishedAt || p.createdAt;
  return t ? new Date(t).toISOString().slice(0, 16).replace('T', ' ') + ' UTC' : '(sem data)';
};

/* ------------------------------------------- referências e tentativas --- */

/* Como chamar(), mas não interrompe o diagnóstico quando a API recusa:
   devolve o código e a mensagem. 401 (token vencido) continua parando tudo. */
async function tentar(caminho, token) {
  const resposta = await fetch(`${API}${caminho}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'LinkedIn-Version': VERSAO,
      'X-Restli-Protocol-Version': '2.0.0',
    },
  });
  if (resposta.status === 401) {
    throw new Falha('token do LinkedIn expirado, gerar um novo (passo a passo em frontend/scripts/linkedin/LEIAME.md)');
  }
  const texto = await resposta.text();
  let json = null;
  try {
    json = JSON.parse(texto);
  } catch {
    /* resposta sem JSON */
  }
  if (resposta.ok) return { ok: true, status: resposta.status, json };
  const mensagem = json?.message || json?.serviceErrorCode || texto.slice(0, 300) || '(sem mensagem)';
  return { ok: false, status: resposta.status, mensagem: seguro(String(mensagem)) };
}

/* Para o log: textos longos (o corpo de um artigo, por exemplo) aparecem só
   no começo, com o tamanho total. O tamanho já basta para o diagnóstico. */
function encurtar(valor) {
  if (typeof valor === 'string' && valor.length > 300) {
    return `${valor.slice(0, 300)}… [+${valor.length - 300} caracteres, ${valor.length} no total]`;
  }
  if (Array.isArray(valor)) return valor.map(encurtar);
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, encurtar(v)]));
  }
  return valor;
}

/* Todos os URNs que aparecem num pedaço do post (ex.: content.reference). */
function urnsEm(valor, achados = new Set()) {
  if (typeof valor === 'string' && /^urn:li:[A-Za-z]+:/.test(valor)) achados.add(valor);
  else if (Array.isArray(valor)) valor.forEach((v) => urnsEm(v, achados));
  else if (valor && typeof valor === 'object') Object.values(valor).forEach((v) => urnsEm(v, achados));
  return [...achados];
}

/* Caminhos que valem a pena tentar para abrir um URN. A API não documenta um
   endereço único para cada tipo; por isso são tentativas, todas só leitura. */
function caminhosPara(urn) {
  const [, , tipo, ...resto] = urn.split(':');
  const id = resto.join(':');
  const enc = encodeURIComponent(urn);
  const caminhos = [`/posts/${enc}`];
  if (tipo && !['share', 'ugcPost'].includes(tipo)) {
    caminhos.push(`/${tipo}s/${enc}`, `/${tipo}s/${encodeURIComponent(id)}`);
  }
  return caminhos;
}

/* Procura no JSON devolvido os campos que interessam para Publicações. */
function resumoDoConteudo(json) {
  const campos = [];
  const visitar = (valor, caminho) => {
    if (typeof valor === 'string') campos.push({ caminho, valor });
    else if (Array.isArray(valor)) valor.forEach((v, i) => visitar(v, `${caminho}[${i}]`));
    else if (valor && typeof valor === 'object') {
      Object.entries(valor).forEach(([k, v]) => visitar(v, caminho ? `${caminho}.${k}` : k));
    }
  };
  visitar(json, '');
  const achar = (regex) => campos.find((c) => regex.test(c.caminho.split('.').pop()));
  const maior = campos.filter((c) => !/^urn:|^https?:/.test(c.valor)).sort((a, b) => b.valor.length - a.valor.length)[0];
  return {
    titulo: achar(/^title$|^titulo$|headline/i),
    descricao: achar(/description|subtitle|summary/i),
    capa: achar(/thumbnail|cover|image/i),
    link: achar(/^source$|^url$|permalink|link/i),
    maiorTexto: maior,
  };
}

async function resolver(urn, token) {
  const tentativas = [];
  for (const caminho of caminhosPara(urn)) {
    const r = await tentar(caminho, token);
    tentativas.push({ caminho: caminho.replace(/%3A/gi, ':'), ...r });
    if (r.ok) break;
  }
  return tentativas;
}

/* -------------------------------------------------------------- começo --- */

async function principal() {
  const token = process.env.LINKEDIN_TOKEN;
  if (!token) throw new Falha('segredo LINKEDIN_TOKEN não configurado no repositório');

  const itens = await buscarItens(token);
  const cartoes = JSON.parse(readFileSync(CARTOES, 'utf8')).posts.map((p) => p.id);

  /* Itens que só apontam para outro conteúdo: "reference" e compartilhamentos.
     Para cada um, abre o próprio item sozinho (pode vir com mais campos) e
     tenta abrir o URN para onde ele aponta. */
  const apontadores = itens.filter((p) => ehPublico(p) && (p.content?.reference || p.reshareContext));
  const resolucoes = [];
  for (const p of apontadores) {
    const destinos = urnsEm(p.content?.reference || p.reshareContext).filter((u) => u !== p.id);
    const proprio = await tentar(`/posts/${encodeURIComponent(p.id)}`, token);
    const alvos = [];
    for (const urn of destinos) alvos.push({ urn, tentativas: await resolver(urn, token) });
    resolucoes.push({ post: p, proprio, alvos });
  }
  const tituloResolvido = (r) => r.alvos
    .flatMap((a) => a.tentativas.filter((t) => t.ok).map((t) => resumoDoConteudo(t.json).titulo?.valor))
    .find(Boolean);

  linha('# Diagnóstico do LinkedIn');
  linha();
  linha(`Página: \`${ORGANIZACAO}\` · versão da API: \`${VERSAO}\` · itens lidos: ${itens.length} (até ${LIMITE_BUSCA})`);
  linha();

  /* 1. os 20 mais recentes */
  linha(`## 1. Os ${LISTAR} itens mais recentes`);
  linha();
  linha('| # | Data | Tipo | Título | Estado | Em "Nas nossas redes"? | id |');
  linha('|---|---|---|---|---|---|---|');
  itens.slice(0, LISTAR).forEach((p, i) => {
    const publico = ehPublico(p);
    const titulo = publico ? tituloDoPost(p).replace(/\|/g, '/') : '(não público: conteúdo omitido)';
    const tipo = publico ? tipoDoPost(p) : '—';
    const estado = `${p.lifecycleState || '?'} / ${p.visibility || '?'}`;
    linha(`| ${i + 1} | ${data(p)} | ${tipo} | ${titulo} | ${estado} | ${cartoes.includes(p.id) ? 'sim' : 'não'} | \`${p.id}\` |`);
  });
  linha();

  /* 2. artigos: todos os campos */
  const artigos = itens.filter((p) => ehPublico(p) && p.content?.article);
  linha(`## 2. Artigos públicos encontrados: ${artigos.length}`);
  linha();
  if (!artigos.length) {
    linha(`Nenhum artigo entre os ${itens.length} itens lidos.`);
    linha();
  }
  for (const p of artigos) {
    const a = p.content.article;
    linha(`### ${tituloDoPost(p)}`);
    linha();
    linha(`- id: \`${p.id}\` · data: ${data(p)}`);
    linha(`- campos de \`content.article\`: ${Object.keys(a).map((k) => `\`${k}\``).join(', ') || '(nenhum)'}`);
    linha(`- tamanho dos textos: título ${limpar(a.title).length} · descrição ${limpar(a.description).length} · legenda do post ${limpar(p.commentary).length} caracteres`);
    linha('- todos os campos do post, como a API devolve (links com parâmetros cortados):');
    linha();
    linha('```json');
    linha(JSON.stringify(seguro(p), null, 2));
    linha('```');
    linha();
  }

  /* 3. artigos procurados */
  linha('## 3. Artigos procurados');
  linha();
  const chegouNoLimite = itens.length >= LIMITE_BUSCA;
  for (const procurado of ARTIGOS_PROCURADOS) {
    const alvo = normalizar(procurado);
    const achado = itens.find((p) => ehPublico(p) && (
      normalizar(p.content?.article?.title).includes(alvo) || normalizar(p.commentary).includes(alvo)
    ));
    const porReferencia = resolucoes.find((r) => normalizar(tituloResolvido(r)).includes(alvo));
    if (achado) {
      linha(`- **Encontrado:** "${procurado}" → \`${achado.id}\` (${tipoDoPost(achado)}, ${data(achado)})`);
    } else if (porReferencia) {
      linha(`- **Encontrado pelo título do conteúdo referenciado:** "${procurado}" → item \`${porReferencia.post.id}\` (${data(porReferencia.post)}), que aponta para ${porReferencia.alvos.map((a) => `\`${seguro(a.urn)}\``).join(', ')}`);
    } else {
      linha(`- **NÃO encontrado pelo título:** "${procurado}", nem nos ${itens.length} itens da PÁGINA nem nos conteúdos referenciados que a API deixou abrir.${chegouNoLimite ? ` A busca parou no limite de ${LIMITE_BUSCA} itens: o artigo pode ser mais antigo.` : ''} Se a API não abriu os referenciados (seção 5), compare pela data abaixo.`);
    }
  }
  linha();
  if (resolucoes.length) {
    linha('Datas dos itens que apontam para outro conteúdo, para comparar com a data de publicação dos artigos:');
    linha();
    for (const r of resolucoes) {
      const titulo = tituloResolvido(r);
      linha(`- ${data(r.post)} · ${tipoDoPost(r.post)} · \`${r.post.id}\`${titulo ? ` · título referenciado: "${limpar(titulo)}"` : ' · título não disponível'}`);
    }
    linha();
  }

  /* 4. cartões atuais */
  linha('## 4. Cartões atuais de "Nas nossas redes"');
  linha();
  for (const id of cartoes) {
    const p = itens.find((x) => x.id === id);
    linha(`- \`${id}\`: ${p ? `${tipoDoPost(p)}${p.content?.article ? ' ← É UM ARTIGO' : ''}` : 'não está entre os itens lidos (antigo ou removido)'}`);
  }
  const algumArtigo = cartoes.some((id) => itens.find((x) => x.id === id)?.content?.article);
  linha();
  linha(algumArtigo ? '**Há artigo entre os cartões.**' : '**Nenhum dos cartões é artigo.**');
  linha();

  /* 5. referências e compartilhamentos */
  linha(`## 5. Itens que apontam para outro conteúdo ("reference" e compartilhamentos): ${resolucoes.length}`);
  linha();
  if (!resolucoes.length) linha(`Nenhum entre os ${itens.length} itens lidos.`);
  for (const r of resolucoes) {
    const p = r.post;
    linha(`### ${tipoDoPost(p)} · ${data(p)} · \`${p.id}\``);
    linha();
    linha(`- aponta para: ${r.alvos.length ? r.alvos.map((a) => `\`${seguro(a.urn)}\``).join(', ') : '(nenhum URN encontrado no conteúdo)'}`);
    linha('- conteúdo do item, como veio na lista:');
    linha();
    linha('```json');
    linha(JSON.stringify(seguro({ content: p.content, reshareContext: p.reshareContext, commentary: p.commentary }), null, 2));
    linha('```');
    linha();
    linha(`- o próprio item aberto sozinho (\`GET /posts/{id}\`): ${r.proprio.ok ? 'abriu' : `recusado, ${r.proprio.status}: ${r.proprio.mensagem}`}`);
    if (r.proprio.ok) {
      const novos = Object.keys(r.proprio.json || {}).filter((k) => !(k in p));
      linha(`  - campos a mais do que na lista: ${novos.length ? novos.map((k) => `\`${k}\``).join(', ') : 'nenhum'}`);
    }
    for (const a of r.alvos) {
      linha();
      linha(`#### Abrindo \`${seguro(a.urn)}\``);
      linha();
      for (const t of a.tentativas) {
        linha(`- \`GET ${seguro(t.caminho)}\` → ${t.ok ? `**${t.status} OK**` : `**${t.status}** recusado: ${t.mensagem}`}`);
      }
      const certo = a.tentativas.find((t) => t.ok);
      if (!certo) {
        linha('- **A API não deixou abrir o conteúdo referenciado.**');
        continue;
      }
      const s = resumoDoConteudo(certo.json);
      const mostrar = (rotulo, c) => linha(`- ${rotulo}: ${c ? `\`${c.caminho}\` = "${seguro(limpar(c.valor)).slice(0, 160)}"` : '(não veio)'}`);
      mostrar('título', s.titulo);
      mostrar('descrição', s.descricao);
      mostrar('capa', s.capa);
      mostrar('link', s.link);
      linha(`- maior texto que veio: ${s.maiorTexto ? `\`${s.maiorTexto.caminho}\`, ${s.maiorTexto.valor.length} caracteres` : '(nenhum)'} → ${s.maiorTexto && s.maiorTexto.valor.length > 1500 ? '**parece o texto completo**' : '**não parece o texto completo** (só campos curtos)'}`);
      linha('- todos os campos devolvidos (links com parâmetros cortados, pessoas omitidas):');
      linha();
      linha('```json');
      linha(JSON.stringify(encurtar(seguro(certo.json)), null, 2));
      linha('```');
    }
    linha();
  }

  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${resumoMd.join('\n')}\n`);
}

principal().catch((erro) => {
  const mensagem = erro instanceof Falha ? erro.message : `erro inesperado: ${erro.message}`;
  console.log(`::error::${mensagem}`);
  process.exitCode = 1;
});
