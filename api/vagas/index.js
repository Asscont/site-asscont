/* ==========================================================================
   GET /api/vagas

   Devolve as vagas abertas da ASSCONT no Pandapé, já no formato da página
   Trabalhe Conosco (o mesmo tipo `Vaga` de frontend/src/data/vagas.ts).

   Fonte: a página pública de carreiras do Pandapé
     https://asscontassessoria.pandape.infojobs.com.br
   A lista vem da página inicial e o detalhe de cada vaga de /Detail/{id}.
   O Pandapé não oferece API pública de vagas; se o plano passar a ter uma,
   é aqui que ela entra, sem mudar o site.

   Atualização: a lista fica guardada por 30 minutos. Vaga aberta ou fechada
   no Pandapé aparece ou some do site nesse intervalo.

   Se o Pandapé não responder ou mudar o layout a ponto de nada ser lido, a
   função responde 503 e o site continua com a lista fixa de vagas.ts.

   Variável de ambiente opcional:
     PANDAPE_URL   endereço da página de carreiras (padrão: o da ASSCONT)
   ========================================================================== */

const BASE = (process.env.PANDAPE_URL || 'https://asscontassessoria.pandape.infojobs.com.br').replace(/\/$/, '');
const CACHE_MS = 30 * 60 * 1000;
const DESTAQUES = 2; // as duas primeiras vão para os cartões grandes, como no layout original; o resto, para a lista

let cache = { ate: 0, vagas: null };

/* ----------------------------------------------------------- texto e HTML */

const ENTIDADES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decodificar(texto) {
  return String(texto || '')
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&([a-z]+);/gi, (m, n) => ENTIDADES[n.toLowerCase()] ?? m);
}

function semTags(html) {
  return decodificar(String(html || '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ').trim();
}

function slug(texto) {
  return texto
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function baixar(caminho) {
  const r = await fetch(`${BASE}${caminho}`, {
    headers: { 'User-Agent': 'Mozilla/5.0 (site asscont.com.br)', Accept: 'text/html' },
  });
  if (!r.ok) throw new Error(`Pandapé ${r.status} em ${caminho}`);
  return r.text();
}

/* ------------------------------------------------------------------ lista */

/* Cada vaga da lista é um <a class="card card-vacancy" href="/Detail/ID">,
   com o título no <h3 title="..."> e os dados em blocos marcados por ícone. */
function lerLista(html) {
  const vagas = [];
  const cartao = /<a[^>]*class="[^"]*card-vacancy[^"]*"[^>]*href="\/Detail\/(\d+)"[^>]*>([\s\S]*?)<\/a>/g;
  let m;
  while ((m = cartao.exec(html))) {
    const [, id, corpo] = m;
    const titulo = decodificar((corpo.match(/<h3[^>]*title="([^"]+)"/) || [])[1] || '').trim();
    if (!titulo) continue;

    const porIcone = {};
    const bloco = /<i class="icon icon-([a-z0-9-]+)"><\/i>\s*<\/div>([\s\S]*?)<\/div>/g;
    let b;
    while ((b = bloco.exec(corpo))) porIcone[b[1]] = semTags(b[2]);

    vagas.push({
      id,
      titulo,
      local: porIcone['location-pin-1'] || '',
      modalidade: porIcone.buildings || '',
      jornada: porIcone.clock || '',
      posicoes: porIcone.candidates || '',
      contrato: porIcone.sheet || '',
      salario: porIcone.wallet || '',
    });
  }
  return vagas;
}

/* ---------------------------------------------------------------- detalhe */

function etiquetasDe(html, idBloco) {
  const ini = html.indexOf(`id="${idBloco}"`);
  if (ini < 0) return [];
  const fim = html.indexOf('</div>\n                            </div>', ini);
  const trecho = html.slice(ini, fim > ini ? fim : ini + 6000);
  return [...trecho.matchAll(/class="js_tagText[^"]*"[^>]*>([^<]+)</g)]
    .map((x) => decodificar(x[1]).trim())
    .map((x) => x.charAt(0).toLocaleUpperCase('pt-BR') + x.slice(1));
}

/* A descrição vem em HTML livre escrito pelo RH: títulos em <strong> e listas
   em <ul>. Agrupa cada lista sob o título que vem antes dela. */
function lerDescricao(html) {
  const ini = html.indexOf('id="description"');
  if (ini < 0) return { secoes: [], texto: '' };
  const fim = html.indexOf('id="Requirements"', ini);
  const bloco = html.slice(ini, fim > ini ? fim : ini + 20000);

  const secoes = [];
  let atual = { titulo: '', itens: [] };
  const peca = /<strong>([\s\S]*?)<\/strong>|<li>([\s\S]*?)<\/li>/g;
  let p;
  while ((p = peca.exec(bloco))) {
    if (p[1] !== undefined) {
      if (atual.titulo || atual.itens.length) secoes.push(atual);
      atual = { titulo: semTags(p[1]), itens: [] };
    } else {
      const item = semTags(p[2]).replace(/[;.]\s*$/, '');
      if (item) atual.itens.push(item);
    }
  }
  if (atual.titulo || atual.itens.length) secoes.push(atual);
  return { secoes, texto: semTags(bloco.replace(/^[^>]*>/, '')) };
}

function secao(secoes, ...palavras) {
  const achada = secoes.find((s) => palavras.some((p) => s.titulo.toLowerCase().includes(p)));
  return achada ? achada.itens : [];
}

function lerDetalhe(html) {
  const nivel = semTags(
    (html.match(/icon-suitcase"><\/i>\s*<\/div>\s*<span[^>]*>([^<]+)</) || [])[1] || '',
  );
  const { secoes, texto } = lerDescricao(html);
  return {
    nivel,
    formacao: etiquetasDe(html, 'Studies').join(', '),
    competencias: etiquetasDe(html, 'Skills'),
    atividades: secao(secoes, 'atividade', 'responsabilidade', 'função', 'funcoes'),
    desejavel: secao(secoes, 'desejável', 'desejavel', 'requisito', 'diferencia'),
    texto,
  };
}

/* ------------------------------------------------------------- montagem */

function resumir(texto, atividades) {
  const base = atividades.length ? atividades.slice(0, 2).join('. ') : texto;
  const limpo = base.replace(/\s+/g, ' ').trim();
  return limpo.length > 190 ? `${limpo.slice(0, 187).replace(/\s+\S*$/, '')}...` : `${limpo}.`;
}

function montar(item, detalhe, indice) {
  const salario = item.salario ? item.salario.replace(/\s+/g, ' ').trim() : 'A combinar';
  const nivel = detalhe.nivel || '';
  const regime = [item.modalidade, item.local].filter(Boolean).join(' · ');
  return {
    id: `${slug(item.titulo)}-${item.id}`,
    titulo: item.titulo,
    meta: [nivel, item.local, item.posicoes].filter(Boolean).join(' · '),
    salario,
    resumo: resumir(detalhe.texto, detalhe.atividades),
    destaque: indice < DESTAQUES,
    tags: detalhe.competencias.slice(0, 4),
    horario: item.jornada,
    regime: [item.contrato, regime].filter(Boolean).join(' · '),
    formacao: detalhe.formacao,
    nivel,
    atividades: detalhe.atividades,
    desejavel: detalhe.desejavel,
    conhecimentos: detalhe.competencias,
    url: `${BASE}/Detail/${item.id}`,
  };
}

/* O total que a própria página anuncia ("3 Vagas de Emprego"). Serve para
   distinguir "nenhuma vaga aberta" de "não consegui ler a página". */
function totalAnunciado(html) {
  const m = html.match(/font-3xl[^>]*>\s*<span>(\d+)<\/span>/);
  return m ? Number(m[1]) : null;
}

async function buscarVagas() {
  const html = await baixar('/');
  const lista = lerLista(html);
  if (!lista.length) {
    if (totalAnunciado(html) === 0) return [];
    throw new Error('nenhuma vaga lida, e a página não diz que são 0: o layout pode ter mudado');
  }
  const vagas = [];
  for (const [i, item] of lista.entries()) {
    let detalhe = { nivel: '', formacao: '', competencias: [], atividades: [], desejavel: [], texto: '' };
    try {
      detalhe = lerDetalhe(await baixar(`/Detail/${item.id}`));
    } catch {
      // sem o detalhe a vaga ainda aparece, com o que a lista trouxe
    }
    vagas.push(montar(item, detalhe, i));
  }
  return vagas;
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

  if (cache.vagas && Date.now() < cache.ate) {
    return responder(200, { vagas: cache.vagas, fonte: `${BASE}/` }, 300);
  }

  try {
    const vagas = await buscarVagas();
    /* Lista vazia só chega aqui se a página disser que há 0 vagas; se o
       layout mudar e nada for lido, buscarVagas lança erro. */
    cache = { ate: Date.now() + CACHE_MS, vagas };
    return responder(200, { vagas, fonte: `${BASE}/` }, 300);
  } catch (erro) {
    context.log.error('Pandapé:', erro.message);
    if (cache.vagas) return responder(200, { vagas: cache.vagas, fonte: `${BASE}/` }, 120);
    return responder(503, { erro: 'indisponivel' });
  }
};

// usado pelos testes
module.exports.lerLista = lerLista;
module.exports.lerDetalhe = lerDetalhe;
module.exports.totalAnunciado = totalAnunciado;
