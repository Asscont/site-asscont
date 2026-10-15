/* ==========================================================================
   Vagas abertas, lidas do Pandapé.

   O navegador só pede a lista pronta para /api/vagas, uma Managed Function
   do Azure em `api/vagas/` na raiz do repositório. É ela que lê a página de
   carreiras do Pandapé e guarda o resultado por 30 minutos.

   Devolve null quando a função não responde (Pandapé fora, layout mudou, ou
   rodando com `npm run dev`, onde /api não existe). Nesse caso a página usa
   a lista fixa de data/vagas.ts. Lista vazia ([]) é diferente: quer dizer que
   não há vaga aberta no Pandapé agora.
   ========================================================================== */

import type { Vaga } from '../data/vagas';

const ENDPOINT = '/api/vagas';

export async function buscarVagas(sinal?: AbortSignal): Promise<Vaga[] | null> {
  try {
    const resposta = await fetch(ENDPOINT, { signal: sinal });
    if (!resposta.ok) return null;
    const json = (await resposta.json()) as { vagas?: Vaga[] };
    return Array.isArray(json.vagas) ? json.vagas.filter((v) => v && v.id && v.titulo) : null;
  } catch {
    return null;
  }
}
