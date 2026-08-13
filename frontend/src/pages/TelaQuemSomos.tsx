import { useEffect, useState } from 'react';
import './TelaQuemSomos.css';
import Carousel from '../components/Carousel';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';

import seloEmpreendedorismo from '../assets/certificacoes/pqec-empreendedorismo.png';
import seloGestao from '../assets/certificacoes/pqec-gestao.png';
import seloInovacao from '../assets/certificacoes/pqec-inovacao.png';
import seloQualidade from '../assets/certificacoes/pqec-qualidade.png';
import seloAbnt from '../assets/certificacoes/abnt-sistema-certificado.png';

import imgFundoBannerQuemSomos from '../assets/imgFundoBannerQuemSomos.png';
import imgRetanguloAzulDasCertificacoes from '../assets/imgRetanguloAzulDasCertificacoes.png';
import imgPilares from '../assets/imgRectangle4549.png';
import imgCheck from '../assets/imgCopiaDeApresencao.png';
import logoMoma from '../assets/clientes/moma.jpg';
import logoConuar from '../assets/clientes/conuar.png';
import logoBichuetti from '../assets/clientes/bichuetti.png';
import logoAdegaAlentejana from '../assets/clientes/adega-alentejana.png';
import logoGrupoMaya from '../assets/clientes/grupo-maya.png';
import logoMam from '../assets/clientes/mam.png';
import logoAbralimp from '../assets/clientes/abralimp.png';
import imgInstitutoBlandina from '../assets/imgInstitutoBlandina.png';
import imgLogoBlandina from '../assets/imgLogosParaOSite1.png';
import imgFotoOlhinhos from '../assets/imgFotoDeOlhoNosOlhinhos.png';
import imgLogoOlhinhos from '../assets/imgLogoDeOlhoNosOlhinhos.png';
import imgLogoSci from '../assets/imgSciSistemasContabeisLgog.png';
import imgLogoOmie from '../assets/imgLogoOmie.png';
import imgLogoHubcount from '../assets/imgLogoHubcount.png';
import imgLogoBento from '../assets/imgLogoBentoMuniz.png';

type Historia = {
  ano: string;
  titulo: string;
  texto: string;
};

const certificacoes = [
  {
    titulo: 'PQEC Executivo Gold – Empreendedorismo',
    descricao:
      'Reconhecimento da qualificação em estratégias de crescimento, visão empreendedora e desenvolvimento sustentável dos negócios.',
    imagem: seloEmpreendedorismo,
  },
  {
    titulo: 'PQEC Executivo Gold – Gestão',
    descricao:
      'Certifica a qualificação em gestão empresarial, planejamento estratégico, liderança e desenvolvimento organizacional.',
    imagem: seloGestao,
  },
  {
    titulo: 'PQEC Executivo Gold – Inovação',
    descricao:
      'Reconhece empresas capacitadas para implementar processos de inovação, melhoria contínua e transformação dos negócios.',
    imagem: seloInovacao,
  },
  {
    titulo: 'PQEC Executivo Gold – Qualidade',
    descricao:
      'Certifica o conhecimento e a aplicação de práticas voltadas à gestão da qualidade, padronização e excelência na prestação de serviços.',
    imagem: seloQualidade,
  },
  {
    titulo: 'Sistema Certificado ABNT',
    descricao:
      'Comprova que a empresa possui um Sistema de Gestão certificado pela ABNT, reforçando o compromisso com a qualidade, conformidade e melhoria contínua.',
    imagem: seloAbnt,
  },
];

const historia: Historia[] = [
  {
    ano: '1977:',
    titulo: 'Início da trajetória da ASSCONT.',
    texto: 'Fundação do escritório por um jovem contador de apenas 18 anos.',
  },
  {
    ano: 'Anos 80',
    titulo: 'Crescimento consistente',
    texto: 'Ampliação da carteira de clientes e consolidação da atuação no mercado contábil.',
  },
  {
    ano: 'Anos 90',
    titulo: 'Evolução e especialização',
    texto: 'Expansão da estrutura e fortalecimento dos serviços prestados às empresas.',
  },
  {
    ano: 'Anos 2000',
    titulo: 'Novos horizontes',
    texto: 'Ampliação da atuação internacional e fortalecimento do relacionamento com clientes de diferentes mercados.',
  },
  {
    ano: 'Anos 2010',
    titulo: 'Consolidação e inovação',
    texto: 'Certificação ISO 9001, abertura da filial em Barueri e expansão dos serviços.',
  },
  {
    ano: 'Anos 2020',
    titulo: 'Crescimento estratégico',
    texto: 'Ingresso na IECnet, expansão da atuação e fortalecimento da presença nacional e internacional.',
  },
];

const parceiros = [
  {
    nome: 'SCI Sistemas\nContábeis',
    texto:
      'Referência em tecnologia para a contabilidade, desenvolve soluções que automatizam processos e impulsionam a eficiência dos escritórios contábeis.',
    logo: imgLogoSci,
    classe: 'sci',
  },
  {
    nome: 'Omie',
    texto:
      'Plataforma de gestão empresarial que integra ERP e serviços financeiros, simplificando processos e apoiando o crescimento dos negócios.',
    logo: imgLogoOmie,
    classe: 'omie',
  },
  {
    nome: 'HubCount',
    texto:
      'Especialista em Business Intelligence, transforma dados em dashboards estratégicos para apoiar decisões mais inteligentes e eficientes.',
    logo: imgLogoHubcount,
    classe: 'hubcount',
  },
  {
    nome: 'Bento Muniz\nAdvocacia',
    texto:
      'Escritório de advocacia empresarial que oferece soluções jurídicas estratégicas com excelência técnica e foco nos negócios.',
    logo: imgLogoBento,
    classe: 'bento',
  },
];

const parceirosCarrossel = [...parceiros, parceiros[0], parceiros[1]];


const depoimentos = [
  {
    nome: 'Fico Meirelles',
    cargo: 'CEO | MOMA',
    logo: logoMoma,
    logoAlt: 'MOMA',
    texto: `Ao longo dos últimos 15 anos, a Asscont tem sido muito mais do que a empresa responsável pela contabilidade da Moma. Tornou-se uma parceira de absoluta confiança, que nos dá segurança para tomar decisões e nos permite concentrar nossos esforços no crescimento do nosso negócio.

Em todo esse período, sempre encontramos uma equipe extremamente competente, atualizada e comprometida, capaz de nos orientar com clareza nas questões contábeis, fiscais, trabalhistas e societárias. Mais do que responder às demandas do dia a dia, a Asscont atua de forma preventiva, consultiva e estratégica, antecipando cenários e oferecendo soluções consistentes.

O grande diferencial da Asscont está na combinação entre excelência técnica e atendimento próximo. É raro encontrar uma empresa que consiga manter, ao longo de tantos anos, o mesmo padrão de qualidade, agilidade e dedicação no relacionamento com seus clientes.

Para a Moma, a Asscont representa tranquilidade, credibilidade e parceria de longo prazo. Temos orgulho dessa relação construída ao longo de 15 anos e recomendamos a Asscont a qualquer empresa que busque um parceiro sério, competente e comprometido com o sucesso de seus clientes.`,
  },
  {
    nome: 'Miriam Uemura',
    cargo: 'Finance Manager',
    logo: logoConuar,
    logoAlt: 'Conuar',
    texto: `Ao longo dos anos, a Asscont se tornou mais do que uma prestadora de serviços para nossa empresa: é uma verdadeira parceira de negócios.

Em um ambiente regulatório cada vez mais complexo e dinâmico, contar com uma equipe altamente qualificada, comprometida e sempre disponível faz toda a diferença. A Asscont transmite segurança em suas orientações contábeis, fiscais, trabalhistas e societárias, permitindo que tomemos decisões com confiança e mantenhamos nossas obrigações em conformidade.

Destaco também a qualidade da consultoria prestada e a agilidade no atendimento. Sempre fomos atendidos com profissionalismo, cordialidade e um genuíno interesse em encontrar as melhores soluções para cada situação, independentemente da complexidade.

O grande diferencial da Asscont está nas pessoas. A dedicação, o conhecimento técnico e o relacionamento próximo com seus clientes criam uma parceria baseada em confiança, transparência e excelência.

Nosso muito obrigado a todos os profissionais da Asscont pelo apoio constante e pela contribuição para o crescimento e a segurança das operações da nossa empresa.`,
  },
  {
    nome: 'José Luiz Bichuetti',
    cargo: 'Consultor Empresarial',
    logo: logoBichuetti,
    logoAlt: 'Bichuetti Consultoria Empresarial',
    texto: `Conheci o Antônio Carlos e a Asscont em 1983. No início foram orientações sobre a formação da Bichuetti Consultoria Empresarial - BCE e como fazer para ter não só os registros aderentes a toda legislação, mas também valiosas recomendações sobre como tratar um aspecto hoje muito explorado em debates sobre governança corporativa: a separação entre família, empresa e propriedade. Ao longo desses anos tivemos apoio profissional e pessoal que sempre nos deram a impressão de que éramos o Cliente #1; e creio que todos aqueles que se assessoram com a Asscont têm esse mesmo sentimento. Sinto-me privilegiado por 43 anos de parceria e pela amizade que desenvolvi com Antônio Carlos, e agora também com o Bruno. Parabéns e obrigado a toda a equipe da Asscont!`,
  },
  {
    nome: 'Milton Terra',
    cargo: 'COO Chief Operating Officer / Diretor de Operações',
    logo: null,
    logoAlt: '',
    texto: `Ao longo dos últimos 20 anos, tivemos, na ASSCONT, uma parceira contábil segura e confiável que nos deu suporte para o crescimento sólido da empresa.

Em todas as áreas, (Fiscal, Contábil, Tributário e RH) sempre tivemos um atendimento impecável, sempre rápido, preciso e com uma equipe de alta qualidade técnica.

Sempre ouvi no mercado da dificuldade em achar uma empresa séria e com alta competência para dar esse suporte e a ASSCONT é uma das pouquíssimas empresas eu que indicaria sem receio de errar.`,
  },
  {
    nome: 'Arthur Brandi Sobrinho',
    cargo: 'Advogado',
    logo: null,
    logoAlt: '',
    texto: `A sólida parceria construída entre o nosso escritório e a ASSCONT ao longo de muitos anos tem como pilares fundamentais a confiança mútua, o rigor técnico irrepreensível e a constante eficiência profissional da ASSCONT.

Contar com o suporte consultivo e a excelência operacional da equipe da ASSCONT nas esferas contábil, fiscal, trabalhista e societária nos garante absoluta segurança, tranquilidade e a certeza do rigoroso cumprimento de todas as obrigações legais. Essa segurança nos permite dedicar toda a nossa atenção à prática da advocacia e ao atendimento dos nossos clientes.

Além do alto nível de especialização técnica e do caráter preventivo e estratégico da consultoria da ASSCONT, o grande diferencial dessa empresa reside no relacionamento: um atendimento próximo, dinâmico, ágil e verdadeiramente humano, pautado pela prontidão em compreender e atender às nossas demandas específicas.

É uma honra ver nossa trajetória entrelaçada a estes 48 anos de história e acompanhar de perto a evolução contínua, a modernização e o aperfeiçoamento de uma empresa como a ASSCONT, referência em seriedade, compromisso e qualidade.`,
  },
  {
    nome: 'Denise Bueno',
    cargo: 'Diretora Adm. Financeira',
    logo: logoAdegaAlentejana,
    logoAlt: 'Adega Alentejana',
    texto: `Ao longo da nossa parceria, iniciada em 2021, a Asscont tem se consolidado como muito mais do que um prestador de serviços: é um parceiro estratégico, comprometido com os mais altos padrões de eficiência, conformidade e excelência técnica.

O suporte prestado nas áreas contábil, fiscal, trabalhista e societária tem sido fundamental para que a Adega Alentejana mantenha uma gestão segura e alinhada às melhores práticas. Essa parceria contribuiu diretamente para importantes reconhecimentos junto aos órgãos regulatórios, como a classificação A+ no Programa Sintonia da Receita Federal do Brasil, a manutenção do nosso reconhecimento como empresa parceira OEA (Operador Econômico Autorizado), a classificação A+ no Programa de Conformidade da SEFAZ-SP, e resultados positivos e consistentes em auditorias independentes.

Em um ambiente de negócios cada vez mais complexo e desafiador, contar com uma equipe técnica altamente qualificada, acessível e comprometida nos proporciona a tranquilidade necessária para concentrarmos nossos esforços no crescimento do negócio.

Parabenizamos a Asscont por sua trajetória de 48 anos construída com seriedade, competência e confiança. Temos satisfação em fazer parte dessa história e recomendamos sua atuação a empresas que buscam uma parceria sólida, confiável e orientada para resultados.`,
  },
  {
    nome: 'Ricardo Gontijo',
    cargo: 'CEO | Grupo Maya',
    logo: logoGrupoMaya,
    logoAlt: 'Grupo Maya',
    texto: `A equipe da Asscont conta com profissionais altamente qualificados e dedicados, liderados pelo Sr. Antônio Carlos, que acumula ampla experiência empresarial e corporativa. Podemos afirmar que a empresa é altamente comprometida em entregar a melhor assessoria contábil, fiscal, trabalhista e societária, transmitindo total segurança e confiança aos seus parceiros.`,
  },
  {
    nome: 'José Luiz Sá de Castro Lima',
    cargo: 'Diretor Financeiro',
    logo: logoMam,
    logoAlt: 'Museu de Arte Moderna de São Paulo - MAM',
    texto: `A Asscont atende o Museu de Arte Moderna, MAM-SP, há mais de seis anos. Neste período, importantes etapas foram cumpridas para aperfeiçoar as práticas contábeis do museu e a parceria com a Asscont foi fundamental neste processo. Em momentos críticos, como a implementação de um novo sistema contábil, o acompanhamento de mudanças na legislação fiscal e o grande desafio de administrar o museu com a sede fechada para reforma, contamos com o apoio e profissionalismo da Asscont, sempre aberta ao dialogo e disposta a apoiar a equipe do museu nestes desafios. Se estabeleceu entre as equipes do museu e da consultoria uma relação de confiança mutua. A qualidade do trabalho da consultoria também é reconhecida em outras instâncias, como pelo Conselho Fiscal do museu e pela empresa que faz a auditoria anual de suas informações financeiras.`,
  },
  {
    nome: 'Filippo Gamba',
    cargo: 'Sócio | Studio Gamba Consultoria Empresarial',
    logo: null,
    logoAlt: '',
    texto: `VC É UM PARCEIRO DE INESTIMÁVEL VALOR`,
  },
  {
    nome: 'Celso Tomanik',
    cargo: 'Consultor Empresarial',
    logo: null,
    logoAlt: '',
    texto: `Sou cliente da Asscont há mais de 25 anos. Neste período de tempo a Asscont foi instrumental para o desenvolvimento dos meus negócios. Acho que um dos maiores erros dos empreendedores é procurar uma organização “barata” ou digital para simplesmente “fazer minha contabilidade”. A Asscont sempre aportou um valor enorme no aconselhamento, na execução precisa, em 25 anos sem nenhuma intercorrência fiscal ou trabalhista. Isso não tem preço! Os profissionais são dedicados, atenciosos e sempre um passo à frente.`,
  },
  {
    nome: 'Rosana Maria Alves Xavier',
    cargo: 'Coordenadora Relacionamento com Cliente',
    logo: logoAbralimp,
    logoAlt: 'ABRALIMP',
    texto: `Há mais de 20 anos, a Asscont é uma parceira estratégica da ABRALIMP, contribuindo de forma consistente para a solidez da nossa gestão e para o fortalecimento da nossa governança.

Ao longo dessa trajetória, sempre contamos com uma equipe altamente qualificada, que transmite segurança e confiança em suas orientações contábeis, fiscais, trabalhistas e societárias. Mais do que uma assessoria contábil, a Asscont nos auxilia a manter os elevados padrões de transparência que fazem parte dos princípios da ABRALIMP, garantindo conformidade, credibilidade e tranquilidade em nossa atuação.

Essa parceria de mais de duas décadas é marcada pelo comprometimento, pela disponibilidade e pelo relacionamento próximo, fatores que fazem toda a diferença para uma entidade como a nossa, responsável por representar o mercado de limpeza profissional e organizar eventos de grande relevância, como a HIGIEXPO.

Temos orgulho dessa história construída emda em conjunto e recomendamos a Asscont pela excelência dos serviços prestados, pela competência de sua equipe e pela confiança que inspira em seus clientes.`,
  },
];

export default function TelaQuemSomos() {
  const [certificacaoAberta, setCertificacaoAberta] = useState<number | null>(null);
  const [depoimentoAberto, setDepoimentoAberto] = useState<number | null>(null);

  useEffect(() => {
    const raiz = document.querySelector('.tela-quem-somos');
    if (!raiz) return;

    const elementos = Array.from(raiz.querySelectorAll<HTMLElement>('.tqs-reveal'));

    if (!('IntersectionObserver' in window)) {
      elementos.forEach((elemento) => elemento.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );

    elementos.forEach((elemento) => observer.observe(elemento));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (certificacaoAberta === null && depoimentoAberto === null) return;

    const fecharComEsc = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setCertificacaoAberta(null);
      setDepoimentoAberto(null);
    };

    window.addEventListener('keydown', fecharComEsc);
    return () => window.removeEventListener('keydown', fecharComEsc);
  }, [certificacaoAberta, depoimentoAberto]);

  // trava o scroll do fundo enquanto qualquer modal estiver aberto
  useEffect(() => {
    const aberto = certificacaoAberta !== null || depoimentoAberto !== null;
    if (!aberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [certificacaoAberta, depoimentoAberto]);

  const certSelecionada = certificacaoAberta === null ? null : certificacoes[certificacaoAberta];
  const depoSelecionado = depoimentoAberto === null ? null : depoimentos[depoimentoAberto];

  return (
    <div className="tela-quem-somos">
      <SiteHeader ativo="quem-somos" />

      <main>
        <section className="tqs-pdf-hero" id="quemsomos">
          <img className="tqs-pdf-hero-bg" src={imgFundoBannerQuemSomos} alt="" aria-hidden="true" fetchPriority="high" decoding="async" />
          <div className="tqs-pdf-hero-overlay" aria-hidden="true" />

          <div className="tqs-pdf-hero-content">
            <div className="tqs-pdf-hero-title-frame tqs-reveal">
              <h1>QUEM SOMOS</h1>
            </div>

            <div className="tqs-pdf-hero-copy tqs-reveal tqs-reveal-delay-1">
              <p>
                DESDE 1977, A ASSCONT APOIA EMPRESAS COM{' '}<br />
                SOLUÇÕES EM OUTSOURCING CONTÁBIL, TRABALHISTA{' '}<br />
                E FISCAL, CONTÁBIL, FISCAL, AUDITORIA, PARALEGAL,{' '}<br />
                BPO FINANCEIRO E PERÍCIA.
              </p>
            </div>
          </div>
        </section>

        <section className="tqs-pdf-certificacoes" aria-label="Certificações">
          <div className="tqs-pdf-cert-band">
            <img className="tqs-pdf-cert-bg" src={imgRetanguloAzulDasCertificacoes} alt="" aria-hidden="true" width={1168} height={448} loading="lazy" decoding="async" />
            <div className="tqs-pdf-cert-copy tqs-reveal">
              <h2>CERTIFICAÇÕES</h2>
              <p>Inteligência contábil com{' '}<br />padrão de excelência</p>
            </div>
            <div className="tqs-pdf-cert-selos">
              {certificacoes.map((certificacao, index) => (
                <button
                  type="button"
                  className={`tqs-pdf-cert-button tqs-reveal${index > 0 ? ` tqs-reveal-delay-${Math.min(index, 4)}` : ''}`}
                  key={certificacao.titulo}
                  onClick={() => setCertificacaoAberta(index)}
                  aria-label={`Ver informações sobre ${certificacao.titulo}`}
                >
                  <img
                    className={index === certificacoes.length - 1 ? 'tqs-pdf-cert-abnt' : undefined}
                    src={certificacao.imagem}
                    alt={certificacao.titulo}
                    width={1080}
                    height={1080}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>Informações</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="tqs-pdf-pilares">
          <img className="tqs-pdf-pilares-bg" src={imgPilares} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <div className="tqs-pdf-pilares-overlay" aria-hidden="true" />

          <div className="tqs-pdf-pilares-grid">
            <div className="tqs-pdf-section-tag tqs-pdf-pilares-tag tqs-reveal"><span>PILARES</span></div>

            <div className="tqs-pdf-pilar-card tqs-pdf-pilar-missao tqs-reveal tqs-reveal-delay-1">
              <strong>MISSÃO</strong>
              <p>Entregar soluções com{' '}<br />excelência, segurança e agilidade.</p>
            </div>

            <div className="tqs-pdf-pilar-card tqs-pdf-pilar-visao tqs-reveal tqs-reveal-delay-2">
              <strong>VISÃO</strong>
              <p>Ser referência em serviços{' '}<br />contábeis e consultivos.</p>
            </div>
          </div>
        </section>

        <section className="tqs-pdf-proposito">
          <div className="tqs-pdf-proposito-inner">
          <img className="tqs-reveal" src={imgCheck} alt="" aria-hidden="true" width={739} height={747} loading="lazy" decoding="async" />
          <p className="tqs-reveal tqs-reveal-delay-1">
            NOSSO <strong>PROPÓSITO</strong> É ATENDER COM EXCELÊNCIA AS NECESSIDADES DOS{' '}<br />
            CLIENTES, PROMOVENDO A MELHORIA CONTÍNUA DOS PROCESSOS, A EFICIÊNCIA{' '}<br />
            OPERACIONAL E O DESENVOLVIMENTO DOS NEGÓCIOS E DAS PESSOAS.
          </p>
          </div>
        </section>

        <div className="tqs-pdf-faixa-ciano" aria-hidden="true" />

        <section className="tqs-pdf-valores">
          <div className="tqs-pdf-valores-inner">
            <div className="tqs-pdf-valores-title tqs-reveal">
              <span>CONHEÇA</span>
              <span>NOSSOS</span>
              <strong>VALORES</strong>
            </div>

            <article className="tqs-reveal tqs-reveal-delay-1">
              <h3>Compromisso</h3>
              <p>
                O compromisso da{' '}<br />
                Asscont é com a{' '}<br />
                excelência em{' '}<br />
                serviços e a satisfação{' '}<br />
                dos nossos clientes{' '}<br />
                em todas as{' '}<br />
                interações.
              </p>
            </article>

            <article className="tqs-reveal tqs-reveal-delay-2">
              <h3>Responsabilidade</h3>
              <p>
                Assumimos a{' '}<br />
                responsabilidade de{' '}<br />
                gerar um impacto{' '}<br />
                positivo na sociedade{' '}<br />
                e meio ambiente,{' '}<br />
                promovendo práticas{' '}<br />
                sustentáveis e justas
              </p>
            </article>

            <article className="tqs-reveal tqs-reveal-delay-3">
              <h3>Ética</h3>
              <p>
                Base de todas as{' '}<br />
                nossas ações,{' '}<br />
                garantindo{' '}<br />
                transparência e{' '}<br />
                justiça em todas as{' '}<br />
                relações profissionais
              </p>
            </article>
          </div>
        </section>

        <section className="tqs-pdf-historia-metricas">
          <div className="tqs-pdf-historia-inner">
          <header className="tqs-pdf-historia-title tqs-reveal">
            <span>UM POUCO DA</span>
            <strong>NOSSA HISTÓRIA</strong>
          </header>

          <div className="tqs-pdf-timeline">
            {historia.map((item) => (
              <article className="tqs-pdf-timeline-item tqs-reveal" key={item.ano}>
                <div className="tqs-pdf-timeline-marker" aria-hidden="true" />
                <h3>{item.ano}</h3>
                <h4>{item.titulo}</h4>
                <p>{item.texto}</p>
              </article>
            ))}
          </div>

          <div className="tqs-pdf-experiencia-title tqs-reveal">
            A <strong>experiência</strong> da ASSCONT a favor{' '}<br />
            da sua empresa e dos seus negócios
          </div>

          <div className="tqs-pdf-metricas">
            <div className="tqs-pdf-metrica tqs-reveal">
              <div><strong>48</strong><span>anos</span></div>
              <p>de experiência</p>
            </div>
            <div className="tqs-pdf-metrica tqs-reveal tqs-reveal-delay-1">
              <div><strong>13</strong><span>bilhões</span></div>
              <p>de faturamento{' '}<br />administrados</p>
            </div>
            <div className="tqs-pdf-metrica tqs-reveal tqs-reveal-delay-2">
              <div><i>+</i><strong>6</strong><span>países</span></div>
              <p>de empresas atendidas</p>
            </div>
            <div className="tqs-pdf-metrica tqs-reveal tqs-reveal-delay-3">
              <div><i>+</i><strong>50</strong></div>
              <p>colaboradores sob gestão</p>
            </div>
            <div className="tqs-pdf-metrica tqs-reveal tqs-reveal-delay-4">
              <div><i>+</i><strong>600</strong></div>
              <p>clientes atendidos</p>
            </div>
          </div>

          </div>

          <div className="tqs-pdf-metricas-bar" aria-hidden="true">
            <span /><span /><span /><span /><span />
          </div>
        </section>

        <section className="tqs-pdf-depoimentos" aria-label="Depoimentos de clientes">
          <div className="tqs-pdf-depoimentos-inner tqs-reveal">
            <Carousel
              ariaLabel="Depoimentos de clientes"
              itemsPerView={3}
              autoPlay
              interval={9000}
              className="tqs-pdf-depoimentos-carousel"
            >
              {depoimentos.map((depoimento, indice) => (
                <button
                  type="button"
                  className="tqs-pdf-depoimento-card"
                  key={depoimento.nome}
                  onClick={() => setDepoimentoAberto(indice)}
                  aria-label={`Ler o depoimento completo de ${depoimento.nome}`}
                >
                  <div className="tqs-pdf-depoimento-topo">
                    <div className="tqs-pdf-persona">
                      <strong>{depoimento.nome}</strong>
                      <span>{depoimento.cargo}</span>
                    </div>
                    {depoimento.logo ? (
                      <img
                        className="tqs-pdf-depoimento-logo"
                        src={depoimento.logo}
                        alt={depoimento.logoAlt}
                        loading="lazy"
                        decoding="async"
                      />
                    ) : null}
                  </div>
                  <div className="tqs-pdf-depoimento-texto">
                    {depoimento.texto.split('\n\n').map((paragrafo, index) => (
                      <p key={`${depoimento.nome}-${index}`}>{paragrafo}</p>
                    ))}
                  </div>
                  <span className="tqs-pdf-depoimento-mais" aria-hidden="true">
                    Ler depoimento completo
                  </span>
                </button>
              ))}
            </Carousel>
          </div>
        </section>

        <section className="tqs-pdf-apoio tqs-pdf-apoio-blandina">
          <div className="tqs-pdf-apoio-shape" aria-hidden="true" />
          <div className="tqs-pdf-apoio-inner">
          <div className="tqs-pdf-apoio-copy tqs-reveal">
            <h2>APOIO SOCIAL</h2>
            <h3>Instituto Blandina Meirelles</h3>
            <p>
              Organização sem fins lucrativos que atua desde 1952 no desenvolvimento de crianças,{' '}<br />
              adolescentes e jovens em situação de vulnerabilidade social, promovendo educação,{' '}<br />
              fortalecimento de vínculos e cidadania por meio de programas socioeducativos.
            </p>
          </div>
          </div>
          <img className="tqs-pdf-blandina-logo tqs-reveal tqs-reveal-delay-1" src={imgLogoBlandina} alt="Instituto Blandina Meirelles" width={548} height={517} loading="lazy" decoding="async" />
          <img className="tqs-pdf-blandina-foto tqs-reveal tqs-reveal-delay-2" src={imgInstitutoBlandina} alt="Atividades do Instituto Blandina Meirelles" width={1029} height={661} loading="lazy" decoding="async" />
        </section>

        <section className="tqs-pdf-apoio tqs-pdf-apoio-olhinhos">
          <div className="tqs-pdf-apoio-shape" aria-hidden="true" />
          <img className="tqs-pdf-olhinhos-foto tqs-reveal" src={imgFotoOlhinhos} alt="De olho nos olhinhos" width={1192} height={374} loading="lazy" decoding="async" />
          <img className="tqs-pdf-olhinhos-logo tqs-reveal tqs-reveal-delay-1" src={imgLogoOlhinhos} alt="De olho nos olhinhos" width={718} height={353} loading="lazy" decoding="async" />
          <div className="tqs-pdf-apoio-inner">
          <div className="tqs-pdf-apoio-copy tqs-reveal tqs-reveal-delay-2">
            <h2>APOIO SOCIAL</h2>
            <h3>De olho nos olhinhos</h3>
            <p>
              Dedicada à conscientização sobre o retinoblastoma, a iniciativa promove{' '}<br />
              informação, orientação e educação para incentivar o diagnóstico precoce, etapa{' '}<br />
              essencial para salvar vidas e preservar a saúde ocular infantil.
            </p>
          </div>
          </div>
        </section>

        <section className="tqs-pdf-parceiros">
          <div className="tqs-pdf-parceiros-inner">
          <div className="tqs-pdf-section-tag tqs-pdf-parceiros-tag tqs-reveal"><span>PARCEIROS NACIONAIS</span></div>

          <div className="tqs-pdf-parceiros-carousel tqs-reveal tqs-reveal-delay-1">
            <Carousel
              ariaLabel="Parceiros nacionais"
              itemsPerView={3}
              autoPlay
              interval={4200}
              className="tqs-pdf-parceiros-carousel-inner"
            >
              {parceirosCarrossel.map((parceiro, parceiroIndex) => (
                <article className="tqs-pdf-parceiro-card" key={`${parceiro.nome}-${parceiroIndex}`}>
                  <h3>{parceiro.nome.split('\n').map((linha, index) => <span key={`${linha}-${index}`}>{linha}</span>)}</h3>
                  <p>{parceiro.texto}</p>
                  <img
                    className={`tqs-pdf-parceiro-logo is-${parceiro.classe}`}
                    src={parceiro.logo}
                    alt={parceiro.nome.replace('\n', ' ')}
                    loading="lazy"
                    decoding="async"
                  />
                </article>
              ))}
            </Carousel>
          </div>
          </div>
        </section>
      </main>

      <SiteNewsletter />
      <SiteFooter />

      {depoSelecionado && (
        <div
          className="tqs-cert-modal"
          role="presentation"
          onMouseDown={() => setDepoimentoAberto(null)}
        >
          <div
            className="tqs-cert-modal-card tqs-depo-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tqs-depo-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="tqs-cert-modal-close"
              onClick={() => setDepoimentoAberto(null)}
              aria-label="Fechar depoimento"
            >
              ×
            </button>
            <div className="tqs-depo-modal-topo">
              <div>
                <h2 id="tqs-depo-title">{depoSelecionado.nome}</h2>
                <p className="tqs-depo-modal-cargo">{depoSelecionado.cargo}</p>
              </div>
              {depoSelecionado.logo ? (
                <img
                  className="tqs-pdf-depoimento-logo"
                  src={depoSelecionado.logo}
                  alt={depoSelecionado.logoAlt}
                  decoding="async"
                />
              ) : null}
            </div>
            <div className="tqs-depo-modal-texto">
              {depoSelecionado.texto.split('\n\n').map((paragrafo, index) => (
                <p key={`modal-${index}`}>{paragrafo}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      {certSelecionada && (
        <div
          className="tqs-cert-modal"
          role="presentation"
          onMouseDown={() => setCertificacaoAberta(null)}
        >
          <div
            className="tqs-cert-modal-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="tqs-cert-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="tqs-cert-modal-close"
              onClick={() => setCertificacaoAberta(null)}
              aria-label="Fechar informações da certificação"
            >
              ×
            </button>
            <img src={certSelecionada.imagem} alt="" aria-hidden="true" width={1080} height={1080} decoding="async" />
            <div>
              <p className="tqs-cert-modal-label">Certificação</p>
              <h2 id="tqs-cert-title">{certSelecionada.titulo}</h2>
              <p>{certSelecionada.descricao}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
