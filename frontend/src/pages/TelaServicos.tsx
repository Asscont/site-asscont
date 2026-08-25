import { useState } from 'react';
import './TelaServicos.css';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
import { Linhas, useCaminho, useTextos } from '../i18n';
import {
  imgFundoBannerServicos,
  iconIndustriaComercio,
  iconServicosConsultoria,
  iconTecnologiaInovacao,
  iconEMuitoMais,
  imgServicoOutsourcingContabil,
  imgServicoGestaoFiscal,
  imgServicoBpoTrabalhista,
  imgServicoAuditoria,
  imgServicoBpoFinanceiro,
  imgServicoSocietario,
  imgServicoPericiaContabil,
  imgServicoConsultoriaTributaria,
  imgServicoConsultoriaGestao,
  imgFundoFaq,
} from '../figmaAssets';

/* título e texto em t.servicos.setoresTitulos / setoresTextos, na mesma ordem */
const setores = [
  { icon: iconIndustriaComercio },
  { icon: iconServicosConsultoria },
  { icon: iconTecnologiaInovacao },
  { icon: iconEMuitoMais, rota: 'quem-somos', ancora: 'depoimentos' },
];

/* As faixas de serviço. A ordem aqui é a ordem na tela; o fundo (cinza ou
   claro) e o lado da foto alternam sozinhos.

   O `slug` é FIXO e não muda de idioma: ele é o id da âncora usada pelos links
   do banner da Início (/servicos#auditoria). Antes era gerado a partir do
   título — traduzir o título quebraria esses links.

   Título, texto e alt vêm de t.servicos.servicoTitulos / servicoTextos /
   servicoAlts, na mesma ordem. `itens` aponta para a lista no dicionário. */
const servicos = [
  { slug: 'outsourcing-contabil', imagem: imgServicoOutsourcingContabil },
  { slug: 'gestao-fiscal', imagem: imgServicoGestaoFiscal, itens: 'gestaoFiscalItens' },
  { slug: 'bpo-trabalhista', imagem: imgServicoBpoTrabalhista, itens: 'bpoTrabalhistaItens' },
  { slug: 'auditoria', imagem: imgServicoAuditoria },
  { slug: 'bpo-financeiro', imagem: imgServicoBpoFinanceiro, itens: 'bpoFinanceiroItens' },
  { slug: 'societario', imagem: imgServicoSocietario },
  { slug: 'pericia-contabil', imagem: imgServicoPericiaContabil },
  { slug: 'consultoria-tributaria', imagem: imgServicoConsultoriaTributaria, blocos: true },
  {
    slug: 'consultoria-de-gestao',
    imagem: imgServicoConsultoriaGestao,
    itens: 'consultoriaGestaoItens',
    cta: true,
  },
] as const;

/* O FAQ tem 6 itens; pergunta e resposta em t.servicos.faqPerguntas /
   faqRespostas. Textos validados pela ASSCONT. */
const TOTAL_FAQ = 6;

function Chevron() {
  return (
    <svg
      className="tsv-faq-chevron"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 5.5L8 11L14 5.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function TelaServicos() {
  const caminho = useCaminho();
  const t = useTextos();
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  return (
    <div className="tela-servicos">
      <SiteHeader ativo="servicos" />

      <section className="tsv-hero">
        <div className="tsv-hero-bg">
          <img
            src={imgFundoBannerServicos}
            alt={t.servicos.heroFotoAlt}
            width={1444}
            height={1237}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="tsv-hero-inner">
          <h1><Linhas texto={t.servicos.heroTitulo} /></h1>
          <p><Linhas texto={t.servicos.heroTexto} /></p>
          <a className="asc-btn" href={caminho("contato")}>
            <span>{t.servicos.heroBotao}</span>
          </a>
        </div>
      </section>

      <section className="tsv-setores">
        {setores.map((setor, i) => (
          <article className="tsv-setor-card" key={t.servicos.setoresTitulos[i]}>
            <img src={setor.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            <h3>{t.servicos.setoresTitulos[i]}</h3>
            <p>{t.servicos.setoresTextos[i]}</p>
            {setor.rota && (
              <a className="tsv-setor-link" href={caminho(setor.rota, setor.ancora)}>
                {t.servicos.setorLink}
                <svg viewBox="0 0 22 12" fill="none" aria-hidden="true">
                  <path
                    d="M0 6h20M15 1l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            )}
          </article>
        ))}
      </section>

      <section className="tsv-oferecemos">
        <h2>{t.servicos.oferecemosTitulo}</h2>
        <p className="tsv-oferecemos-sub">{t.servicos.oferecemosSub}</p>
        <p className="tsv-oferecemos-text">
          <Linhas texto={t.servicos.oferecemosTexto} />
        </p>
      </section>

      <div className="tsv-servicos-list">
        {servicos.map((servico, i) => (
          <section
            className={`tsv-band ${i % 2 === 0 ? 'tsv-band--gray' : 'tsv-band--light'}${'cta' in servico ? ' tsv-band--mais' : ''}`}
            id={servico.slug}
            key={servico.slug}
          >
            <div className="tsv-band-inner">
              <div className="tsv-band-copy">
                <h3>{t.servicos.servicoTitulos[i]}</h3>
                {t.servicos.servicoTextos[i] && <p>{t.servicos.servicoTextos[i]}</p>}
                {'itens' in servico && (
                  <ul>
                    {t.servicos[servico.itens].map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {'blocos' in servico && (
                  <>
                    <ul>
                      {t.servicos.consultoriaTributariaItens.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                    <div>
                      <h4 className="tsv-band-subtitulo">{t.servicos.reformaTributariaTitulo}</h4>
                      <ul>
                        {t.servicos.reformaTributariaItens.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
                {'cta' in servico && (
                  <a className="asc-btn" href={caminho("contato")}>
                    <span>{t.servicos.contrate}</span>
                  </a>
                )}
              </div>
            </div>

            <div className="tsv-band-photo">
              <img
                src={servico.imagem}
                alt={t.servicos.servicoAlts[i]}
                width={1197}
                height={796}
                loading="lazy"
                decoding="async"
              />
            </div>
          </section>
        ))}
      </div>

      <section className="tsv-faq" id="faq">
        <div className="tsv-faq-bg">
          <img src={imgFundoFaq} alt="" aria-hidden="true" width={1400} height={1199} loading="lazy" decoding="async" />
        </div>
        <div className="tsv-faq-inner">
          <h2 className="tsv-faq-title">{t.servicos.faqTitulo}</h2>
          <div className="tsv-faq-list">
            {Array.from({ length: TOTAL_FAQ }, (_, i) => {
              const aberto = faqAberto === i;
              return (
                <div
                  className={`tsv-faq-item${aberto ? ' is-open' : ''}`}
                  key={t.servicos.faqPerguntas[i]}
                >
                  <button
                    type="button"
                    className="tsv-faq-question"
                    aria-expanded={aberto}
                    onClick={() => setFaqAberto(aberto ? null : i)}
                  >
                    {t.servicos.faqPerguntas[i]}
                    <Chevron />
                  </button>
                  {aberto && t.servicos.faqRespostas[i] && (
                    <p className="tsv-faq-answer">{t.servicos.faqRespostas[i]}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tsv-cta">
        <div className="tsv-cta-inner">
          <h2>{t.servicos.ctaTitulo}</h2>
          <a className="asc-btn" href={caminho("contato")}>
            <span>{t.servicos.ctaBotao}</span>
          </a>
        </div>
      </section>

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
