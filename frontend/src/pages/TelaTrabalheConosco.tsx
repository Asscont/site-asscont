import { useEffect, useState } from 'react';
import './TelaTrabalheConosco.css';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';
import { imgHeroInicio, imgPredioQuemSomos } from '../figmaAssets';
import { vagas, beneficios, numeros, emailRh, type Vaga } from '../data/vagas';

const valores = [
  {
    numero: '01',
    titulo: 'Desenvolvimento contínuo',
    texto: 'Um ambiente que valoriza aprendizado, atualização técnica e evolução profissional.',
  },
  {
    numero: '02',
    titulo: 'Trabalho em equipe',
    texto: 'Colaboração entre áreas, proximidade e troca de conhecimento fazem parte da nossa rotina.',
  },
  {
    numero: '03',
    titulo: 'Excelência com propósito',
    texto: 'Buscamos qualidade, responsabilidade e segurança em cada entrega para nossos clientes.',
  },
];

const destaques = vagas.filter((vaga) => vaga.destaque);
const demais = vagas.filter((vaga) => !vaga.destaque);

function linkCandidatura(vaga: Vaga) {
  return `mailto:${emailRh}?subject=${encodeURIComponent(`Candidatura — ${vaga.titulo}`)}`;
}

export default function TelaTrabalheConosco() {
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
            <p className="ttc-eyebrow ttc-eyebrow--dark">São Paulo · Presencial</p>
            <h1>Faça parte do nosso time.</h1>
            <p className="ttc-hero-text">
              A ASSCONT está crescendo e busca profissionais que queiram construir uma carreira sólida em contabilidade, fiscal, DP e tecnologia — com propósito e evolução real.
            </p>
            <div className="ttc-hero-actions">
              <a className="asc-btn" href="#vagas">
                <span>Ver vagas abertas</span>
              </a>
              <a className="ttc-link-button" href={`mailto:${emailRh}`}>
                {emailRh}
              </a>
            </div>
          </div>
        </section>

        <section className="ttc-numeros" aria-label="A ASSCONT em números">
          <div className="ttc-container ttc-numeros-grid">
            {numeros.map((item) => (
              <div className="ttc-numero" key={item.rotulo}>
                <strong>{item.valor}</strong>
                <span>{item.rotulo}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="ttc-intro">
          <div className="ttc-container ttc-intro-grid">
            <div className="ttc-intro-copy">
              <p className="ttc-eyebrow">Por que ASSCONT</p>
              <h2>Gente boa faz trabalho excelente.</h2>
              <p>
                Valorizamos relações próximas, responsabilidade, conhecimento técnico e melhoria contínua. Queremos que cada pessoa encontre espaço para contribuir, aprender e crescer junto com a empresa.
              </p>
            </div>
            <div className="ttc-intro-image-wrap">
              <img src={imgPredioQuemSomos} alt="Ambiente corporativo da ASSCONT" width={1400} height={1199} loading="lazy" decoding="async" />
              <div className="ttc-intro-badge">
                <strong>Desde 1977</strong>
                <span>experiência que evolui com as pessoas</span>
              </div>
            </div>
          </div>
        </section>

        <section className="ttc-valores" aria-label="Nossa cultura">
          <div className="ttc-container ttc-valores-grid">
            {valores.map((item) => (
              <article className="ttc-valor" key={item.numero}>
                <span>{item.numero}</span>
                <h3>{item.titulo}</h3>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ttc-vagas" id="vagas">
          <div className="ttc-container">
            <div className="ttc-vagas-head">
              <div>
                <p className="ttc-eyebrow">Vagas em destaque</p>
                <h2>As oportunidades que mais crescem na empresa</h2>
              </div>
              <p>
                Todas as posições são presenciais em São Paulo/SP, com horário das 08:12 às 18:00, de segunda a sexta.
              </p>
            </div>

            <div className="ttc-destaques">
              {destaques.map((item) => (
                <article className="ttc-destaque" key={item.id}>
                  <p className="ttc-destaque-tag">Destaque</p>
                  <h3>{item.titulo}</h3>
                  <p className="ttc-destaque-salario">{item.salario}</p>
                  <p className="ttc-destaque-resumo">{item.resumo}</p>
                  {item.tags.length > 0 && (
                    <ul className="ttc-chips">
                      {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
                    </ul>
                  )}
                  <button type="button" className="ttc-destaque-link" onClick={() => setVagaAberta(item.id)}>
                    Ver detalhes e candidatar <span aria-hidden="true">→</span>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ttc-lista" aria-label="Todas as vagas">
          <div className="ttc-container">
            <p className="ttc-eyebrow">Todas as vagas</p>
            <h2>Mais oportunidades para você</h2>

            <ul className="ttc-lista-itens">
              {demais.map((item) => (
                <li className="ttc-lista-item" key={item.id}>
                  <div>
                    <h3>{item.titulo}</h3>
                    <p>{item.meta}</p>
                  </div>
                  <p className="ttc-lista-salario">{item.salario}</p>
                  <button type="button" className="ttc-lista-botao" onClick={() => setVagaAberta(item.id)}>
                    Ver detalhes
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="ttc-beneficios" aria-label="Benefícios">
          <div className="ttc-container">
            <p className="ttc-eyebrow">Por que a ASSCONT?</p>
            <h2>Benefícios que fazem diferença no dia a dia</h2>

            <div className="ttc-beneficios-grid">
              {beneficios.map((item) => (
                <article className="ttc-beneficio" key={item.titulo}>
                  <h3>{item.titulo}</h3>
                  <p>{item.texto}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ttc-processo">
          <div className="ttc-container ttc-processo-inner">
            <div>
              <p className="ttc-eyebrow">Próximo passo</p>
              <h2>Não encontrou a vaga ideal?</h2>
            </div>
            <p>
              Envie seu currículo para o nosso RH. Guardamos seu contato e retornamos assim que surgir uma oportunidade compatível com o seu perfil.
            </p>
            <a className="asc-btn" href={`mailto:${emailRh}?subject=${encodeURIComponent('Banco de talentos — ASSCONT')}`}>
              <span>Falar com o RH</span>
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
            <button type="button" className="ttc-modal-close" onClick={() => setVagaAberta(null)} aria-label="Fechar vaga">
              ×
            </button>

            {vaga.etiqueta && <p className="ttc-modal-etiqueta">{vaga.etiqueta}</p>}
            <h2 id="ttc-vaga-title">{vaga.titulo}</h2>
            <p className="ttc-modal-salario">{vaga.salario}</p>

            <dl className="ttc-modal-ficha">
              <div>
                <dt>Horário</dt>
                <dd>{vaga.horario}</dd>
              </div>
              <div>
                <dt>Regime</dt>
                <dd>{vaga.regime}</dd>
              </div>
              {vaga.formacao && (
                <div>
                  <dt>Formação</dt>
                  <dd>{vaga.formacao}</dd>
                </div>
              )}
              <div>
                <dt>Nível</dt>
                <dd>{vaga.nivel}</dd>
              </div>
            </dl>

            {vaga.atividades.length > 0 && (
              <>
                <p className="ttc-modal-label">Atividades</p>
                <ul className="ttc-modal-lista">
                  {vaga.atividades.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            {vaga.desejavel.length > 0 && (
              <>
                <p className="ttc-modal-label">Desejável</p>
                <ul className="ttc-modal-lista">
                  {vaga.desejavel.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            {vaga.atividades.length === 0 && <p className="ttc-modal-resumo">{vaga.resumo}</p>}

            {etiquetas.length > 0 && (
              <>
                <p className="ttc-modal-label">Conhecimentos</p>
                <ul className="ttc-chips">
                  {etiquetas.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </>
            )}

            <a className="asc-btn ttc-modal-cta" href={linkCandidatura(vaga)}>
              <span>Quero me candidatar</span>
            </a>
          </div>
        </div>
      )}

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
