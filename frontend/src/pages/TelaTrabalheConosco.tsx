import { useEffect, useState } from 'react';
import './TelaTrabalheConosco.css';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';
import { imgHeroInicio, imgPredioQuemSomos } from '../figmaAssets';
import { vagas, totalBeneficios, numeros, emailRh, type Vaga } from '../data/vagas';
import { useTextos } from '../i18n';

/* título e texto em t.trabalheConosco.valoresTitulos / valoresTextos */
const valores = ['01', '02', '03'];

const destaques = vagas.filter((vaga) => vaga.destaque);
const demais = vagas.filter((vaga) => !vaga.destaque);

function linkCandidatura(vaga: Vaga, assunto: string) {
  return `mailto:${emailRh}?subject=${encodeURIComponent(`${assunto} — ${vaga.titulo}`)}`;
}

export default function TelaTrabalheConosco() {
  const t = useTextos();
  const [vagaAberta, setVagaAberta] = useState<string | null>(null);
  const vaga = vagas.find((item) => item.id === vagaAberta) ?? null;
  /* as vagas em destaque nao trazem lista de conhecimentos: nesse caso as
     proprias etiquetas do cartao fazem esse papel no detalhe */
  const etiquetas = vaga ? (vaga.conhecimentos.length > 0 ? vaga.conhecimentos : vaga.tags) : [];

  // Esc fecha o detalhe e o fundo para de rolar enquanto ele estiver aberto.
  useEffect(() => {
    if (!vaga) return;

    const aoTeclar = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setVagaAberta(null);
    };
    const anterior = document.body.style.overflow;

    window.addEventListener('keydown', aoTeclar);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', aoTeclar);
      document.body.style.overflow = anterior;
    };
  }, [vaga]);

  return (
    <div className="ttc-page">
      <SiteHeader ativo="trabalhe-conosco" />

      <main>
        <section className="ttc-hero">
          <img className="ttc-hero-bg" src={imgHeroInicio} alt="" aria-hidden="true" width={1280} height={634} fetchPriority="high" decoding="async" />
          <div className="ttc-hero-overlay" aria-hidden="true" />
          <div className="ttc-hero-shape" aria-hidden="true" />
          <div className="ttc-container ttc-hero-content">
            <p className="ttc-eyebrow ttc-eyebrow--dark">{t.trabalheConosco.heroEyebrow}</p>
            <h1>{t.trabalheConosco.heroTitulo}</h1>
            <p className="ttc-hero-text">{t.trabalheConosco.heroTexto}</p>
            <div className="ttc-hero-actions">
              <a className="asc-btn" href="#/trabalhe-conosco#mais-oportunidades">
                <span>{t.trabalheConosco.heroBotao}</span>
              </a>
              <a className="ttc-link-button" href={`mailto:${emailRh}`}>
                {emailRh}
              </a>
            </div>
          </div>
        </section>

        <section className="ttc-numeros" aria-label={t.trabalheConosco.numerosAria}>
          <div className="ttc-container ttc-numeros-grid">
            {numeros.map((item, i) => (
              <div className="ttc-numero" key={t.trabalheConosco.numerosRotulos[i]}>
                <strong>{item.valor || t.trabalheConosco.numeroCarreira}</strong>
                <span>{t.trabalheConosco.numerosRotulos[i]}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ttc-intro">
          <div className="ttc-container ttc-intro-grid">
            <div className="ttc-intro-copy">
              <p className="ttc-eyebrow">{t.trabalheConosco.introEyebrow}</p>
              <h2>{t.trabalheConosco.introTitulo}</h2>
              <p>{t.trabalheConosco.introTexto}</p>
            </div>
            <div className="ttc-intro-image-wrap">
              <img src={imgPredioQuemSomos} alt={t.trabalheConosco.introFotoAlt} width={1400} height={1199} loading="lazy" decoding="async" />
              <div className="ttc-intro-badge">
                <strong>{t.trabalheConosco.badgeTitulo}</strong>
                <span>{t.trabalheConosco.badgeTexto}</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ttc-valores" aria-label={t.trabalheConosco.culturaAria}>
          <div className="ttc-container ttc-valores-grid">
            {valores.map((numero, i) => (
              <article className="ttc-valor" key={numero}>
                <span>{numero}</span>
                <h3>{t.trabalheConosco.valoresTitulos[i]}</h3>
                <p>{t.trabalheConosco.valoresTextos[i]}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ttc-vagas" id="vagas">
          <div className="ttc-container">
            <div className="ttc-vagas-head">
              <div>
                <p className="ttc-eyebrow">{t.trabalheConosco.vagasEyebrow}</p>
                <h2>{t.trabalheConosco.vagasTitulo}</h2>
              </div>
              <p>{t.trabalheConosco.vagasNota}</p>
            </div>

            {t.trabalheConosco.vagasOriginal && (
              <p className="ttc-vagas-aviso">{t.trabalheConosco.vagasOriginal}</p>
            )}

            <div className="ttc-destaques">
              {destaques.map((item) => (
                <article className="ttc-destaque" key={item.id}>
                  <p className="ttc-destaque-tag">{t.trabalheConosco.destaqueTag}</p>
                  <h3>{item.titulo}</h3>
                  <p className="ttc-destaque-salario">{item.salario}</p>
                  <p className="ttc-destaque-resumo">{item.resumo}</p>
                  {item.tags.length > 0 && (
                    <ul className="ttc-chips">
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  )}
                  <button type="button" className="ttc-destaque-link" onClick={() => setVagaAberta(item.id)}>
                    {t.trabalheConosco.verDetalhesCandidatar} <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ttc-lista" id="mais-oportunidades" aria-label={t.trabalheConosco.listaAria}>
          <div className="ttc-container">
            <p className="ttc-eyebrow">{t.trabalheConosco.listaEyebrow}</p>
            <h2>{t.trabalheConosco.listaTitulo}</h2>

            <ul className="ttc-lista-itens">
              {demais.map((item) => (
                <li className="ttc-lista-item" key={item.id}>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.meta}</p>
                  </div>
                  <p className="ttc-lista-salario">{item.salario}</p>
                  <button type="button" className="ttc-lista-botao" onClick={() => setVagaAberta(item.id)}>
                    {t.trabalheConosco.verDetalhes}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ttc-beneficios" aria-label={t.trabalheConosco.beneficiosAria}>
          <div className="ttc-container">
            <p className="ttc-eyebrow">{t.trabalheConosco.beneficiosEyebrow}</p>
            <h2>{t.trabalheConosco.beneficiosTitulo}</h2>

            <div className="ttc-beneficios-grid">
              {Array.from({ length: totalBeneficios }, (_, i) => (
                <article className="ttc-beneficio" key={t.trabalheConosco.beneficiosTitulos[i]}>
                  <h3>{t.trabalheConosco.beneficiosTitulos[i]}</h3>
                  <p>{t.trabalheConosco.beneficiosTextos[i]}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ttc-processo">
          <div className="ttc-container ttc-processo-inner">
            <div>
              <p className="ttc-eyebrow">{t.trabalheConosco.processoEyebrow}</p>
              <h2>{t.trabalheConosco.processoTitulo}</h2>
            </div>
            <p>{t.trabalheConosco.processoTexto}</p>
            <a
              className="asc-btn"
              href={`mailto:${emailRh}?subject=${encodeURIComponent(t.trabalheConosco.processoAssunto)}`}
            >
              <span>{t.trabalheConosco.processoBotao}</span>
            </a>
          </div>
        </section>
      </main>

      {vaga && (
        <div className="ttc-modal" role="presentation" onMouseDown={() => setVagaAberta(null)}>
          <div
            className="ttc-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ttc-vaga-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button type="button" className="ttc-modal-close" onClick={() => setVagaAberta(null)} aria-label={t.trabalheConosco.modalFechar}>
              ×
            </button>

            {vaga.etiqueta && <p className="ttc-modal-etiqueta">{vaga.etiqueta}</p>}
            <h2 id="ttc-vaga-title">{vaga.titulo}</h2>
            <p className="ttc-modal-salario">{vaga.salario}</p>

            <dl className="ttc-modal-ficha">
              <div>
                <dt>{t.trabalheConosco.fichaHorario}</dt>
                <dd>{vaga.horario}</dd>
              </div>
              <div>
                <dt>{t.trabalheConosco.fichaRegime}</dt>
                <dd>{vaga.regime}</dd>
              </div>
              {vaga.formacao && (
                <div>
                  <dt>{t.trabalheConosco.fichaFormacao}</dt>
                  <dd>{vaga.formacao}</dd>
                </div>
              )}
              <div>
                <dt>{t.trabalheConosco.fichaNivel}</dt>
                <dd>{vaga.nivel}</dd>
              </div>
            </dl>

            {vaga.atividades.length > 0 && (
              <>
                <p className="ttc-modal-label">{t.trabalheConosco.modalAtividades}</p>
                <ul className="ttc-modal-lista">
                  {vaga.atividades.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            {vaga.desejavel.length > 0 && (
              <>
                <p className="ttc-modal-label">{t.trabalheConosco.modalDesejavel}</p>
                <ul className="ttc-modal-lista">
                  {vaga.desejavel.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            {vaga.atividades.length === 0 && <p className="ttc-modal-resumo">{vaga.resumo}</p>}

            {etiquetas.length > 0 && (
              <>
                <p className="ttc-modal-label">{t.trabalheConosco.modalConhecimentos}</p>
                <ul className="ttc-chips">
                  {etiquetas.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            <a
              className="asc-btn ttc-modal-cta"
              href={linkCandidatura(vaga, t.trabalheConosco.candidaturaAssunto)}
            >
              <span>{t.trabalheConosco.modalCta}</span>
            </a>
          </div>
        </div>
      )}

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
