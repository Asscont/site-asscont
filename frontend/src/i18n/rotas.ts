/* ==========================================================================
   Rotas do site.

   URLs limpas, com o idioma no caminho:

     português  /            /servicos        /publicacoes/meu-artigo
     inglês     /en          /en/servicos     /en/publicacoes/meu-artigo
     espanhol   /es          /es/servicos     /es/publicacoes/meu-artigo

   O NOME da rota continua em português em todos os idiomas ('servicos', e não
   'services'). É de propósito: assim um link já divulgado continua válido
   quando alguém troca de idioma, e não existem três conjuntos de rotas para
   manter em sincronia.

   As âncoras voltam a ser âncoras de verdade: /servicos#auditoria, em vez do
   antigo #/servicos#auditoria com dois jogos de hash.

   O idioma vem SEMPRE do caminho. Um endereço compartilhado abre no idioma em
   que foi compartilhado, sem depender do que o visitante escolheu antes.
   ========================================================================== */

import { IDIOMA_PADRAO, ehIdioma, type Idioma } from './idiomas';

/* O padrão não leva prefixo: a raiz do site é o português. */
export const PREFIXO: Record<Idioma, string> = {
  pt: '',
  en: '/en',
  es: '/es',
};

export type Local = { idioma: Idioma; rota: string };

/** '/en/servicos' -> { idioma: 'en', rota: 'servicos' } */
export function lerCaminho(pathname: string): Local {
  const partes = pathname.split('/').filter(Boolean);

  if (partes.length && ehIdioma(partes[0])) {
    return { idioma: partes[0], rota: partes.slice(1).join('/') };
  }

  return { idioma: IDIOMA_PADRAO, rota: partes.join('/') };
}

/** ('servicos', 'en', 'auditoria') -> '/en/servicos#auditoria' */
export function montar(rota: string, idioma: Idioma, ancora = ''): string {
  /* A Início é a raiz: '/' e '/en', não '/inicio' e '/en/inicio'. Duas URLs
     para a mesma página fazem o buscador escolher qual é a principal, e a
     escolha pode não ser a nossa. '/inicio' continua funcionando para quem
     tiver o endereço antigo, mas nenhum link do site aponta para lá. */
  const limpa = rota.replace(/^\/+|\/+$/g, '') === 'inicio' ? '' : rota.replace(/^\/+|\/+$/g, '');
  const caminho = `${PREFIXO[idioma]}/${limpa}`.replace(/\/+$/, '') || '/';
  return ancora ? `${caminho}#${ancora}` : caminho;
}

/** O mesmo endereço em outro idioma — usado pelo seletor do header. */
export function trocarIdioma(idioma: Idioma): string {
  const { rota } = lerCaminho(window.location.pathname);
  return montar(rota, idioma) + window.location.hash;
}

/* Navegação sem recarregar a página. O evento popstate é disparado à mão para
   que o roteador reaja do mesmo jeito, venha o clique de um link ou o botão
   voltar do navegador. */
export function navegar(href: string) {
  const url = new URL(href, window.location.origin);
  const mesmaPagina = url.pathname === window.location.pathname;

  window.history.pushState(null, '', url);

  if (!mesmaPagina) {
    window.dispatchEvent(new PopStateEvent('popstate'));
  } else if (url.hash) {
    document.getElementById(url.hash.slice(1))?.scrollIntoView({ block: 'start' });
  }
}
