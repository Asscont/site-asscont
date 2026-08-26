/* ==========================================================================
   Coleta, para o build, o título e a descrição de cada rota em cada idioma.

   Não é código do site: é a entrada de um bundle Node que `prerender.mjs`
   executa depois do `vite build`. Existe porque os dicionários são TypeScript
   e importam imagens — o Node puro não lê nem um nem outro, mas o Vite lê os
   dois. Daí rodar isto por `vite build --ssr`.

   Tudo aqui vem de metaTextos.ts, o mesmo módulo que a tela usa. Se um dia
   este arquivo passar a calcular título por conta própria, o compartilhamento
   no WhatsApp vai divergir do que aparece na aba — que é justamente o bug que
   a pré-renderização veio resolver.
   ========================================================================== */

import { publicacoes } from '../src/data/publicacoes';
import { mesclar } from '../src/i18n/mesclar';
import { metaDaRota, ROTAS_PUBLICAS, SITE } from '../src/i18n/metaTextos';
import { HTML_LANG, IDIOMAS } from '../src/i18n/idiomas';
import { PREFIXO } from '../src/i18n/rotas';
import pt, { type Textos, type Traducao } from '../src/i18n/textos/pt';
import en from '../src/i18n/textos/en';
import es from '../src/i18n/textos/es';

const DICIONARIOS: Record<string, Traducao<Textos>> = { pt, en, es };

export type Pagina = {
  /** caminho servido, sem barra final: '/en/servicos' ou '/' */
  caminho: string;
  /** onde o arquivo é escrito dentro de dist */
  arquivo: string;
  htmlLang: string;
  ogLocale: string;
  titulo: string;
  descricao: string;
  canonical: string;
  tipo: 'website' | 'article';
  alternativas: { hreflang: string; href: string }[];
};

function url(idioma: string, rota: string) {
  return `${PREFIXO[idioma as keyof typeof PREFIXO]}/${rota}`.replace(/\/+$/, '') || '/';
}

export function coletar(): { paginas: Pagina[]; site: string } {
  const rotas = [
    ...ROTAS_PUBLICAS,
    ...publicacoes.map((p) => `publicacoes/${p.slug}`),
  ];

  const paginas: Pagina[] = [];

  for (const idioma of IDIOMAS) {
    const t = mesclar(pt, DICIONARIOS[idioma]) as Textos;

    for (const rota of rotas) {
      const { titulo, descricao } = metaDaRota(rota, t);
      const caminho = url(idioma, rota);

      paginas.push({
        caminho,
        /* A raiz já é o index.html do Vite; as outras viram pasta/index.html,
           que é como o Azure serve uma URL limpa a partir de um arquivo. */
        arquivo: caminho === '/' ? 'index.html' : `${caminho.slice(1)}/index.html`,
        htmlLang: HTML_LANG[idioma],
        ogLocale: HTML_LANG[idioma].replace('-', '_'),
        titulo,
        descricao,
        canonical: SITE + caminho,
        tipo: rota.startsWith('publicacoes/') ? 'article' : 'website',
        alternativas: [
          ...IDIOMAS.map((outro) => ({
            hreflang: HTML_LANG[outro],
            href: SITE + url(outro, rota),
          })),
          { hreflang: 'x-default', href: SITE + url('pt', rota) },
        ],
      });
    }
  }

  return { paginas, site: SITE };
}

export default coletar;
