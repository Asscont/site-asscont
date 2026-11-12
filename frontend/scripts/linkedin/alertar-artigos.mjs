/* ==========================================================================
   Alerta de artigo novo no LinkedIn.

   A API do LinkedIn não entrega o conteúdo dos artigos da newsletter
   "Ponto Contábil" (o item da página só aponta para urn:li:linkedInArticle:...
   e a API recusa abrir esse URN). Por isso a seção Publicações continua
   manual, e este script só AVISA: para cada artigo novo publicado pela página,
   abre uma Issue no repositório, atribuída ao dono do repositório (a atribuição
   gera notificação mesmo para quem não "acompanha" o repositório).

   Roda no fim do job diário "atualizar" (.github/workflows/linkedin-posts.yml).
   Não grava nada no repositório e não faz commit.

   Regras:
     - só artigos publicados a partir de ALERTAR_A_PARTIR_DE: os que já
       existiam quando o alerta foi criado não geram Issue;
     - sem duplicatas: cada Issue tem a etiqueta ETIQUETA e, no corpo, uma marca
       com o URN do artigo. Antes de abrir, o script lê todas as Issues com a
       etiqueta (abertas e fechadas) e pula o artigo que já tiver Issue.

   Entradas (variáveis de ambiente):
     LINKEDIN_TOKEN            segredo do repositório
     GH_TOKEN                  token do próprio workflow (permissão issues: write)
     GITHUB_REPOSITORY         "dono/repositório" (o GitHub preenche)
     GITHUB_REPOSITORY_OWNER   dono do repositório (o GitHub preenche)
   Os tokens nunca são impressos. O repositório é público: as Issues também.
   ========================================================================== */

const ORGANIZACAO = 'urn:li:organization:24990701';
const VERSAO = '202610';
const BUSCAR = 20; // os mais recentes; o robô roda todo dia
const ALERTAR_A_PARTIR_DE = Date.parse('2026-11-12T22:00:00Z'); // data em que o alerta foi criado
const ETIQUETA = 'artigo-linkedin';
const PREFIXO_ARTIGO = 'urn:li:linkedInArticle:';

// Só para o teste local com servidores falsos.
const LINKEDIN = process.env.LINKEDIN_API_TESTE || 'https://api.linkedin.com/rest';
const GITHUB = process.env.GITHUB_API_TESTE || 'https://api.github.com';

class Falha extends Error {}

/* ------------------------------------------------------------ LinkedIn --- */

async function postsRecentes(token) {
  const autor = encodeURIComponent(ORGANIZACAO);
  const resposta = await fetch(`${LINKEDIN}/posts?author=${autor}&q=author&count=${BUSCAR}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'LinkedIn-Version': VERSAO,
      'X-Restli-Protocol-Version': '2.0.0',
    },
  });
  if (resposta.status === 401) {
    throw new Falha('token do LinkedIn expirado, gerar um novo (passo a passo em frontend/scripts/linkedin/LEIAME.md)');
  }
  if (!resposta.ok) {
    throw new Falha(`LinkedIn respondeu ${resposta.status} em /posts: ${(await resposta.text()).slice(0, 300)}`);
  }
  return (await resposta.json()).elements || [];
}

/* Item da página que aponta para um artigo da newsletter. */
function artigoDoPost(post) {
  const urn = post.content?.reference?.id;
  return typeof urn === 'string' && urn.startsWith(PREFIXO_ARTIGO) ? urn : null;
}

/* -------------------------------------------------------------- GitHub --- */

async function github(metodo, caminho, corpo) {
  const resposta = await fetch(`${GITHUB}${caminho}`, {
    method: metodo,
    headers: {
      Authorization: `Bearer ${process.env.GH_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      ...(corpo ? { 'Content-Type': 'application/json' } : {}),
    },
    body: corpo ? JSON.stringify(corpo) : undefined,
  });
  const texto = await resposta.text();
  return { status: resposta.status, ok: resposta.ok, json: texto ? JSON.parse(texto) : null };
}

/* Marca no corpo da Issue. É por ela que o script reconhece o artigo depois. */
const marca = (urn) => `<!-- artigo-linkedin: ${urn} -->`;

async function artigosJaAlertados(repo) {
  const urns = new Set();
  for (let pagina = 1; pagina <= 10; pagina += 1) {
    const r = await github('GET', `/repos/${repo}/issues?labels=${ETIQUETA}&state=all&per_page=100&page=${pagina}`);
    if (!r.ok) throw new Falha(`GitHub respondeu ${r.status} ao listar as Issues: ${r.json?.message || ''}`);
    for (const issue of r.json) {
      for (const m of String(issue.body || '').matchAll(/<!-- artigo-linkedin: (urn:li:linkedInArticle:[^ ]+) -->/g)) {
        urns.add(m[1]);
      }
    }
    if (r.json.length < 100) break;
  }
  return urns;
}

async function garantirEtiqueta(repo) {
  const r = await github('POST', `/repos/${repo}/labels`, {
    name: ETIQUETA,
    color: '0a66c2',
    description: 'Artigo novo da newsletter no LinkedIn, para incluir em Publicações',
  });
  // 422 = a etiqueta já existe
  if (!r.ok && r.status !== 422) throw new Falha(`GitHub respondeu ${r.status} ao criar a etiqueta: ${r.json?.message || ''}`);
}

function dataBrasil(ms) {
  return new Date(ms).toLocaleDateString('pt-BR', { timeZone: 'America/Sao_Paulo' });
}

/* -------------------------------------------------------------- começo --- */

async function principal() {
  const token = process.env.LINKEDIN_TOKEN;
  if (!token) throw new Falha('segredo LINKEDIN_TOKEN não configurado no repositório');
  if (!process.env.GH_TOKEN) throw new Falha('GH_TOKEN não definido no workflow');
  const repo = process.env.GITHUB_REPOSITORY;
  const dono = process.env.GITHUB_REPOSITORY_OWNER;
  if (!repo || !dono) throw new Falha('GITHUB_REPOSITORY e GITHUB_REPOSITORY_OWNER não definidos');

  const posts = await postsRecentes(token);
  const artigos = posts.filter((p) => p.lifecycleState === 'PUBLISHED' && p.visibility === 'PUBLIC' && artigoDoPost(p));
  const novos = artigos.filter((p) => (p.publishedAt || p.createdAt || 0) >= ALERTAR_A_PARTIR_DE);

  console.log(`Artigos publicados entre os ${posts.length} itens recentes: ${artigos.length} (${artigos.length - novos.length} anteriores ao alerta, ignorados).`);
  if (!novos.length) {
    console.log('Nenhum artigo novo. Nada a avisar.');
    return;
  }

  const jaAlertados = await artigosJaAlertados(repo);
  const pendentes = novos.filter((p) => !jaAlertados.has(artigoDoPost(p)));
  console.log(`${novos.length - pendentes.length} já tinham Issue; ${pendentes.length} para avisar.`);
  if (!pendentes.length) return;

  await garantirEtiqueta(repo);
  // do mais antigo para o mais novo, para as Issues ficarem em ordem
  for (const post of pendentes.reverse()) {
    const urn = artigoDoPost(post);
    const quando = post.publishedAt || post.createdAt;
    const data = dataBrasil(quando);
    const link = `https://www.linkedin.com/feed/update/${post.id}`;
    const corpo = [
      `A página da ASSCONT publicou um artigo novo no LinkedIn em **${data}**.`,
      '',
      `- Post: ${link}`,
      `- Artigo: \`${urn}\``,
      '',
      '**O que fazer:** abrir o post, copiar o artigo e incluí-lo na seção Publicações (`frontend/src/data/publicacoes.ts`, com tradução em `en.ts` e `es.ts`), seguindo o padrão dos artigos que já existem.',
      '',
      'Antes de incluir, conferir se ele já não está em Publicações: artigo que já existe não entra de novo (regra em `PROXIMOS_PASSOS.md`).',
      '',
      'Depois de publicar, feche esta Issue. Ela não será aberta de novo para o mesmo artigo.',
      '',
      '_Aberta automaticamente pelo robô do LinkedIn (`.github/workflows/linkedin-posts.yml`)._',
      '',
      marca(urn),
    ].join('\n');

    const r = await github('POST', `/repos/${repo}/issues`, {
      title: `Novo artigo no LinkedIn em ${data}: incluir em Publicações`,
      body: corpo,
      labels: [ETIQUETA],
      assignees: [dono],
    });
    if (!r.ok) throw new Falha(`GitHub respondeu ${r.status} ao abrir a Issue: ${r.json?.message || ''}`);
    console.log(`Issue #${r.json.number} aberta: artigo de ${data} (${post.id}).`);
    if (!(r.json.assignees || []).some((a) => a.login === dono)) {
      console.log(`::warning::A Issue #${r.json.number} foi aberta, mas não ficou atribuída a ${dono}: o aviso pode não chegar por notificação.`);
    }
  }
}

principal().catch((erro) => {
  const mensagem = erro instanceof Falha ? erro.message : `erro inesperado: ${erro.message}`;
  console.log(`::error::${mensagem}`);
  process.exitCode = 1;
});
