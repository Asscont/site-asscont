/* ==========================================================================
   Posts recentes do LinkedIn.

   O navegador só pede a lista pronta para /api/linkedin — uma Managed
   Function do Azure, em `api/linkedin/` na raiz do repositório. É ela que
   fala com o LinkedIn, porque isso exige token e o repositório é público.

   Se a função não responder (sem configuração, LinkedIn fora, ou rodando
   localmente com `npm run dev`, onde /api não existe), devolve null e a
   página continua com os posts fixos.
   ========================================================================== */

const ENDPOINT = '/api/linkedin';

export type PostLinkedin = {
  url: string;
  imagem: string;
  texto: string;
  data: string | null;
};

export async function buscarPostsLinkedin(sinal?: AbortSignal): Promise<PostLinkedin[] | null> {
  try {
    const resposta = await fetch(ENDPOINT, { signal: sinal });
    if (!resposta.ok) return null;
    const json = (await resposta.json()) as { posts?: PostLinkedin[] };
    const posts = (json.posts || []).filter((p) => p && p.url && p.imagem);
    return posts.length ? posts : null;
  } catch {
    return null;
  }
}
