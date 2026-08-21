/* Idiomas do site.
   Para acrescentar um idioma novo: incluir a sigla em IDIOMAS, preencher os
   três mapas abaixo e criar o arquivo correspondente em `textos/`. */

export const IDIOMAS = ['pt', 'en', 'es'] as const;

export type Idioma = (typeof IDIOMAS)[number];

/** O que aparece no botão do seletor. */
export const SIGLA: Record<Idioma, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

/** Nome do idioma no próprio idioma — usado no title e no leitor de tela. */
export const NOME: Record<Idioma, string> = {
  pt: 'Português',
  en: 'English',
  es: 'Español',
};

/** Valor do atributo lang do <html>. Importa para busca e leitor de tela. */
export const HTML_LANG: Record<Idioma, string> = {
  pt: 'pt-BR',
  en: 'en',
  es: 'es',
};

export const IDIOMA_PADRAO: Idioma = 'pt';

export function ehIdioma(valor: unknown): valor is Idioma {
  return typeof valor === 'string' && (IDIOMAS as readonly string[]).includes(valor);
}
