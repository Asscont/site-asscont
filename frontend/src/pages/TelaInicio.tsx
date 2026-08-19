import { useEffect, useState } from 'react';
import './TelaInicio.css';
import HeroCarousel, { type HeroSlide } from '../components/HeroCarousel';
import seloInovacao from '../assets/certificacoes/pqec-inovacao.png';
import seloEmpreendedorismo from '../assets/certificacoes/pqec-empreendedorismo.png';
import seloQualidade from '../assets/certificacoes/pqec-qualidade.png';
import seloGestao from '../assets/certificacoes/pqec-gestao.png';
import seloAbnt from '../assets/certificacoes/abnt-sistema-certificado.png';
import Carousel from '../components/Carousel';
import ScrollReveal from '../components/ScrollReveal';
import { clientes } from '../data/clientes';
import { publicacoes } from '../data/publicacoes';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
import {
  imgHeroInicio,
  imgFundoBannerRede,
  imgFundoBannerServicosSlide,
  imgFundoBannerCertificacoes,
  imgServicoOutsourcingContabil,
  imgServicoGestaoFiscal,
  imgServicoBpoTrabalhista,
  imgServicoAuditoria,
  imgServicoSocietario,
  imgServicoEMuitoMais,
  imgPredioQuemSomos,

  imgAntonioCarlos,
  imgFundoParcerias,
  logoCamaraItaloBrasileira,
  imgFotoIecnet,
  logoIecnet,
  logoForumOfFirms,
  imgLinkedin1,
  imgLinkedin2,
  imgLinkedin3,
  imgInstagram1,
  imgInstagram2,
  imgInstagram3,
  imgFundoPublicacoes,
  iconLocal,
  iconTelefone,
  iconRelogio,
} from '../figmaAssets';

/* Cartões do banner "Soluções — nossos serviços". Cada um leva para a
   faixa correspondente na tela de Serviços. */
const servicosBanner = [
  { titulo: 'Outsourcing Contábil', foto: imgServicoOutsourcingContabil, ancora: 'outsourcing-contabil' },
  { titulo: 'Gestão Fiscal', foto: imgServicoGestaoFiscal, ancora: 'gestao-fiscal' },
  { titulo: 'BPO Trabalhista', foto: imgServicoBpoTrabalhista, ancora: 'bpo-trabalhista' },
  { titulo: 'Auditoria', foto: imgServicoAuditoria, ancora: 'auditoria' },
  { titulo: 'Societário', foto: imgServicoSocietario, ancora: 'societario' },
  { titulo: 'E muito mais', foto: imgServicoEMuitoMais, ancora: '', legenda: 'Conheça nossos serviços' },
];

const diferenciais = [
  'Quase 50 anos de experiência',
  'Estrutura integrada (end-to-end)',
  'Atuação consultiva e estratégica',
  'Forte expertise em consultoria tributária',
  'Presença internacional (IECnet)',
  'Alto padrão de compliance e governança',
  'Relacionamento próximo e personalizado',
];

const postsLinkedin = [
  {
    img: imgLinkedin1,
    alt: 'A inteligência artificial acelera processos',
    url: 'https://pt.linkedin.com/pulse/intelig%C3%AAncia-artificial-na-contabilidade-evolu%C3%A7%C3%A3o-tecnol%C3%B3gica-u85of',
  },
  {
    img: imgLinkedin2,
    alt: 'Imposto de Renda 2026',
    url: 'https://pt.linkedin.com/pulse/imposto-de-renda-como-se-organizar-e-declarar-com-tranquilidade-qhcsf',
  },
  {
    img: imgLinkedin3,
    alt: 'Saúde mental no trabalho',
    url: 'https://www.linkedin.com/company/asscontpage/posts/?feedView=all',
  },
];

const postsInstagram = [
  {
    img: imgInstagram1,
    alt: 'NFS-e em operações de locação',
    url: 'https://www.instagram.com/asscont.oficial/',
  },
  {
    img: imgInstagram2,
    alt: 'Alta performance na prática',
    url: 'https://www.instagram.com/asscont.oficial/',
  },
  {
    img: imgInstagram3,
    alt: 'PER/DCOMP: segurança antes da transmissão',
    url: 'https://www.instagram.com/asscont.oficial/',
  },
];

function Seta() {
  return (
    <svg viewBox="0 0 24 12" fill="none" aria-hidden="true">
      <path
        d="M0 6h21M16 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const selosCert = [
  { src: seloInovacao, alt: 'PQEC Executivo Gold — Inovação' },
  { src: seloEmpreendedorismo, alt: 'PQEC Executivo Gold — Empreendedorismo' },
  { src: seloQualidade, alt: 'PQEC Executivo Gold — Qualidade' },
  { src: seloGestao, alt: 'PQEC Executivo Gold — Gestão' },
  { src: seloAbnt, alt: 'ABNT — Sistema Certificado' },
];

const numerosRede = [
  { valor: '60', mais: true, rotulo: 'empresas-membro' },
  { valor: '60', mais: true, rotulo: 'países' },
  { valor: '5', mais: false, rotulo: 'continentes' },
  { valor: '30', mais: true, rotulo: 'idiomas diferentes' },
  { valor: '400', mais: true, rotulo: 'sócios conectados' },
  { valor: '2000', mais: true, rotulo: 'profissionais' },
];


export default function TelaInicio({ destino }: { destino?: 'contato' } = {}) {
  const [redeAtiva, setRedeAtiva] = useState<'linkedin' | 'instagram'>('linkedin');

  useEffect(() => {
    if (destino === 'contato') {
      window.requestAnimationFrame(() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }));
    }
  }, [destino]);

  const slidesHero: HeroSlide[] = [
    {
      id: 'manchete',
      imagem: imgHeroInicio,
      conteudo: (
        <>
          <p className="tin-hero-tagline">
            Tradição, inovação e excelência há quase 50 anos
          </p>
          <div className="tin-hero-main">
            <h1>Soluções integradas para a gestão empresarial.</h1>
            <a className="asc-btn" href="#/quem-somos">
              <span>Saiba mais</span>
            </a>
          </div>
        </>
      ),
    },
    {
      id: 'rede',
      imagem: imgFundoBannerRede,
      veu: 'forte',
      conteudo: (
        <div className="tin-hero-rede">
          <div>
            <p className="tin-hero-rede-titulo">
              <b>26ª maior</b>
              Rede contábil do mundo (IAB 2024)
            </p>
            <div className="tin-hero-numeros">
              {numerosRede.map((n) => (
                <div className="tin-hero-numero" key={n.rotulo}>
                  <strong>
                    {n.mais && <span>+</span>}
                    {n.valor}
                  </strong>
                  <em>{n.rotulo}</em>
                </div>
              ))}
            </div>
          </div>
          <div className="tin-hero-rede-copy">
            <div className="tin-hero-selos-rede">
              <img src={logoIecnet} alt="IECnet" loading="lazy" decoding="async" />
              <img src={logoForumOfFirms} alt="Forum of Firms" loading="lazy" decoding="async" />
            </div>
            <h2>
              Sua empresa no Brasil.
              <br />
              Conectada ao mundo.
            </h2>
            <p>Membros da IECnet — rede internacional de firmas independentes</p>
          </div>
        </div>
      ),
    },
    {
      id: 'servicos',
      imagem: imgFundoBannerServicosSlide,
      veu: 'forte',
      conteudo: (
        <div className="tin-hero-servicos">
          <div className="tin-hero-servicos-titulo">
            <h2>Soluções</h2>
            <p>Nossos serviços</p>
          </div>
          <ul className="tin-hero-servicos-grid">
            {servicosBanner.map((item) => (
              <li key={item.titulo}>
                <a href={item.ancora ? `#/servicos#${item.ancora}` : '#/servicos'}>
                  <img src={item.foto} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <span>
                    <strong>{item.titulo}</strong>
                    {item.legenda && <em>{item.legenda}</em>}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      id: 'certificacoes',
      imagem: imgFundoBannerCertificacoes,
      veu: 'forte',
      conteudo: (
        <div className="tin-hero-cert">
          <div className="tin-hero-cert-copy">
            <h2>Certificações</h2>
            <p>
              Inteligência contábil com
              <br />
              padrão de excelência
            </p>
          </div>
          <div className="tin-hero-selos">
            {selosCert.map((selo) => (
              <img src={selo.src} alt={selo.alt} key={selo.alt} loading="lazy" decoding="async" />
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="tela-inicio">
      <SiteHeader ativo={destino === 'contato' ? 'contato' : 'inicio'} />

      <HeroCarousel slides={slidesHero} />

      <section className="tin-sobre">
        <div className="tin-sobre-foto">
          <img src={imgPredioQuemSomos} alt="Edifícios corporativos" width={1400} height={1199} loading="lazy" decoding="async" />
        </div>
        <div className="tin-sobre-painel">
          <div className="tin-sobre-copy">
            <h2>Quem somos</h2>
            <p className="tin-sobre-sub">Sobre nós</p>
            <div className="tin-sobre-textos">
              <p className="tin-sobre-texto">
                O Grupo ASSCONT, com quase 50 anos de experiência, reúne profissionais com a
                mais alta especialização em contabilidade, auditoria, BPO financeiro,
                legalização empresarial e societária, perícia contábil, consultoria tributária
                e de gestão.
              </p>
              <p className="tin-sobre-texto">
                Oferecemos soluções estratégicas personalizadas com segurança, excelência e
                visão de negócios para empresas nacionais e multinacionais.
              </p>
              <p className="tin-sobre-texto">
                Nossa trajetória foi construída sobre três princípios fundamentais: excelência
                técnica, relacionamento próximo aos clientes e compromisso permanente com a
                qualidade das informações produzidas.
              </p>
              <p className="tin-sobre-texto">
                A ASSCONT integra a IECnet — International Association of Accounting and
                Auditing Professionals, uma das mais tradicionais associações internacionais de
                firmas independentes de auditoria e consultoria. Essa conexão representa maior
                alinhamento técnico, atualização constante e uma visão integrada das tendências
                regulatórias de governança.
              </p>
            </div>

            <a className="tin-sobre-link" href="#/servicos">
              <span>Nossos Serviços</span>
              <Seta />
            </a>
            <a className="tin-sobre-link" href="#/publicacoes">
              <span>Publicações</span>
              <Seta />
            </a>
          </div>
        </div>
      </section>

      <section className="tin-clientes">
        <div className="tin-clientes-head">
          <span className="asc-tag">
            <span>Alguns de nossos clientes</span>
          </span>
        </div>
        <div className="tin-clientes-faixa">
          <div className="tin-clientes-inner">
            <Carousel
              ariaLabel="Alguns de nossos clientes"
              itemsPerView={5}
              autoPlay
              interval={4000}
              variant="light"
            >
              {clientes.map((cliente) => (
                <div className={`tin-cliente${cliente.fundoEscuro ? ' tin-cliente--dark' : ''}`} key={cliente.nome}>
                  <img src={cliente.logo} alt={cliente.nome} loading="lazy" decoding="async" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      <section className="tin-diferenciais">
        <div className="tin-diferenciais-inner">
          <div className="tin-diferenciais-foto">
            <img src={imgAntonioCarlos} alt="Antonio Carlos Lopes, fundador da Asscont" width={996} height={960} loading="lazy" decoding="async" />
          </div>
          <ScrollReveal className="tin-diferenciais-reveal">
            <div className="tin-diferenciais-painel">
            <h2>
              Diferenciais
              <br />
              competitivos
            </h2>
            <ol>
              {diferenciais.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="tin-parceria tin-parceria--camara">
        <div className="tin-parceria-inner">
          <div className="tin-parceria-copy">
            <h2 className="tin-parceria-titulo">Parcerias internacionais</h2>
            <p className="tin-parceria-sub">Câmara de Comércio Ítalo-Brasileira</p>
            <p>
              A atuação internacional da Asscont é reforçada pela nomeação de Antonio Carlos
              Lopes, diretor e fundador da empresa, como representante da Câmara de Comércio
              Ítalo-Brasileira no estado de São Paulo. A iniciativa amplia a conexão da
              Asscont com o ambiente de negócios entre Brasil e Itália, fortalecendo sua
              presença institucional e sua capacidade de apoiar empresas em processos de
              relacionamento e expansão internacional.
            </p>
          </div>
        </div>
        <div className="tin-parceria-arte">
          <img src={imgFundoParcerias} alt="" aria-hidden="true" width={1400} height={1199} loading="lazy" decoding="async" />
          <div className="tin-parceria-logo">
            <img
              src={logoCamaraItaloBrasileira}
              alt="Câmara de Comércio Ítalo-Brasileira"
              width={900}
              height={900}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="tin-parceria tin-parceria--iecnet">
        <div className="tin-parceria-arte tin-parceria-arte--esquerda">
          <img className="tin-parceria-foto-iecnet" src={imgFotoIecnet} alt="Encontro da rede IECnet" width={648} height={864} loading="lazy" decoding="async" />
        </div>
        {/* fora da arte: o clip-path diagonal cortaria os selos */}
        <div className="tin-parceria-selos">
          <img src={logoIecnet} alt="IECnet" width={260} height={136} loading="lazy" decoding="async" />
          <img src={logoForumOfFirms} alt="Member of the Forum of Firms" width={262} height={136} loading="lazy" decoding="async" />
        </div>
        <div className="tin-parceria-inner">
          <div className="tin-parceria-copy tin-parceria-copy--direita">
            <h2 className="tin-parceria-titulo">Parcerias internacionais</h2>
            <p className="tin-parceria-sub">IECnet</p>
            <p>
              A Asscont integra a IECnet, rede internacional fundada em 1987 que reúne cerca
              de 80 firmas em seis continentes. Essa conexão amplia sua capacidade de apoiar
              clientes em operações locais e internacionais, com acesso a uma rede global
              pautada por altos padrões profissionais, cooperação estratégica e suporte
              qualificado em diferentes mercados.
            </p>
          </div>
        </div>
      </section>

      <section className="tin-social">
        <div className="tin-social-inner">
          <div className="tin-social-copy">
            <p className="tin-social-kicker">Conteúdo e atualizações</p>
            <h2>
              Nas nossas
              <br />
              <strong>redes</strong>
            </h2>

            <div className="tin-social-tabs" role="tablist" aria-label="Escolha a rede social">
              <button
                type="button"
                role="tab"
                aria-selected={redeAtiva === 'linkedin'}
                className={redeAtiva === 'linkedin' ? 'is-active' : undefined}
                onClick={() => setRedeAtiva('linkedin')}
              >
                LinkedIn
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={redeAtiva === 'instagram'}
                className={redeAtiva === 'instagram' ? 'is-active' : undefined}
                onClick={() => setRedeAtiva('instagram')}
              >
                Instagram
              </button>
            </div>

            {redeAtiva === 'linkedin' ? (
              <>
                <p>Fique por dentro das nossas análises, atualizações e conteúdos exclusivos no LinkedIn.</p>
                <a className="asc-btn" href="https://www.linkedin.com/company/asscontpage/" target="_blank" rel="noopener noreferrer">
                  <span>Ver LinkedIn</span>
                </a>
              </>
            ) : (
              <>
                <p>Acompanhe também o dia a dia da ASSCONT, conteúdos técnicos e novidades em <strong>@asscont.oficial</strong>.</p>
                <a className="asc-btn" href="https://www.instagram.com/asscont.oficial/" target="_blank" rel="noopener noreferrer">
                  <span>Ver Instagram</span>
                </a>
              </>
            )}
          </div>

          <div className="tin-social-posts" role="tabpanel">
            {redeAtiva === 'linkedin' ? (
              <Carousel key="linkedin" ariaLabel="Posts do LinkedIn" itemsPerView={3} autoPlay interval={5000}>
                {postsLinkedin.map((post) => (
                  <a className="tin-post" href={post.url} target="_blank" rel="noopener noreferrer" key={post.alt}>
                    <img src={post.img} alt={post.alt} width={1080} height={1350} loading="lazy" decoding="async" />
                  </a>
                ))}
              </Carousel>
            ) : (
              <Carousel key="instagram" ariaLabel="Destaques recentes do Instagram" itemsPerView={3} autoPlay interval={5200}>
                {postsInstagram.map((post) => (
                  <a className="tin-post" href={post.url} target="_blank" rel="noopener noreferrer" key={post.alt}>
                    <img src={post.img} alt={post.alt} width={1080} height={1350} loading="lazy" decoding="async" />
                  </a>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </section>

      <section className="tin-publicacoes" id="publicacoes">
        <div className="tin-publicacoes-bg">
          <img src={imgFundoPublicacoes} alt="" aria-hidden="true" width={1400} height={845} loading="lazy" decoding="async" />
        </div>
        <div className="tin-publicacoes-inner">
          <h2>Publicações</h2>
          <Carousel
            ariaLabel="Publicações da Asscont"
            itemsPerView={3}
            variant="light"
            autoPlay
            interval={6000}
          >
            {publicacoes.map((pub) => (
              <article className="tin-pub-card" key={pub.titulo}>
                <div className="tin-pub-img">
                  <img src={pub.imagem} alt="" aria-hidden="true" width={1299} height={731} loading="lazy" decoding="async" />
                </div>
                <h3>{pub.titulo}</h3>
                <p>{pub.resumo}</p>
                <a className="tin-pub-link" href={`#/publicacoes/${pub.slug}`}>
                  <span>Ler mais</span>
                </a>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="tin-contato" id="contato">
        <div className="tin-contato-inner">
          <h2>Vamos construir decisões mais seguras para o seu negócio.</h2>
          <p className="tin-contato-lead">
            Nossa equipe está preparada para entender os desafios da sua empresa e indicar as
            soluções mais seguras e adequadas, de forma personalizada.
            <br />
            Com quase 50 anos de experiência, certificação ISO 9001:2015 e atuação
            internacional por meio da IECnet, oferecemos um atendimento próximo, consultivo e
            alinhado às necessidades de empresas em crescimento.
          </p>

          <div className="tin-contato-grid">
            <div className="tin-contato-col">
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--local" src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p>
                    <strong>Barueri</strong> ASSCONT ASSESSORIA CONTÁBIL E AUDITORIA S/S
                  </p>
                  <p>Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 | 17º andar</p>
                  <p>Conjunto 1.711 | Tamboré</p>
                </div>
              </div>
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--local" src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p>
                    <strong>São Paulo</strong> ASSCONT OUTSOURCING CONTÁBIL E SERVIÇOS LTDA.
                  </p>
                  <p>Rua Boa Vista, 254 | 11º andar | Conjunto 1.101 | Centro | São Paulo</p>
                </div>
              </div>
            </div>

            <div className="tin-contato-col">
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--telefone" src={iconTelefone} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p className="tin-contato-label">Contato</p>
                  <p>
                    <strong>Barueri</strong> 11 2970-1250
                  </p>
                  <p>
                    <strong>São Paulo</strong> 11 3656-2200
                  </p>
                  <p>
                    <a href="mailto:contato@asscont.com.br">contato@asscont.com.br</a>
                  </p>
                </div>
              </div>
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--relogio" src={iconRelogio} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p className="tin-contato-label">Horário de atendimento</p>
                  <p>Segunda a sexta-feira</p>
                  <p>Das 8h30 às 17h30</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tin-mapas" aria-labelledby="tin-mapas-titulo">
        <div className="tin-mapas-inner">
          <div className="tin-mapas-head">
            <p>Onde estamos</p>
            <h2 id="tin-mapas-titulo">Nossas unidades</h2>
            <span>Escolha a unidade e abra a rota diretamente no Google Maps.</span>
          </div>

          <div className="tin-mapas-grid">
            <article className="tin-mapa-card">
              <div className="tin-mapa-card-head">
                <img src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <span>Unidade</span>
                  <h3>Barueri</h3>
                  <p>Av. Marcos Penteado de Ulhoa Rodrigues, 1.119 · 17º andar · Conjunto 1.711 · Tamboré</p>
                </div>
              </div>
              <div className="tin-mapa-frame">
                <iframe
                  title="Mapa da unidade ASSCONT em Barueri"
                  src="https://www.google.com/maps?q=Av.%20Marcos%20Penteado%20de%20Ulhoa%20Rodrigues%2C%201119%2C%20Tambor%C3%A9%2C%20Barueri%2C%20SP&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="tin-mapa-link"
                href="https://www.google.com/maps/search/?api=1&query=Av.+Marcos+Penteado+de+Ulhoa+Rodrigues,+1119,+Tambor%C3%A9,+Barueri,+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Abrir no Google Maps</span>
                <Seta />
              </a>
            </article>

            <article className="tin-mapa-card">
              <div className="tin-mapa-card-head">
                <img src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <span>Unidade</span>
                  <h3>São Paulo</h3>
                  <p>Rua Boa Vista, 254 · 11º andar · Conjunto 1.101 · Centro · São Paulo</p>
                </div>
              </div>
              <div className="tin-mapa-frame">
                <iframe
                  title="Mapa da unidade ASSCONT em São Paulo"
                  src="https://www.google.com/maps?q=Rua%20Boa%20Vista%2C%20254%2C%20Centro%2C%20S%C3%A3o%20Paulo%2C%20SP&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <a
                className="tin-mapa-link"
                href="https://www.google.com/maps/search/?api=1&query=Rua+Boa+Vista,+254,+Centro,+S%C3%A3o+Paulo,+SP"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Abrir no Google Maps</span>
                <Seta />
              </a>
            </article>
          </div>
        </div>
      </section>

      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
