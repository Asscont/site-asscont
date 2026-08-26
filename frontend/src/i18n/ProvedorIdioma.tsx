/* ==========================================================================
   Provedor de idioma.

   O idioma vem do caminho da URL (/en/servicos) e é passado de fora, pelo
   roteador em App.tsx — que é quem já lê o caminho. Assim existe uma única
   fonte da verdade, e um endereço compartilhado sempre abre no idioma em que
   foi compartilhado.

   Como funciona a tradução: o dicionário do idioma escolhido é mesclado por
   cima do português. Chave que ainda não foi traduzida (ou que está com string
   vazia) continua aparecendo em português.

   Uso dentro de um componente:

     const t = useTextos();
     <h2>{t.header.quemSomos}</h2>

   Para links internos, use useCaminho() — escrever o caminho à mão faz o
   visitante cair no português ao clicar.
   ========================================================================== */

import { useCallback, useEffect, useMemo, type ReactNode } from 'react';
import { ContextoIdioma, type ValorContexto } from './contexto';
import { HTML_LANG, type Idioma } from './idiomas';
import { navegar, trocarIdioma } from './rotas';
import { mesclar } from './mesclar';
import pt, { type Textos, type Traducao } from './textos/pt';
import en from './textos/en';
import es from './textos/es';

const DICIONARIOS: Record<Idioma, Traducao<Textos>> = { pt, en, es };

/* ------------------------------------------------------------- provedor */

export function ProvedorIdioma({ children, idioma }: { children: ReactNode; idioma: Idioma }) {

  const t = useMemo(() => mesclar(pt, DICIONARIOS[idioma]), [idioma]);

  /* Importa para leitor de tela e para busca. O idioma vem do caminho, então
     não há nada a salvar nem a escrever na URL: ela já é a fonte da verdade. */
  useEffect(() => {
    document.documentElement.lang = HTML_LANG[idioma];
  }, [idioma]);

  /* Trocar de idioma é navegar para o mesmo endereço no outro prefixo:
     /servicos -> /en/servicos, preservando a âncora. */
  const definirIdioma = useCallback((proximo: Idioma) => {
    navegar(trocarIdioma(proximo));
  }, []);

  const valor = useMemo<ValorContexto>(
    () => ({ idioma, definirIdioma, t }),
    [idioma, definirIdioma, t],
  );

  return <ContextoIdioma.Provider value={valor}>{children}</ContextoIdioma.Provider>;
}

export default ProvedorIdioma;
