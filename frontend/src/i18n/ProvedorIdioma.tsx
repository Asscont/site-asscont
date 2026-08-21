/* ==========================================================================
   Provedor de idioma.

   Como funciona: o dicionário do idioma escolhido é mesclado por cima do
   português. Chave que ainda não foi traduzida (ou que está com string vazia)
   continua aparecendo em português. Por isso a migração pode ser feita bloco a
   bloco, e o site fica publicável em qualquer ponto do caminho.

   Uso dentro de um componente:

     const t = useTextos();
     <h2>{t.header.quemSomos}</h2>

   A escolha do visitante fica salva no navegador e também vai para a URL
   (?lang=en), para que o endereço possa ser compartilhado já no idioma certo.
   ========================================================================== */

import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react';
import { ContextoIdioma, type ValorContexto } from './contexto';
import { HTML_LANG, IDIOMA_PADRAO, ehIdioma, type Idioma } from './idiomas';
import pt, { type Textos, type Traducao } from './textos/pt';
import en from './textos/en';
import es from './textos/es';

const DICIONARIOS: Record<Idioma, Traducao<Textos>> = { pt, en, es };

const CHAVE_ARMAZENAMENTO = 'asscont:idioma';
const PARAMETRO_URL = 'lang';

/* --------------------------------------------------------------- mesclagem */

function ehObjeto(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

/** Copia `extra` por cima de `base`. Campo ausente ou vazio mantém a base. */
function mesclar<T>(base: T, extra: unknown): T {
  if (!ehObjeto(extra) || !ehObjeto(base)) return base;

  const saida: Record<string, unknown> = { ...base };

  for (const [chave, valor] of Object.entries(extra)) {
    if (valor === undefined || valor === null || valor === '') continue;
    saida[chave] = ehObjeto(valor) ? mesclar(saida[chave], valor) : valor;
  }

  return saida as T;
}

/* ------------------------------------------------- descoberta do idioma */

function lerDaUrl(): Idioma | null {
  const valor = new URLSearchParams(window.location.search).get(PARAMETRO_URL);
  return ehIdioma(valor) ? valor : null;
}

function lerDoNavegador(): Idioma | null {
  const preferido = window.navigator.languages?.[0] ?? window.navigator.language;
  const raiz = preferido?.slice(0, 2).toLowerCase();
  return ehIdioma(raiz) ? raiz : null;
}

function lerSalvo(): Idioma | null {
  try {
    const salvo = window.localStorage.getItem(CHAVE_ARMAZENAMENTO);
    return ehIdioma(salvo) ? salvo : null;
  } catch {
    return null; // navegador com armazenamento bloqueado
  }
}

/* Ordem de prioridade: o que veio no link, depois a escolha anterior da
   pessoa, depois o idioma do navegador. Português é o padrão. */
function idiomaInicial(): Idioma {
  return lerDaUrl() ?? lerSalvo() ?? lerDoNavegador() ?? IDIOMA_PADRAO;
}

/* ------------------------------------------------------------- provedor */

export function ProvedorIdioma({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial);

  const t = useMemo(() => mesclar(pt, DICIONARIOS[idioma]), [idioma]);

  useEffect(() => {
    document.documentElement.lang = HTML_LANG[idioma];

    try {
      window.localStorage.setItem(CHAVE_ARMAZENAMENTO, idioma);
    } catch {
      // sem armazenamento: a escolha vale só para esta visita
    }

    // mantém a URL compartilhável, sem recarregar a página
    const url = new URL(window.location.href);
    if (idioma === IDIOMA_PADRAO) {
      url.searchParams.delete(PARAMETRO_URL);
    } else {
      url.searchParams.set(PARAMETRO_URL, idioma);
    }
    window.history.replaceState(null, '', url);
  }, [idioma]);

  const definirIdioma = useCallback((proximo: Idioma) => setIdioma(proximo), []);

  const valor = useMemo<ValorContexto>(
    () => ({ idioma, definirIdioma, t }),
    [idioma, definirIdioma, t],
  );

  return <ContextoIdioma.Provider value={valor}>{children}</ContextoIdioma.Provider>;
}

export default ProvedorIdioma;
