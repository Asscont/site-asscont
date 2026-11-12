/* ==========================================================================
   Diagnóstico do LinkedIn: só LISTA, não grava nada.

   Roda pelo botão manual do workflow "LinkedIn - posts da Início", com a
   opção modo = diagnostico. Serve para entender o que a API devolve antes de
   levar os artigos da newsletter "Ponto Contábil" para Publicações.

   Mostra:
     1. os 20 itens mais recentes da página, com tipo (imagem, artigo, vídeo,
        texto...), data, título e se já é um cartão de "Nas nossas redes";
     2. para cada ARTIGO público, todos os campos que a API devolve;
     3. se os artigos procurados (ARTIGOS_PROCURADOS) aparecem, olhando até
        LIMITE_BUSCA itens para trás;
     4. qual é o tipo de cada um dos cartões atuais de "Nas nossas redes".

   O repositório é público, então o log também é. Por isso:
     - o token nunca é impresso (e o GitHub ainda o mascara);
     - post que não esteja PUBLICADO e PÚBLICO aparece só com id e estado;
     - links com parâmetros (links assinados e temporários) saem cortados.

   Entrada: LINKEDIN_TOKEN (segredo do repositório).
   ========================================================================== */

import { appendFileSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ORGANIZACAO = 'urn:li:organization:24990701';
const VERSAO = '202610';
const LISTAR = 20; // itens mostrados em detalhe
const LIMITE_BUSCA = 100; // até onde procurar os artigos pedidos
const POR_PAGINA = 20;
const API = process.env.LINKEDIN_API_TESTE || 'https://api.linkedin.com/rest';

const ARTIGOS_PROCURADOS = [
  'O Brasil dos últimos 20 anos: o que os resultados econômicos nos ensinam?',
  'Faça o seu melhor e não se frustre',
];

const CARTOES = join(dirname(fileURLToPath(import.meta.url)), '..', '..', 'src', 'data', 'linkedinPosts.json');

class Falha extends Error {}

/* ------------------------------------------------------------- saída ---- */

const resumoMd = [];
function linha(texto = '') {
  console.log(texto);
  resumoMd.push(texto);
}

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
    const corpo = (await resposta.text()).slice(0, 300);
    throw new Falha(`LinkedIn respondeu ${resposta.status} em ${caminho.split('?')[0]}: ${corpo}`);
  }
  return resposta.json();
}

async function buscarItens(token) {
  const autor = encodeURIComponent(ORGANIZACAO);
  const itens = [];
  const vistos = new Set();
  for (let inicio = 0; inicio < LIMITE_BUSCA; inicio += POR_PAGINA) {
    const j = await chamar(`/posts?author=${autor}&q=author&count=${POR_PAGINA}&start=${inicio}`, token);
    const novos = (j.elements || []).filter((p) => !vistos.has(p.id));
    novos.forEach((p) => vistos.add(p.id));
    itens.push(...novos);
    if (novos.length < POR_PAGINA) break; // acabou (ou a API ignorou o start)
  }
  return itens;
}

/* ---------------------------------------------------------- análise ---- */

function tipoDoPost(p) {
  const c = p.content || {};
  if (p.reshareContext) return 'compartilhamento';
  if (c.article) return 'artigo';
  if (c.multiImage) return 'várias imagens';
  const midia = c.media?.id || '';
  if (midia.startsWith('urn:li:image:')) return 'imagem';
  if (midia.startsWith('urn:li:video:')) return 'vídeo';
  if (midia.startsWith('urn:li:document:')) return 'documento';
  if (c.poll) return 'enquete';
  if (c.celebration) return 'celebração';
  if (Object.keys(c).length) return `outro (${Object.keys(c).join(', ')})`;
  return 'texto';
}

const ehPublico = (p) => p.lifecycleState === 'PUBLISHED' && p.visibility === 'PUBLIC';

function limpar(texto) {
  return String(texto || '')
    .replace(/\{hashtag\|\\?#\|([^}]*)\}/g, '#$1')
    .replace(/@\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\\([\\()[\]{}@#*_~<>|])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

function tituloDoPost(p) {
  const titulo = p.content?.article?.title;
  if (titulo) return limpar(titulo);
  const legenda = limpar(p.commentary);
  if (!legenda) return '(sem título nem legenda)';
  return `legenda: ${legenda.length > 90 ? `${legenda.slice(0, 87)}...` : legenda}`;
}

function normalizar(texto) {
  return String(texto || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

/* Cópia do post para mostrar no log: corta parâmetros de links (links
   assinados) e qualquer campo com cara de credencial. */
function seguro(valor, chave = '') {
  if (/token|secret|authorization/i.test(chave)) return '[omitido]';
  if (typeof valor === 'string') {
    return valor.replace(/(https?:\/\/[^\s?"]+)\?[^\s"]*/g, '$1?[parâmetros cortados]');
  }
  if (Array.isArray(valor)) return valor.map((v) => seguro(v));
  if (valor && typeof valor === 'object') {
    return Object.fromEntries(Object.entries(valor).map(([k, v]) => [k, seguro(v, k)]));
  }
  return valor;
}

const data = (p) => {
  const t = p.publishedAt || p.createdAt;
  return t ? new Date(t).toISOString().slice(0, 16).replace('T', ' ') + ' UTC' : '(sem data)';
};

/* -------------------------------------------------------------- começo --- */

async function principal() {
  const token = process.env.LINKEDIN_TOKEN;
  if (!token) throw new Falha('segredo LINKEDIN_TOKEN não configurado no repositório');

  const itens = await buscarItens(token);
  const cartoes = JSON.parse(readFileSync(CARTOES, 'utf8')).posts.map((p) => p.id);

  linha('# Diagnóstico do LinkedIn');
  linha();
  linha(`Página: \`${ORGANIZACAO}\` · versão da API: \`${VERSAO}\` · itens lidos: ${itens.length} (até ${LIMITE_BUSCA})`);
  linha();

  /* 1. os 20 mais recentes */
  linha(`## 1. Os ${LISTAR} itens mais recentes`);
  linha();
  linha('| # | Data | Tipo | Título | Estado | Em "Nas nossas redes"? | id |');
  linha('|---|---|---|---|---|---|---|');
  itens.slice(0, LISTAR).forEach((p, i) => {
    const publico = ehPublico(p);
    const titulo = publico ? tituloDoPost(p).replace(/\|/g, '/') : '(não público: conteúdo omitido)';
    const tipo = publico ? tipoDoPost(p) : '—';
    const estado = `${p.lifecycleState || '?'} / ${p.visibility || '?'}`;
    linha(`| ${i + 1} | ${data(p)} | ${tipo} | ${titulo} | ${estado} | ${cartoes.includes(p.id) ? 'sim' : 'não'} | \`${p.id}\` |`);
  });
  linha();

  /* 2. artigos: todos os campos */
  const artigos = itens.filter((p) => ehPublico(p) && p.content?.article);
  linha(`## 2. Artigos públicos encontrados: ${artigos.length}`);
  linha();
  if (!artigos.length) {
    linha(`Nenhum artigo entre os ${itens.length} itens lidos.`);
    linha();
  }
  for (const p of artigos) {
    const a = p.content.article;
    linha(`### ${tituloDoPost(p)}`);
    linha();
    linha(`- id: \`${p.id}\` · data: ${data(p)}`);
    linha(`- campos de \`content.article\`: ${Object.keys(a).map((k) => `\`${k}\``).join(', ') || '(nenhum)'}`);
    linha(`- tamanho dos textos: título ${limpar(a.title).length} · descrição ${limpar(a.description).length} · legenda do post ${limpar(p.commentary).length} caracteres`);
    linha('- todos os campos do post, como a API devolve (links com parâmetros cortados):');
    linha();
    linha('```json');
    linha(JSON.stringify(seguro(p), null, 2));
    linha('```');
    linha();
  }

  /* 3. artigos procurados */
  linha('## 3. Artigos procurados');
  linha();
  for (const procurado of ARTIGOS_PROCURADOS) {
    const alvo = normalizar(procurado);
    const achado = itens.find((p) => ehPublico(p) && (
      normalizar(p.content?.article?.title).includes(alvo) || normalizar(p.commentary).includes(alvo)
    ));
    if (achado) {
      linha(`- **Encontrado:** "${procurado}" → \`${achado.id}\` (${tipoDoPost(achado)}, ${data(achado)})`);
    } else {
      linha(`- **NÃO encontrado:** "${procurado}", entre os ${itens.length} itens publicados pela PÁGINA. Pode ter sido publicado pelo perfil pessoal de alguém, e não pela página da ASSCONT; nesse caso a API da página não o enxerga.`);
    }
  }
  linha();

  /* 4. cartões atuais */
  linha('## 4. Cartões atuais de "Nas nossas redes"');
  linha();
  for (const id of cartoes) {
    const p = itens.find((x) => x.id === id);
    linha(`- \`${id}\`: ${p ? `${tipoDoPost(p)}${p.content?.article ? ' ← É UM ARTIGO' : ''}` : 'não está entre os itens lidos (antigo ou removido)'}`);
  }
  const algumArtigo = cartoes.some((id) => itens.find((x) => x.id === id)?.content?.article);
  linha();
  linha(algumArtigo ? '**Há artigo entre os cartões.**' : '**Nenhum dos cartões é artigo.**');

  if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, `${resumoMd.join('\n')}\n`);
}

principal().catch((erro) => {
  const mensagem = erro instanceof Falha ? erro.message : `erro inesperado: ${erro.message}`;
  console.log(`::error::${mensagem}`);
  process.exitCode = 1;
});
