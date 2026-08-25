/* Contexto e hooks de idioma. Sem componentes neste arquivo — o provedor mora
   em ProvedorIdioma.tsx para não atrapalhar o hot reload do Vite. */

import { createContext, useCallback, useContext } from 'react';
import type { Idioma } from './idiomas';
import { montar } from './rotas';
import type { Textos } from './textos/pt';

export type ValorContexto = {
  idioma: Idioma;
  definirIdioma: (proximo: Idioma) => void;
  t: Textos;
};

export const ContextoIdioma = createContext<ValorContexto | null>(null);

function useContexto(): ValorContexto {
  const valor = useContext(ContextoIdioma);
  if (!valor) throw new Error('useTextos precisa estar dentro de <ProvedorIdioma>.');
  return valor;
}

/** Textos do idioma atual, já com o português preenchendo o que falta. */
export function useTextos(): Textos {
  return useContexto().t;
}

/** Idioma atual e a função para trocar. Usado pelo seletor do header. */
export function useIdioma() {
  const { idioma, definirIdioma } = useContexto();
  return { idioma, definirIdioma };
}

/** Monta um endereço interno já no idioma atual.

    <a href={caminho('servicos', 'auditoria')}>  ->  /en/servicos#auditoria

    Todo link interno do site passa por aqui. Escrever o caminho à mão faria o
    visitante cair no português ao clicar, porque o prefixo se perderia. */
export function useCaminho() {
  const { idioma } = useContexto();
  return useCallback(
    (rota: string, ancora = '') => montar(rota, idioma, ancora),
    [idioma],
  );
}
