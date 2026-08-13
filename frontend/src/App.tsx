import { useEffect, useState } from 'react';
import TelaInicio from './pages/TelaInicio';
import TelaQuemSomos from './pages/TelaQuemSomos';
import TelaServicos from './pages/TelaServicos';
import TelaBlog from './pages/TelaBlog';
import TelaTrabalheConosco from './pages/TelaTrabalheConosco';

function useHashRoute() {
  const [rota, setRota] = useState(() => window.location.hash.replace(/^#\/?/, ''));

  useEffect(() => {
    const onHashChange = () => {
      setRota(window.location.hash.replace(/^#\/?/, ''));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

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
