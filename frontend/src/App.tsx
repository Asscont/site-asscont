import { useEffect, useState } from 'react';
import TelaInicio from './pages/TelaInicio';
import TelaQuemSomos from './pages/TelaQuemSomos';
import TelaServicos from './pages/TelaServicos';
import TelaBlog from './pages/TelaBlog';
import TelaTrabalheConosco from './pages/TelaTrabalheConosco';

/* A rota pode vir com uma ancora depois dela: '#/servicos#auditoria'.
   O primeiro pedaco escolhe a tela, o segundo rola ate o bloco. */
function lerHash() {
  const [rota, ancora = ''] = window.location.hash.replace(/^#\/?/, '').split('#');
  return { rota, ancora };
}

function useHashRoute() {
  const [{ rota, ancora }, setEstado] = useState(lerHash);

  useEffect(() => {
    const onHashChange = () => {
      const proximo = lerHash();
      setEstado(proximo);
      if (!proximo.ancora) window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // a tela de destino precisa montar antes de existir o elemento da ancora
  useEffect(() => {
    if (!ancora) return;
    const rolar = () => document.getElementById(ancora)?.scrollIntoView({ block: 'start' });
    const t1 = window.setTimeout(rolar, 80);
    const t2 = window.setTimeout(rolar, 500);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, [rota, ancora]);

  return rota;
}

function App() {
  const rota = useHashRoute();

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
    case 'inicio':
    default:
      return <TelaInicio />;
  }
}

export default App;
