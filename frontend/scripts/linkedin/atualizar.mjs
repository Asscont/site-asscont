/* ==========================================================================
   Robô do LinkedIn: atualiza a aba "LinkedIn" de "Nas nossas redes" (Início).

   Roda uma vez por dia no GitHub Actions (.github/workflows/linkedin-posts.yml).
   Não faz parte do site publicado. Leia o LEIAME.md desta pasta.

   O que faz, em ordem:
     1. Pede ao LinkedIn os posts recentes da página da ASSCONT.
     2. Fica com os QUANTOS mais recentes que são públicos e têm imagem.
     3. Se nenhum deles for novo em relação ao arquivo de dados, para aqui.
        Nada é gravado e o workflow não faz commit.
     4. Se houver post novo, baixa as imagens (o link do LinkedIn expira em
        uns 7 dias, por isso a imagem é guardada no próprio site), converte
        para .webp, apaga as imagens que saíram da lista e grava o JSON.
     5. Avisa o workflow ("mudou=true") para ele fazer o commit e publicar.

   Entrada: variável de ambiente LINKEDIN_TOKEN (segredo do repositório).
   O token só é usado no cabeçalho das chamadas a api.linkedin.com. Nunca é
   impresso, e não vai para o servidor de imagens do LinkedIn.
   ========================================================================== */

import { appendFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const ORGANIZACAO = 'urn:li:organization:24990701';
const VERSAO = '202610'; // cabeçalho LinkedIn-Version (AAAAMM); o LinkedIn aposenta versões com ~1 ano
const QUANTOS = 6; // o carrossel mostra 3 por vez: 6 dá duas "páginas"
const BUSCAR = 20; // olha mais posts do que precisa, porque alguns são pulados (vídeo, só texto)

// Só para o teste local com servidor falso. No GitHub fica o endereço real.
const API = process.env.LINKEDIN_API_TESTE || 'https://api.linkedin.com/rest';

const FRONTEND = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const ARQUIVO_DADOS = join(FRONTEND, 'src', 'data', 'linkedinPosts.json');
const PASTA_IMAGENS = join(FRONTEND, 'public', 'linkedin');
const ENDERECO_IMAGENS = '/linkedin'; // como o site enxerga a pasta acima

class Falha extends Error {}

/* ------------------------------------------------------------ LinkedIn --- */

async function chamar(caminho, token) {
  const resposta = await fetch(`${API}${caminho}`, {
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
    // mostra só o caminho, sem parâmetros, e o começo da resposta do LinkedIn
    const corpo = (await resposta.text()).slice(0, 300);
    throw new Falha(`LinkedIn respondeu ${resposta.status} em ${caminho.split('?')[0]}: ${corpo}`);
  }
  return resposta.json();
}

/* Qual imagem representa o post no cartão. null = post fica de fora. */
function imagemDoPost(post) {
  const c = post.content || {};
  const ehImagem = (urn) => typeof urn === 'string' && urn.startsWith('urn:li:image:');
  if (ehImagem(c.media?.id)) return c.media.id; // uma imagem
  if (ehImagem(c.multiImage?.images?.[0]?.id)) return c.multiImage.images[0].id; // várias: a primeira
  if (ehImagem(c.article?.thumbnail)) return c.article.thumbnail; // artigo: a miniatura
  return null; // vídeo, só texto, enquete...
}

/* Legenda do post, limpa e curta. Os posts atuais vêm sem legenda (""). */
function resumo(texto) {
  const limpo = String(texto || '')
    .replace(/\{hashtag\|\\?#\|([^}]*)\}/g, '#$1') // hashtags vêm como {hashtag|\#|x}
    .replace(/@\[([^\]]*)\]\([^)]*\)/g, '$1') // menções vêm como @[Nome](urn:li:...)
    .replace(/\\([\\()[\]{}@#*_~<>|])/g, '$1') // o LinkedIn escapa estes caracteres
    .replace(/\s+/g, ' ')
    .trim();
  return limpo.length > 140 ? `${limpo.slice(0, 137)}...` : limpo;
}

/* O número no fim do id vira o nome do arquivo: urn:li:share:7516... -> 7516....webp */
function nomeDoArquivo(id) {
  return `${id.split(':').pop().replace(/[^0-9A-Za-z_-]/g, '')}.webp`;
}

async function baixarImagem(urn, token, destino) {
  const { downloadUrl } = await chamar(`/images/${encodeURIComponent(urn)}`, token);
  if (!downloadUrl) throw new Error('o LinkedIn não devolveu downloadUrl');
  // o downloadUrl já é um link assinado: vai sem o token
  const resposta = await fetch(downloadUrl);
  if (!resposta.ok) throw new Error(`download da imagem respondeu ${resposta.status}`);
  const original = Buffer.from(await resposta.arrayBuffer());
  const { data, info } = await sharp(original)
    .rotate()
    .resize({ width: 1080, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer({ resolveWithObject: true });
  writeFileSync(destino, data);
  return { largura: info.width, altura: info.height };
}

/* --------------------------------------------------------------- dados --- */

function lerDados() {
  if (!existsSync(ARQUIVO_DADOS)) return { posts: [] };
  return JSON.parse(readFileSync(ARQUIVO_DADOS, 'utf8'));
}

function avisarWorkflow(mudou) {
  if (process.env.GITHUB_OUTPUT) appendFileSync(process.env.GITHUB_OUTPUT, `mudou=${mudou}\n`);
}

/* -------------------------------------------------------------- começo --- */

async function principal() {
  const token = process.env.LINKEDIN_TOKEN;
  if (!token) throw new Falha('segredo LINKEDIN_TOKEN não configurado no repositório');

  const atual = lerDados();
  const conhecidos = new Map(atual.posts.map((p) => [p.id, p]));

  const autor = encodeURIComponent(ORGANIZACAO);
  const resposta = await chamar(`/posts?author=${autor}&q=author&count=${BUSCAR}`, token);

  const candidatos = (resposta.elements || [])
    .filter((p) => p.lifecycleState === 'PUBLISHED' && p.visibility === 'PUBLIC')
    .filter((p) => !p.reshareContext) // compartilhamento de post de outra página
    .filter((p) => imagemDoPost(p))
    .sort((a, b) => (b.publishedAt || b.createdAt || 0) - (a.publishedAt || a.createdAt || 0));

  console.log(`LinkedIn devolveu ${resposta.elements?.length ?? 0} posts; ${candidatos.length} com imagem.`);

  // Antes de baixar qualquer coisa: algum dos mais recentes é novo?
  const topo = candidatos.slice(0, QUANTOS);
  const novos = topo.filter((p) => !conhecidos.has(p.id));
  if (!novos.length) {
    console.log('Nenhum post novo. Nada a fazer.');
    avisarWorkflow(false);
    return;
  }
  console.log(`${novos.length} post(s) novo(s). Atualizando.`);

  mkdirSync(PASTA_IMAGENS, { recursive: true });
  const escolhidos = [];
  for (const post of candidatos) {
    if (escolhidos.length >= QUANTOS) break;
    const arquivo = nomeDoArquivo(post.id);
    const caminho = join(PASTA_IMAGENS, arquivo);
    const anterior = conhecidos.get(post.id);

    let medidas;
    if (anterior && existsSync(caminho)) {
      medidas = { largura: anterior.largura, altura: anterior.altura }; // já está no site
    } else {
      try {
        medidas = await baixarImagem(imagemDoPost(post), token, caminho);
      } catch (erro) {
        if (erro instanceof Falha && /expirado/.test(erro.message)) throw erro;
        console.log(`::warning::Imagem do post ${post.id} não baixou (${erro.message}). Post pulado.`);
        continue;
      }
    }

    const quando = post.publishedAt || post.createdAt;
    escolhidos.push({
      id: post.id,
      url: `https://www.linkedin.com/feed/update/${post.id}/`,
      imagem: `${ENDERECO_IMAGENS}/${arquivo}`,
      ...medidas,
      data: quando ? new Date(quando).toISOString() : null,
      texto: resumo(post.commentary || post.content?.article?.title),
      // texto alternativo escrito à mão (pt/en/es) sobrevive enquanto o post estiver na lista
      ...(anterior?.alt ? { alt: anterior.alt } : {}),
    });
  }

  if (!escolhidos.length) throw new Falha('nenhum post com imagem pôde ser baixado; o site fica como está');

  // apaga as imagens que saíram da lista
  const emUso = new Set(escolhidos.map((p) => p.imagem.split('/').pop()));
  for (const arquivo of readdirSync(PASTA_IMAGENS)) {
    if (!emUso.has(arquivo)) rmSync(join(PASTA_IMAGENS, arquivo));
  }

  const dados = { atualizadoEm: new Date().toISOString(), posts: escolhidos };
  writeFileSync(ARQUIVO_DADOS, `${JSON.stringify(dados, null, 2)}\n`);
  console.log(`Gravados ${escolhidos.length} posts em src/data/linkedinPosts.json.`);
  avisarWorkflow(true);
}

principal().catch((erro) => {
  const mensagem = erro instanceof Falha ? erro.message : `erro inesperado: ${erro.message}`;
  console.log(`::error::${mensagem}`); // anotação vermelha no resumo do GitHub Actions
  process.exitCode = 1;
});
