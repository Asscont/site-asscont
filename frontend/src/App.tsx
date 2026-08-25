import { useEffect, useState } from 'react';
import TelaInicio from './pages/TelaInicio';
import TelaQuemSomos from './pages/TelaQuemSomos';
import TelaServicos from './pages/TelaServicos';
import TelaBlog from './pages/TelaBlog';
import TelaTrabalheConosco from './pages/TelaTrabalheConosco';
import TelaLegal from './pages/TelaLegal';
import { Meta, ProvedorIdioma } from './i18n';
import { lerCaminho, navegar } from './i18n/rotas';

/* URLs limpas: /servicos, /en/servicos, /publicacoes/meu-artigo.

   Isso depende do servidor devolver o index.html para qualquer endereço que
   não seja um arquivo — o navigationFallback do staticwebapp.config.json.
   O GitHub Pages não sabe fazer isso, e era por esse motivo que o site usava
   #/servicos antes. */

function lerLocal() {
  const { idioma, rota } = lerCaminho(window.location.pathname);
  return { idioma, rota, ancora: window.location.hash.replace(/^#/, '') };
}

function useRota() {
  const [local, setLocal] = useState(lerLocal);

  useEffect(() => {
    const aoNavegar = () => {
      const proximo = lerLocal();
      setLocal(proximo);
      if (!proximo.ancora) window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', aoNavegar);
    return () => window.removeEventListener('popstate', aoNavegar);
  }, []);

  /* Um clique em link interno navega sem recarregar. Sem isso cada link seria
     um carregamento completo da página: funciona, mas pisca e perde o estado
     dos carrosséis. Cliques com Ctrl, Cmd ou botão do meio seguem o caminho
     normal do navegador, para não quebrar "abrir em nova aba". */
  useEffect(() => {
    const aoClicar = (evento: MouseEvent) => {
      if (evento.defaultPrevented || evento.button !== 0) return;
      if (evento.metaKey || evento.ctrlKey || evento.shiftKey || evento.altKey) return;

      const link = (evento.target as HTMLElement | null)?.closest?.('a');
      const href = link?.getAttribute('href');
      if (!link || !href) return;
      if (link.target === '_blank' || link.hasAttribute('download')) return;
      if (!href.startsWith('/')) return; // externo, mailto:, tel: ou âncora pura

      evento.preventDefault();
      navegar(href);
    };

    document.addEventListener('click', aoClicar);
    return () => document.removeEventListener('click', aoClicar);
  }, []);

  // a tela de destino precisa montar antes de existir o elemento da âncora
  useEffect(() => {
    if (!local.ancora) return;
    const rolar = () =>
      document.getElementById(local.ancora)?.scrollIntoView({ block: 'start' });
    const t1 = window.setTimeout(rolar, 80);
    const t2 = window.setTimeout(rolar, 500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [local.rota, local.ancora]);

  return local;
}

function Tela({ rota }: { rota: string }) {
  if (rota.startsWith('publicacoes/')) {
    return <TelaBlog slug={rota.replace('publicacoes/', '')} />;
  }

  switch (rota) {
    case 'servicos':
      return <TelaServicos />;
    case 'quem-somos':
      return <TelaQuemSomos />;
    case 'publicacoes':
    case 'blog':
      return <TelaBlog />;
    case 'contato':
      return <TelaInicio destino="contato" />;
    case 'trabalhe-conosco':
      return <TelaTrabalheConosco />;
    case 'termos':
      return <TelaLegal documento="termos" />;
    case 'privacidade':
      return <TelaLegal documento="privacidade" />;
    case '':
    case 'inicio':
    default:
      return <TelaInicio />;
  }
}

function App() {
  const { idioma, rota } = useRota();

  /* O provedor recebe o idioma de fora: quem lê a URL é o roteador, e não faz
     sentido dois lugares lendo a mesma coisa. */
  return (
    <ProvedorIdioma idioma={idioma}>
      <Meta rota={rota} />
      <Tela rota={rota} />
    </ProvedorIdioma>
  );
}

export default App;
