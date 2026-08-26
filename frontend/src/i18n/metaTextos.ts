/* ==========================================================================
   Título e descrição por rota — e a lista de rotas que existem.

   Saiu de dentro de Meta.tsx porque três lugares precisam desta mesma
   informação:

     1. Meta.tsx        ajusta o <title> no navegador
     2. scripts/prerender.mjs  escreve o <title> no HTML, para os robôs que
                               não executam JavaScript (WhatsApp, LinkedIn)
     3. App.tsx         decide se a rota existe ou se mostra a tela 404

   Se a lista de rotas viver em três arquivos, uma página nova vai aparecer em
   um e faltar nos outros — e o sintoma é silencioso: título errado no
   compartilhamento, ou 404 numa página que existe.
   ========================================================================== */

import { publicacoes } from '../data/publicacoes';
import { traduzirPublicacao } from './publicacoes';
import type { Textos } from './textos/pt';

/** Endereço público do site. Usado em canonical, hreflang e og:url. */
export const SITE = 'https://www.asscont.com.br';

/* A rota vazia é a Início. 'inicio' e 'blog' são apelidos mantidos para quem
   tiver o endereço antigo; nenhum link do site aponta para eles. */
export const ROTAS_ESTATICAS = [
  '',
  'inicio',
  'servicos',
  'quem-somos',
  'publicacoes',
  'blog',
  'contato',
  'trabalhe-conosco',
  'termos',
  'privacidade',
] as const;

/* As que entram no sitemap e ganham HTML pré-renderizado. Sem os apelidos:
   duas URLs para a mesma página fazem o buscador escolher qual é a principal,
   e a escolha pode não ser a nossa. */
export const ROTAS_PUBLICAS = [
  '',
  'servicos',
  'quem-somos',
  'publicacoes',
  'contato',
  'trabalhe-conosco',
  'termos',
  'privacidade',
] as const;

/** A rota corresponde a alguma página? Rota desconhecida vira 404. */
export function rotaExiste(rota: string): boolean {
  if ((ROTAS_ESTATICAS as readonly string[]).includes(rota)) return true;

  if (rota.startsWith('publicacoes/')) {
    const slug = rota.replace('publicacoes/', '');
    return publicacoes.some((p) => p.slug === slug);
  }

  return false;
}

export type TextoMeta = { titulo: string; descricao: string };

function bruto(rota: string, t: Textos): TextoMeta {
  const m = t.meta;

  /* artigo do blog: o título é o do próprio artigo */
  if (rota.startsWith('publicacoes/')) {
    const slug = rota.replace('publicacoes/', '');
    const original = publicacoes.find((p) => p.slug === slug);
    if (original) {
      const artigo = traduzirPublicacao(original, t);
      return { titulo: artigo.titulo, descricao: artigo.resumo };
    }
  }

  switch (rota) {
    case 'servicos':
      return { titulo: m.servicosTitulo, descricao: m.servicosDescricao };
    case 'quem-somos':
      return { titulo: m.quemSomosTitulo, descricao: m.quemSomosDescricao };
    case 'publicacoes':
    case 'blog':
      return { titulo: m.publicacoesTitulo, descricao: m.publicacoesDescricao };
    case 'contato':
      return { titulo: m.contatoTitulo, descricao: m.contatoDescricao };
    case 'trabalhe-conosco':
      return { titulo: m.trabalheConoscoTitulo, descricao: m.trabalheConoscoDescricao };
    case 'termos':
      return { titulo: m.termosTitulo, descricao: m.termosDescricao };
    case 'privacidade':
      return { titulo: m.privacidadeTitulo, descricao: m.privacidadeDescricao };
    default:
      /* a Início já traz o nome da empresa no título; não leva sufixo */
      return { titulo: m.inicioTitulo, descricao: m.inicioDescricao };
  }
}

/** Título já com o sufixo, e descrição, prontos para ir na tag. */
export function metaDaRota(rota: string, t: Textos): TextoMeta {
  const { titulo, descricao } = bruto(rota, t);

  /* a Início e os artigos já são títulos completos; as outras páginas ganham
     " | ASSCONT" para o resultado de busca dizer de quem é o site */
  const ehCompleto = titulo === t.meta.inicioTitulo || rota.startsWith('publicacoes/');

  return { titulo: ehCompleto ? titulo : titulo + t.meta.sufixo, descricao };
}
