import type { Publicacao } from '../data/publicacoes';
import type { Textos } from './textos/pt';

/* Aplica a tradução de um artigo por cima do original.

   O artigo em português vive em data/publicacoes.ts, que continua sendo o
   lugar de publicar; a tradução, quando existe, vem de t.blog.artigos pela
   chave do slug. Artigo sem tradução aparece em português.

   Fica aqui, e não dentro de uma tela, porque os artigos aparecem em DOIS
   lugares: o carrossel da Início e a página de Publicações. Antes cada tela
   resolvia isso por conta própria, e a Início acabou ficando sem tradução. */
export function traduzirPublicacao(publicacao: Publicacao, t: Textos): Publicacao {
  return { ...publicacao, ...t.blog.artigos[publicacao.slug] };
}
