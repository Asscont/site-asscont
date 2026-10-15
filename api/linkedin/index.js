/* ==========================================================================
   GET /api/linkedin

   Devolve os posts mais recentes da página da ASSCONT no LinkedIn, já no
   formato que o site usa:

     { "posts": [ { "url", "imagem", "texto", "data" }, ... ] }

   Fonte: API oficial do LinkedIn (produto "Community Management API",
   escopo r_organization_social). Ver api/linkedin/LEIAME.md.

   Por que isto roda no servidor: o token do LinkedIn dá acesso à página da
   empresa. No navegador ele ficaria visível no código publicado, e o
   repositório é público.

   Se algo falhar (sem configuração, token vencido, LinkedIn fora do ar), a
   função responde 503 e o site continua mostrando os posts fixos. A seção
   nunca fica vazia por causa desta função.

   Variáveis de ambiente (Azure > site-asscont > Variáveis de ambiente):
     LINKEDIN_ORG_ID          número da página (urn:li:organization:NNNN)
     LINKEDIN_CLIENT_ID       do app no LinkedIn Developers
     LINKEDIN_CLIENT_SECRET   idem
     LINKEDIN_REFRESH_TOKEN   gerado uma vez com api/ferramentas/linkedin-autorizar.mjs
     LINKEDIN_ACCESS_TOKEN    alternativa ao refresh token (vence em ~60 dias)
     LINKEDIN_VERSION         versão da API no formato AAAAMM (opcional)
   ========================================================================== */

const API = 'https://api.linkedin.com/rest';
const OAUTH = 'https://www.linkedin.com/oauth/v2/accessToken';
const VERSAO = process.env.LINKEDIN_VERSION || '202608';
const QUANTOS = 6;
const CACHE_MS = 60 * 60 * 1000; // uma hora: o LinkedIn limita chamadas por dia

let cache = { ate: 0, posts: null };
let token = { valor: null, ate: 0 };

async function obterToken() {
  if (token.valor && Date.now() < token.ate) return token.valor;

  const refresh = process.env.LINKEDIN_REFRESH_TOKEN;
  if (refresh) {
    const corpo = new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: refresh,
      client_id: process.env.LINKEDIN_CLIENT_ID || '',
      client_secret: process.env.LINKEDIN_CLIENT_SECRET || '',
    });
    const r = await fetch(OAUTH, { method: 'POST', body: corpo });
    const j = await r.json().catch(() => ({}));
    if (!r.ok || !j.access_token) {
      throw new Error(`refresh recusado (${r.status}): ${j.error_description || j.error || ''}`);
    }
    // renova cinco minutos antes de vencer
    token = { valor: j.access_token, ate: Date.now() + (j.expires_in - 300) * 1000 };
    return token.valor;
  }

  if (process.env.LINKEDIN_ACCESS_TOKEN) return process.env.LINKEDIN_ACCESS_TOKEN;
  throw new Error('sem LINKEDIN_REFRESH_TOKEN nem LINKEDIN_ACCESS_TOKEN');
}

async function chamar(caminho, acesso) {
  const r = await fetch(`${API}${caminho}`, {
    headers: {
      Authorization: `Bearer ${acesso}`,
      'LinkedIn-Version': VERSAO,
      'X-Restli-Protocol-Version': '2.0.0',
    },
  });
  if (!r.ok) {
    const texto = await r.text();
    throw new Error(`LinkedIn ${r.status} em ${caminho.split('?')[0]}: ${texto.slice(0, 300)}`);
  }
  return r.json();
}

/* A imagem de um post vem como um código (urn:li:image:...). O endereço real
   do arquivo é pedido à parte, e ele expira — por isso o cache é curto. */
async function urlDaImagem(urn, acesso) {
  if (!urn) return null;
  try {
    const tipo = urn.startsWith('urn:li:video:') ? 'videos' : 'images';
    const j = await chamar(`/${tipo}/${encodeURIComponent(urn)}`, acesso);
    return j.downloadUrl || j.thumbnail || null;
  } catch {
    return null;
  }
}

function urnDaImagem(post) {
  const c = post.content || {};
  if (c.media?.id) return c.media.id;
  if (c.multiImage?.images?.length) return c.multiImage.images[0].id;
  if (c.article?.thumbnail) return c.article.thumbnail;
  return null;
}

function resumo(texto) {
  const limpo = String(texto || '')
    .replace(/\{hashtag\|\\?#\|([^}]*)\}/g, '#$1') // hashtags vêm como {hashtag|\#|x}
    .replace(/@\[([^\]]*)\]\([^)]*\)/g, '$1') // menções vêm como @[Nome](urn:li:...)
    .replace(/\s+/g, ' ')
    .trim();
  return limpo.length > 140 ? `${limpo.slice(0, 137)}...` : limpo;
}

async function buscarPosts() {
  const acesso = await obterToken();
  const autor = encodeURIComponent(`urn:li:organization:${process.env.LINKEDIN_ORG_ID}`);
  const j = await chamar(`/posts?author=${autor}&q=author&count=20&sortBy=LAST_MODIFIED`, acesso);

  const publicados = (j.elements || []).filter(
    (p) => p.lifecycleState === 'PUBLISHED' && p.visibility === 'PUBLIC' && urnDaImagem(p),
  );

  const posts = [];
  for (const p of publicados) {
    const imagem = await urlDaImagem(urnDaImagem(p), acesso);
    if (!imagem) continue; // o site mostra cards de imagem; post só de texto fica de fora
    posts.push({
      url: `https://www.linkedin.com/feed/update/${p.id}/`,
      imagem,
      texto: resumo(p.commentary || p.content?.article?.title),
      data: p.publishedAt ? new Date(p.publishedAt).toISOString() : null,
    });
    if (posts.length >= QUANTOS) break;
  }
  return posts;
}

module.exports = async function (context) {
  const responder = (status, corpo, cacheSeg = 0) => {
    context.res = {
      status,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': cacheSeg ? `public, max-age=${cacheSeg}` : 'no-store',
      },
      body: corpo,
    };
  };

  if (!process.env.LINKEDIN_ORG_ID) {
    return responder(503, { erro: 'nao-configurado' });
  }

  if (cache.posts && Date.now() < cache.ate) {
    return responder(200, { posts: cache.posts }, 900);
  }

  try {
    const posts = await buscarPosts();
    if (!posts.length) return responder(503, { erro: 'sem-posts' });
    cache = { ate: Date.now() + CACHE_MS, posts };
    return responder(200, { posts }, 900);
  } catch (erro) {
    context.log.error('LinkedIn:', erro.message);
    // falhou agora, mas ainda há uma lista recente: melhor que os posts fixos
    if (cache.posts) return responder(200, { posts: cache.posts }, 300);
    return responder(503, { erro: 'indisponivel' });
  }
};
