import './TelaLegal.css';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
import { useIdioma, useTextos } from '../i18n';
import { atualizadoEm, politicaPrivacidade, termosDeUso } from '../data/legal';

type Documento = 'termos' | 'privacidade';

/* '3. Finalidade do site...' -> '3-finalidade-do-site'. O roteador já sabe
   rolar até uma âncora depois da rota: #/termos#3-finalidade-do-site */
function ancora(titulo: string) {
  return titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

export default function TelaLegal({ documento }: { documento: Documento }) {
  const t = useTextos();
  const { idioma } = useIdioma();

  const ehTermos = documento === 'termos';
  const secoes = ehTermos ? termosDeUso : politicaPrivacidade;

  return (
    <div className="tlg">
      {/* o header pede uma página conhecida; nenhuma do menu está ativa aqui */}
      <SiteHeader ativo="inicio" />

      <main>
        <section className="tlg-hero">
          <div className="tlg-hero-inner">
            <p className="tlg-kicker">{t.legal.kicker}</p>
            <h1>{ehTermos ? t.legal.termosTitulo : t.legal.privacidadeTitulo}</h1>
            <p className="tlg-data">
              {t.legal.atualizadoEm} {atualizadoEm}
            </p>
          </div>
        </section>

        <div className="tlg-corpo">
          <div className="tlg-card">
          {/* Documento jurídico de empresa brasileira: a versão em português é
              a que vale. Fora do português, avisamos em vez de exibir uma
              tradução de cortesia que poderia ser lida como vinculante. */}
            {idioma !== 'pt' && <p className="tlg-aviso">{t.legal.somentePortugues}</p>}

            <nav className="tlg-sumario" aria-label={t.legal.sumario}>
              <ol>
                {secoes.map((secao) => (
                  <li key={secao.titulo}>
                    <a href={`#/${documento}#${ancora(secao.titulo)}`}>{secao.titulo}</a>
                  </li>
                ))}
              </ol>
            </nav>

            {secoes.map((secao) => (
              <section className="tlg-secao" id={ancora(secao.titulo)} key={secao.titulo}>
                <h2>{secao.titulo}</h2>
                {secao.paragrafos.map((paragrafo) => (
                  <p key={paragrafo}>{paragrafo}</p>
                ))}
                {secao.itens && (
                  <ul>
                    {secao.itens.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            <p className="tlg-troca">
              <a href={ehTermos ? '#/privacidade' : '#/termos'}>
                {ehTermos ? t.legal.verPrivacidade : t.legal.verTermos}
              </a>
            </p>
          </div>
        </div>
      </main>

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
