import { useEffect } from 'react';
import { useIdioma, useTextos } from './contexto';
import { metaDaRota, rotaExiste, SITE } from './metaTextos';
import { HTML_LANG, IDIOMAS } from './idiomas';
import { PREFIXO } from './rotas';

/* ==========================================================================
   <title>, <meta description>, canonical, hreflang e Open Graph.

   O index.html tem um título fixo em português. Sem isto, a versão em inglês
   apareceria no Google com o título em português, e todas as páginas
   apareceriam com o mesmo título — o que atrapalha tanto o buscador quanto
   quem tem várias abas abertas.

   ISTO RODA NO NAVEGADOR. O Google executa JavaScript e lê o resultado, mas
   WhatsApp, LinkedIn e Slack NÃO executam — leem o HTML cru. Para eles quem
   resolve é `scripts/prerender.mjs`, que escreve as mesmas tags direto no
   arquivo durante o build. Os dois usam metaTextos.ts, para não divergirem.

   Aqui continua valendo por dois motivos: navegação interna não recarrega a
   página (o HTML pré-renderizado só é lido na primeira carga), e a tela 404
   precisa marcar noindex, que o build não tem como prever.
   ========================================================================== */

function garantirMeta(seletor: string, criar: () => HTMLElement, conteudo: string) {
  let tag = document.head.querySelector<HTMLElement>(seletor);
  if (!tag) {
    tag = criar();
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', conteudo);
}

function porNome(nome: string, conteudo: string) {
  garantirMeta(
    `meta[name="${nome}"]`,
    () => {
      const tag = document.createElement('meta');
      tag.setAttribute('name', nome);
      return tag;
    },
    conteudo,
  );
}

function porPropriedade(propriedade: string, conteudo: string) {
  garantirMeta(
    `meta[property="${propriedade}"]`,
    () => {
      const tag = document.createElement('meta');
      tag.setAttribute('property', propriedade);
      return tag;
    },
    conteudo,
  );
}

function definirLink(rel: string, href: string, hreflang?: string) {
  const seletor = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]:not([hreflang])`;

  let tag = document.head.querySelector<HTMLLinkElement>(seletor);
  if (!tag) {
    tag = document.createElement('link');
    tag.setAttribute('rel', rel);
    if (hreflang) tag.setAttribute('hreflang', hreflang);
    document.head.appendChild(tag);
  }
  tag.setAttribute('href', href);
}

export function Meta({ rota }: { rota: string }) {
  const t = useTextos();
  const { idioma } = useIdioma();
  const { titulo, descricao } = metaDaRota(rota, t);
  const existe = rotaExiste(rota);

  useEffect(() => {
    document.title = existe ? titulo : t.erro404.titulo + t.meta.sufixo;
    porNome('description', existe ? descricao : t.erro404.descricao);

    /* Rota que não existe não deve entrar no índice. Sem isto, cada endereço
       errado que alguém publicar por aí vira uma cópia da Início aos olhos do
       buscador. */
    if (!existe) {
      porNome('robots', 'noindex, follow');
      return;
    }
    document.head.querySelector('meta[name="robots"]')?.remove();

    const caminho = `${PREFIXO[idioma]}/${rota}`.replace(/\/+$/, '') || '/';
    const url = SITE + caminho;

    definirLink('canonical', url);

    /* Diz ao buscador que as três versões são a mesma página em outro idioma,
       e não conteúdo duplicado. */
    for (const outro of IDIOMAS) {
      const alvo = `${PREFIXO[outro]}/${rota}`.replace(/\/+$/, '') || '/';
      definirLink('alternate', SITE + alvo, HTML_LANG[outro]);
    }
    definirLink('alternate', SITE + (`/${rota}`.replace(/\/+$/, '') || '/'), 'x-default');

    porPropriedade('og:title', titulo);
    porPropriedade('og:description', descricao);
    porPropriedade('og:url', url);
    porPropriedade('og:type', rota.startsWith('publicacoes/') ? 'article' : 'website');
    porPropriedade('og:site_name', 'ASSCONT');
    porPropriedade('og:locale', HTML_LANG[idioma].replace('-', '_'));
    porNome('twitter:card', 'summary');
  }, [titulo, descricao, existe, idioma, rota, t]);

  return null;
}

export default Meta;
