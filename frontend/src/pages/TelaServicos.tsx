import { useState } from 'react';
import './TelaServicos.css';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
import {
  imgCopiaDeApresencaoInstitucionalPt1444X1237Px91,
  iconIndustriaComercio,
  iconServicosConsultoria,
  iconTecnologiaInovacao,
  iconEMuitoMais,
  imgServicoGestaoFiscal,
  imgServicoBpoTrabalhista,
  imgServicoBpoFinanceiro,
  imgServicoBpoLegal,
  imgServicoEMuitoMais,
  imgFundoFaq,
} from '../figmaAssets';

const setores = [
  {
    icon: iconIndustriaComercio,
    titulo: 'Indústria e Comércio',
    texto:
      'Experiência no atendimento a empresas industriais, comerciais, importadoras e distribuidoras.',
  },
  {
    icon: iconServicosConsultoria,
    titulo: 'Serviços e Consultoria',
    texto:
      'Atuação junto a consultorias, escritórios especializados e empresas de serviços.',
  },
  {
    icon: iconTecnologiaInovacao,
    titulo: 'Tecnologia e Inovação',
    texto:
      'Experiência com empresas de tecnologia, dados, telecomunicações e negócios digitais.',
  },
  {
    icon: iconEMuitoMais,
    titulo: 'E muito mais',
    texto: 'Uma carteira diversificada, presente em diferentes setores da economia.',
    link: { label: 'Conheça nossos clientes', href: '#/quem-somos' },
  },
];

// FAQ reescrito em português. ATENÇÃO: os textos abaixo foram redigidos a
// partir do conteúdo já publicado no site. Precisam de validação da ASSCONT
// antes de ir ao ar — sobretudo os trechos sobre escopo e transição.
const faq = [
  {
    pergunta: 'Quais serviços a ASSCONT oferece?',
    resposta:
      'Outsourcing contábil, gestão fiscal, BPO trabalhista, BPO financeiro e BPO legal e societário. Além disso, atuamos em consultoria, auditoria e perícia.',
  },
  {
    pergunta: 'Que tipo de empresa a ASSCONT atende?',
    resposta:
      'Indústria e comércio, serviços e consultoria, tecnologia e inovação. Nossa carteira reúne mais de 600 clientes em 6 países, de museus a importadoras.',
  },
  {
    pergunta: 'Como funciona a troca do contador atual pela ASSCONT?',
    resposta:
      'Assumimos a transição: levantamos a situação contábil e fiscal da empresa, identificamos pendências e definimos o cronograma de migração antes de iniciar as rotinas.',
  },
  {
    pergunta: 'Quem cuida da minha conta no dia a dia?',
    resposta:
      'Cada cliente tem uma equipe designada, com responsável técnico direto. Você não passa por central de atendimento para falar com quem executa o seu trabalho.',
  },
  {
    pergunta: 'Como a ASSCONT garante a segurança dos meus dados?',
    resposta:
      'Somos certificados na ISO 9001, com processos auditados e controle de acesso às informações de cada cliente.',
  },
  {
    pergunta: 'A ASSCONT atende empresas com operação no exterior?',
    resposta:
      'Sim. Somos membros da IECnet e representamos a Câmara de Comércio Ítalo-Brasileira no estado de São Paulo, o que nos permite apoiar operações entre o Brasil e outros mercados.',
  },
];

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
  const [faqAberto, setFaqAberto] = useState<number | null>(0);

  return (
    <div className="tela-servicos">
      <SiteHeader ativo="servicos" />

      <section className="tsv-hero">
        <div className="tsv-hero-bg">
          <img
            src={imgCopiaDeApresencaoInstitucionalPt1444X1237Px91}
            alt="Profissional utilizando calculadora"
            width={739}
            height={747}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="tsv-hero-inner">
          <h1>
            Soluções integradas para
            <br />
            os desafios do seu negócio.
          </h1>
          <p>
            Experiência, conhecimento técnico e atuação consultiva para
            <br />
            apoiar sua empresa com segurança, eficiência e visão estratégica.
          </p>
          <a className="asc-btn asc-btn--lg" href="#/contato">
            <span>Entre em contato</span>
          </a>
        </div>
      </section>

      <section className="tsv-setores">
        {setores.map((setor) => (
          <article className="tsv-setor-card" key={setor.titulo}>
            <img src={setor.icon} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            <h3>{setor.titulo}</h3>
            <p>{setor.texto}</p>
            {setor.link && (
              <a className="tsv-setor-link" href={setor.link.href}>
                {setor.link.label}
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
        <h2>O que oferecemos</h2>
        <p className="tsv-oferecemos-sub">
          Experiência que gera confiança. Atuação que gera valor.
        </p>
        <p className="tsv-oferecemos-text">
          Há quase 50 anos, unimos conhecimento técnico, visão estratégica e atendimento
          próximo para apoiar empresas de diferentes portes e segmentos.
          <br />
          Nossa atuação integrada permite compreender cada negócio de forma ampla,
          oferecendo soluções personalizadas, segurança nas decisões e suporte em todas as
          etapas da gestão.
        </p>
      </section>

      <div className="tsv-servicos-list">
        <section className="tsv-band tsv-band--gray">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>Outsourcing Contábil</h3>
              <p>Gestão contábil completa com foco em conformidade e suporte à decisão.</p>
            </div>
          </div>
          {/* Esta faixa nao tem foto: traz o simbolo da marca como marca
              d'agua. Por ser arte, entra inteiro (contain), nunca cortado. */}
          <div className="tsv-band-photo tsv-band-photo--marca">
            <img
              src={imgCopiaDeApresencaoInstitucionalPt1444X1237Px91}
              alt=""
              aria-hidden="true"
              width={739}
              height={747}
              loading="lazy"
              decoding="async"
            />
          </div>
        </section>

        <section className="tsv-band tsv-band--light">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>Gestão Fiscal</h3>
              <p>
                Administração das obrigações fiscais com foco em eficiência e mitigação de
                riscos.
              </p>
              <ul>
                <li>Apuração de tributos</li>
                <li>Obrigações acessórias</li>
                <li>Planejamento fiscal</li>
                <li>Suporte a fiscalizações</li>
              </ul>
            </div>
          </div>
          <div className="tsv-band-photo">
            <img src={imgServicoGestaoFiscal} alt="Análise de documentos fiscais" width={1197} height={796} loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="tsv-band tsv-band--gray">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>BPO Trabalhista</h3>
              <ul>
                <li>Folha de pagamento</li>
                <li>eSocial e encargos</li>
                <li>Admissões e rescisões</li>
                <li>Consultoria preventiva</li>
              </ul>
              <p>Gestão completa da folha e rotinas trabalhistas.</p>
            </div>
          </div>
          <div className="tsv-band-photo">
            <img src={imgServicoBpoTrabalhista} alt="Atendimento de equipe de RH" width={1197} height={796} loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="tsv-band tsv-band--light">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>BPO Financeiro</h3>
              <ul>
                <li>Contas a pagar e receber</li>
                <li>Conciliação bancária</li>
                <li>Fluxo de caixa</li>
                <li>Relatórios financeiros</li>
              </ul>
              <p>Gestão financeira estruturada para controle e previsibilidade.</p>
            </div>
          </div>
          <div className="tsv-band-photo">
            <img src={imgServicoBpoFinanceiro} alt="Reunião de análise financeira" width={1197} height={796} loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="tsv-band tsv-band--gray">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>BPO Legal | Societário</h3>
              <ul>
                <li>Abertura e alteração de empresas</li>
                <li>Contratos sociais e atas</li>
                <li>Registros em órgãos competentes</li>
                <li>Suporte societário</li>
              </ul>
              <p>Gestão das rotinas legais e societárias com segurança e agilidade.</p>
            </div>
          </div>
          <div className="tsv-band-photo">
            <img src={imgServicoBpoLegal} alt="Estátua da justiça" width={1197} height={796} loading="lazy" decoding="async" />
          </div>
        </section>

        <section className="tsv-band tsv-band--light tsv-band--mais">
          <div className="tsv-band-inner">
            <div className="tsv-band-copy">
              <h3>E muito mais..</h3>
              <p>Consultoria, auditoria, perícia</p>
              <a className="asc-btn asc-btn--lg" href="#/contato">
                <span>Contrate</span>
              </a>
            </div>
          </div>
          <div className="tsv-band-photo">
            <img src={imgServicoEMuitoMais} alt="Profissional revisando relatórios" width={1197} height={599} loading="lazy" decoding="async" />
          </div>
        </section>
      </div>

      <section className="tsv-faq" id="faq">
        <div className="tsv-faq-bg">
          <img src={imgFundoFaq} alt="" aria-hidden="true" width={1400} height={1199} loading="lazy" decoding="async" />
        </div>
        <div className="tsv-faq-inner">
          <h2 className="tsv-faq-title">FAQ</h2>
          <div className="tsv-faq-list">
            {faq.map((item, i) => {
              const aberto = faqAberto === i;
              return (
                <div
                  className={`tsv-faq-item${aberto ? ' is-open' : ''}`}
                  key={item.pergunta}
                >
                  <button
                    type="button"
                    className="tsv-faq-question"
                    aria-expanded={aberto}
                    onClick={() => setFaqAberto(aberto ? null : i)}
                  >
                    {item.pergunta}
                    <Chevron />
                  </button>
                  {aberto && item.resposta && (
                    <p className="tsv-faq-answer">{item.resposta}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="tsv-cta">
        <div className="tsv-cta-inner">
          <h2>Agende sua reunião</h2>
          <a className="asc-btn asc-btn--lg" href="#/contato">
            <span>Entre em contato</span>
          </a>
        </div>
      </section>

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
