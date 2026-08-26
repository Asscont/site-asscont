import './Tela404.css';
import { SiteHeader, SiteFooter } from '../components/SiteChrome';
import { useCaminho, useTextos } from '../i18n';

/* ==========================================================================
   Endereço inexistente.

   Antes qualquer rota desconhecida caía na Início em silêncio. Dois problemas
   nisso: o visitante não descobria que errou o endereço, e o buscador via a
   Início repetida em dezenas de URLs diferentes — cada endereço errado que
   alguém publicasse por aí virava uma cópia da home no índice.

   O noindex de verdade é posto pelo Meta.tsx, que sabe se a rota existe.
   Aqui é só a tela.

   Ainda falta o status HTTP: com o navigationFallback do Azure o servidor
   responde 200 mesmo aqui. O noindex resolve o efeito no buscador; para o
   status correto, ver a nota em public/staticwebapp.config.json.
   ========================================================================== */

export default function Tela404() {
  const t = useTextos();
  const caminho = useCaminho();

  const atalhos = [
    { rota: 'servicos', rotulo: t.header.servicos },
    { rota: 'quem-somos', rotulo: t.header.quemSomos },
    { rota: 'publicacoes', rotulo: t.header.publicacoes },
    { rota: 'contato', rotulo: t.header.contato },
  ];

  return (
    <div className="t404">
      {/* nenhuma página do menu está ativa aqui */}
      <SiteHeader ativo="inicio" />

      <main className="t404-corpo">
        <div className="t404-card">
          <p className="t404-kicker">{t.erro404.kicker}</p>
          <h1>{t.erro404.titulo}</h1>
          <p className="t404-texto">{t.erro404.descricao}</p>

          <a className="t404-voltar" href={caminho('inicio')}>
            {t.erro404.voltar}
          </a>

          <p className="t404-sugestoes">{t.erro404.sugestoes}</p>
          <ul className="t404-lista">
            {atalhos.map((atalho) => (
              <li key={atalho.rota}>
                <a href={caminho(atalho.rota)}>{atalho.rotulo}</a>
              </li>
            ))}
          </ul>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
