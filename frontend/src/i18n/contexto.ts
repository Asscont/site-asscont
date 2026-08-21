/* Contexto e hooks de idioma. Sem componentes neste arquivo — o provedor mora
   em ProvedorIdioma.tsx para não atrapalhar o hot reload do Vite. */

import { createContext, useContext } from 'react';
import type { Idioma } from './idiomas';
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
