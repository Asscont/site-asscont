/* ==========================================================================
   Mesclagem de dicionários.

   Estava dentro de ProvedorIdioma.tsx. Saiu para cá porque agora existem DOIS
   consumidores: o provedor, no navegador, e o script de pré-renderização, que
   roda no build em Node. Duplicar esta função era pedir para as duas versões
   divergirem — e já houve um bug aqui, em que os mapas abertos caíam para o
   português em silêncio.
   ========================================================================== */

function ehObjeto(valor: unknown): valor is Record<string, unknown> {
  return typeof valor === 'object' && valor !== null && !Array.isArray(valor);
}

/** Copia `extra` por cima de `base`. Campo ausente ou vazio mantém a base. */
export function mesclar<T>(base: T, extra: unknown): T {
  if (!ehObjeto(extra)) return base;

  /* Objeto que não existe no português entra inteiro. É o caso dos mapas
     abertos — depoimentosTraduzidos e blog.artigos —, onde o português é um
     objeto vazio e cada entrada só existe nos outros idiomas. Sem esta linha
     essas entradas eram descartadas na mesclagem. */
  if (!ehObjeto(base)) return extra as T;

  const saida: Record<string, unknown> = { ...base };

  for (const [chave, valor] of Object.entries(extra)) {
    if (valor === undefined || valor === null || valor === '') continue;
    saida[chave] = ehObjeto(valor) ? mesclar(saida[chave], valor) : valor;
  }

  return saida as T;
}

export default mesclar;
