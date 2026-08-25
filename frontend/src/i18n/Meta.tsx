import { useEffect } from 'react';
import { useTextos } from './contexto';
import { traduzirPublicacao } from './publicacoes';
import { publicacoes } from '../data/publicacoes';
import type { Textos } from './textos/pt';

/* ==========================================================================
   <title> e <meta description> por página e por idioma.

   O index.html tem um título fixo em português. Sem isto, a versão em inglês
   apareceria no Google com o título em português, e todas as páginas
   apareceriam com o mesmo título — o que atrapalha tanto o buscador quanto
   quem tem várias abas abertas.

   LIMITE IMPORTANTE: isto roda no navegador. O Google executa JavaScript e
   lê o título ajustado, mas os robôs de pré-visualização de link (WhatsApp,
   LinkedIn, Slack) NÃO executam JavaScript — eles leem o HTML cru e vão
   mostrar sempre o título do index.html. Resolver isso exige gerar as páginas
   no servidor (pré-renderização), que é um trabalho de outra ordem.
   ========================================================================== */

function textoDaRota(rota: string, t: Textos): { titulo: string; descricao: string } {
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

function definirMeta(nome: string, conteudo: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[name="${nome}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute('name', nome);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', conteudo);
}

export function Meta({ rota }: { rota: string }) {
  const t = useTextos();
  const { titulo, descricao } = textoDaRota(rota, t);

  /* a Início e os artigos já são títulos completos; as outras páginas ganham
     " | ASSCONT" para o resultado de busca dizer de quem é o site */
  const ehTituloCompleto = titulo === t.meta.inicioTitulo || rota.startsWith('publicacoes/');
  const tituloFinal = ehTituloCompleto ? titulo : titulo + t.meta.sufixo;

  useEffect(() => {
    document.title = tituloFinal;
    definirMeta('description', descricao);
  }, [tituloFinal, descricao]);

  return null;
}

export default Meta;
