import { useState } from 'react';
import './TelaServicos.css';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
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

const setores = [
  {
    icon: iconIndustriaComercio,
    titulo: 'Indústria e Comércio',
    texto:
      'Experiência no atendimento a empresas industriais, comerciais, importadoras e distribuidoras dos mais diversos setores.',
  },
  {
    icon: iconServicosConsultoria,
    titulo: 'Serviços',
    texto:
      'Experiência no atendimento a empresas de serviços, incluindo agências de publicidade, comunicação e uma grande diversidade de demais serviços especializados.',
  },
  {
    icon: iconTecnologiaInovacao,
    titulo: 'Empresas de Tecnologia e Startup',
    texto:
      'Experiência no atendimento a empresas de tecnologia, negócios digitais e start-up.',
  },
  {
    icon: iconEMuitoMais,
    titulo: 'Terceiro Setor',
    texto:
      'Experiência no atendimento a entidades do terceiro setor, como museus, fundações, associações e ONGs.',
    link: { label: 'Conheça nossos clientes', href: '#/quem-somos#depoimentos' },
  },
];

/* As faixas de serviço. A ordem aqui e a ordem na tela; o fundo (cinza ou
   claro) e o lado da foto alternam sozinhos. Servico sem foto usa a marca
   d'agua da ASSCONT, como o Outsourcing Contabil. */
type Servico = {
  titulo: string;
  texto?: string;
  itens?: string[];
  blocos?: { titulo: string; itens: string[] }[];
  imagem: string;
  alt: string;
  cta?: boolean;
};

/* usado nas ancoras (#/servicos#auditoria) e nos links do banner */
export function slugServico(titulo: string) {
  return titulo
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const servicos: Servico[] = [
  {
    titulo: 'Outsourcing Contábil',
    texto: 'Gestão contábil completa, com foco em conformidade e suporte à decisão.',
    imagem: imgServicoOutsourcingContabil,
    alt: 'Escrituração contábil em computador',
  },
  {
    titulo: 'Gestão Fiscal',
    texto:
      'Apuração de tributos e administração das obrigações fiscais com foco em eficiência e mitigação de riscos.',
    itens: ['Apuração de tributos', 'Obrigações acessórias', 'Planejamento fiscal', 'Suporte a fiscalizações'],
    imagem: imgServicoGestaoFiscal,
    alt: 'Análise de documentos fiscais',
  },
  {
    titulo: 'BPO Trabalhista',
    itens: ['Folha de pagamento', 'eSocial e encargos', 'Admissões e rescisões', 'Consultoria preventiva'],
    texto: 'Gestão completa da folha de pagamentos e rotinas trabalhistas.',
    imagem: imgServicoBpoTrabalhista,
    alt: 'Atendimento de equipe de RH',
  },
  {
    titulo: 'Auditoria',
    texto:
      'Auditoria de Demonstrações Financeiras, serviços pré-acordados e due diligence.',
    imagem: imgServicoAuditoria,
    alt: 'Revisão de demonstrações financeiras',
  },
  {
    titulo: 'BPO Financeiro',
    itens: ['Contas a pagar e receber', 'Conciliação bancária', 'Fluxo de caixa', 'Relatórios financeiros'],
    texto: 'Gestão financeira estruturada para controle, segurança e previsibilidade.',
    imagem: imgServicoBpoFinanceiro,
    alt: 'Reunião de análise financeira',
  },
  {
    titulo: 'Societário',
    texto:
      'Contratos sociais, estatutos, legalização de empresas, laudos, fusões e incorporações.',
    imagem: imgServicoSocietario,
    alt: 'Estátua da justiça',
  },
  {
    titulo: 'Perícia Contábil',
    texto:
      'Trabalhos de perícia contábil, com a elaboração de laudos periciais contábeis ou pareceres técnico-contábeis.',
    imagem: imgServicoPericiaContabil,
    alt: 'Análise de documentos periciais',
  },
  {
    titulo: 'Consultoria Tributária',
    texto: 'Além das rotinas operacionais, a ASSCONT disponibiliza:',
    blocos: [
      {
        titulo: '',
        itens: [
          'Interpretação da legislação',
          'Consultas tributárias',
          'Apoio em projetos específicos',
          'Análise de impactos regulatórios',
          'Recomendações de melhorias',
        ],
      },
      {
        titulo: 'Reforma Tributária',
        itens: [
          'Monitoramento legislativo contínuo',
          'Reuniões executivas periódicas',
          'Avaliação dos impactos na operação',
        ],
      },
    ],
    imagem: imgServicoConsultoriaTributaria,
    alt: 'Reunião de consultoria tributária',
  },
  {
    titulo: 'Consultoria de Gestão',
    texto: 'Traduzimos dados em estratégias de gestão para a tomada de decisão.',
    itens: [
      'Analisamos a saúde financeira e fiscal atual da sua empresa',
      'Desenhamos estratégias customizadas para reduzir custos e otimizar rotinas',
    ],
    imagem: imgServicoConsultoriaGestao,
    alt: 'Equipe analisando indicadores de gestão',
    cta: true,
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
            src={imgFundoBannerServicos}
            alt="Profissional utilizando calculadora"
            width={1444}
            height={1237}
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
          <a className="asc-btn" href="#/contato">
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
        {servicos.map((servico, i) => (
          <section
            className={`tsv-band ${i % 2 === 0 ? 'tsv-band--gray' : 'tsv-band--light'}${servico.cta ? ' tsv-band--mais' : ''}`}
            id={slugServico(servico.titulo)}
            key={servico.titulo}
          >
            <div className="tsv-band-inner">
              <div className="tsv-band-copy">
                <h3>{servico.titulo}</h3>
                {servico.texto && <p>{servico.texto}</p>}
                {servico.itens && (
                  <ul>
                    {servico.itens.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                )}
                {servico.blocos?.map((bloco) => (
                  <div key={bloco.titulo || servico.titulo}>
                    {bloco.titulo && <h4 className="tsv-band-subtitulo">{bloco.titulo}</h4>}
                    <ul>
                      {bloco.itens.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                ))}
                {servico.cta && (
                  <a className="asc-btn" href="#/contato">
                    <span>Contrate</span>
                  </a>
                )}
              </div>
            </div>

            <div className="tsv-band-photo">
              <img src={servico.imagem} alt={servico.alt} width={1197} height={796} loading="lazy" decoding="async" />
            </div>
          </section>
        ))}
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
          <a className="asc-btn" href="#/contato">
            <span>Entre em contato</span>
          </a>
        </div>
      </section>

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
