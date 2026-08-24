import { useEffect, useState } from 'react';
import './TelaInicio.css';
import HeroCarousel, { type HeroSlide } from '../components/HeroCarousel';
import seloInovacao from '../assets/certificacoes/pqec-inovacao.webp';
import seloEmpreendedorismo from '../assets/certificacoes/pqec-empreendedorismo.png';
import seloQualidade from '../assets/certificacoes/pqec-qualidade.png';
import seloGestao from '../assets/certificacoes/pqec-gestao.webp';
import seloAbnt from '../assets/certificacoes/abnt-sistema-certificado.webp';
import Carousel from '../components/Carousel';
import ScrollReveal from '../components/ScrollReveal';
import { clientes } from '../data/clientes';
import { publicacoes } from '../data/publicacoes';
import { SiteHeader, SiteNewsletter, SiteFooter } from '../components/SiteChrome';
import { traduzirPublicacao, useTextos } from '../i18n';
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
/* A âncora aponta para a faixa correspondente na tela de Serviços e não muda
   de idioma. O nome do serviço vem de t.inicio.servicosNomes, na mesma ordem. */
const servicosBanner = [
  { foto: imgServicoOutsourcingContabil, ancora: 'outsourcing-contabil' },
  { foto: imgServicoGestaoFiscal, ancora: 'gestao-fiscal' },
  { foto: imgServicoBpoTrabalhista, ancora: 'bpo-trabalhista' },
  { foto: imgServicoAuditoria, ancora: 'auditoria' },
  { foto: imgServicoSocietario, ancora: 'societario' },
  { foto: imgServicoEMuitoMais, ancora: '', comLegenda: true },
];

/* Os textos alternativos vivem em t.inicio.postsLinkedinAlt / postsInstagramAlt,
   na mesma ordem desta lista. */
const postsLinkedin = [
  {
    img: imgLinkedin1,
    url: 'https://pt.linkedin.com/pulse/intelig%C3%AAncia-artificial-na-contabilidade-evolu%C3%A7%C3%A3o-tecnol%C3%B3gica-u85of',
  },
  {
    img: imgLinkedin2,
    url: 'https://pt.linkedin.com/pulse/imposto-de-renda-como-se-organizar-e-declarar-com-tranquilidade-qhcsf',
  },
  {
    img: imgLinkedin3,
    url: 'https://www.linkedin.com/company/asscontpage/posts/?feedView=all',
  },
];

const postsInstagram = [
  { img: imgInstagram1, url: 'https://www.instagram.com/asscont.oficial/' },
  { img: imgInstagram2, url: 'https://www.instagram.com/asscont.oficial/' },
  { img: imgInstagram3, url: 'https://www.instagram.com/asscont.oficial/' },
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

/* alt de cada selo em t.inicio.selosAlt, na mesma ordem */
const selosCert = [seloInovacao, seloEmpreendedorismo, seloQualidade, seloGestao, seloAbnt];

/* os números não mudam de idioma; só o rótulo, em t.inicio.redeRotulos */
const numerosRede = [
  { valor: '60', mais: true },
  { valor: '60', mais: true },
  { valor: '5', mais: false },
  { valor: '30', mais: true },
  { valor: '400', mais: true },
  { valor: '2000', mais: true },
];


export default function TelaInicio({ destino }: { destino?: 'contato' } = {}) {
  const t = useTextos();
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
          <p className="tin-hero-tagline">{t.inicio.heroTagline}</p>
          <div className="tin-hero-main">
            <h1>{t.inicio.heroTitulo}</h1>
            <a className="asc-btn" href="#/quem-somos">
              <span>{t.inicio.heroBotao}</span>
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
              <b>{t.inicio.redeDestaque}</b>
              {t.inicio.redeSubtitulo}
            </p>
            <div className="tin-hero-numeros">
              {numerosRede.map((n, i) => (
                <div className="tin-hero-numero" key={t.inicio.redeRotulos[i]}>
                  <strong>
                    {n.mais && <span>+</span>}
                    {n.valor}
                  </strong>
                  <em>{t.inicio.redeRotulos[i]}</em>
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
              {t.inicio.redeChamadaL1}
              <br />
              {t.inicio.redeChamadaL2}
            </h2>
            <p>{t.inicio.redeLegenda}</p>
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
            <h2>{t.inicio.servicosTitulo}</h2>
            <p>{t.inicio.servicosSub}</p>
          </div>
          <ul className="tin-hero-servicos-grid">
            {servicosBanner.map((item, i) => (
              <li key={item.ancora || 'mais'}>
                <a href={item.ancora ? `#/servicos#${item.ancora}` : '#/servicos'}>
                  <img src={item.foto} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                  <span>
                    <strong>{t.inicio.servicosNomes[i]}</strong>
                    {item.comLegenda && <em>{t.inicio.servicosLegenda}</em>}
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
            <h2>{t.inicio.certTitulo}</h2>
            <p>
              {t.inicio.certLinha1}
              <br />
              {t.inicio.certLinha2}
            </p>
          </div>
          <div className="tin-hero-selos">
            {selosCert.map((selo, i) => (
              <img src={selo} alt={t.inicio.selosAlt[i]} key={selo} loading="lazy" decoding="async" />
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
          <img src={imgPredioQuemSomos} alt={t.inicio.sobreFotoAlt} width={1400} height={1199} loading="lazy" decoding="async" />
        </div>
        <div className="tin-sobre-painel">
          <div className="tin-sobre-copy">
            <h2>{t.inicio.sobreTitulo}</h2>
            <p className="tin-sobre-sub">{t.inicio.sobreSub}</p>
            <div className="tin-sobre-textos">
              <p className="tin-sobre-texto">{t.inicio.sobreP1}</p>
              <p className="tin-sobre-texto">{t.inicio.sobreP2}</p>
              <p className="tin-sobre-texto">{t.inicio.sobreP3}</p>
              <p className="tin-sobre-texto">{t.inicio.sobreP4}</p>
            </div>

            <a className="tin-sobre-link" href="#/servicos">
              <span>{t.inicio.sobreLinkServicos}</span>
              <Seta />
            </a>
            <a className="tin-sobre-link" href="#/publicacoes">
              <span>{t.inicio.sobreLinkPublicacoes}</span>
              <Seta />
            </a>
          </div>
        </div>
      </section>

      <section className="tin-clientes">
        <div className="tin-clientes-head">
          <span className="asc-tag">
            <span>{t.inicio.clientesTag}</span>
          </span>
        </div>
        <div className="tin-clientes-faixa">
          <div className="tin-clientes-inner">
            <Carousel
              ariaLabel={t.inicio.clientesTag}
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
            <img src={imgAntonioCarlos} alt={t.inicio.fundadorAlt} width={996} height={960} loading="lazy" decoding="async" />
          </div>
          <ScrollReveal className="tin-diferenciais-reveal">
            <div className="tin-diferenciais-painel">
            <h2>
              {t.inicio.diferenciaisL1}
              <br />
              {t.inicio.diferenciaisL2}
            </h2>
            <ol>
              {t.inicio.diferenciais.map((item) => (
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
            <h2 className="tin-parceria-titulo">{t.inicio.parceriasTitulo}</h2>
            <p className="tin-parceria-sub">{t.inicio.camaraSub}</p>
            <p>{t.inicio.camaraTexto}</p>
          </div>
        </div>
        <div className="tin-parceria-arte">
          <img src={imgFundoParcerias} alt="" aria-hidden="true" width={1400} height={1199} loading="lazy" decoding="async" />
          <div className="tin-parceria-logo">
            <img
              src={logoCamaraItaloBrasileira}
              alt={t.inicio.camaraLogoAlt}
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
          <img className="tin-parceria-foto-iecnet" src={imgFotoIecnet} alt={t.inicio.iecnetFotoAlt} width={648} height={864} loading="lazy" decoding="async" />
        </div>
        {/* fora da arte: o clip-path diagonal cortaria os selos */}
        <div className="tin-parceria-selos">
          <img src={logoIecnet} alt="IECnet" width={260} height={136} loading="lazy" decoding="async" />
          <img src={logoForumOfFirms} alt={t.inicio.forumOfFirmsAlt} width={262} height={136} loading="lazy" decoding="async" />
        </div>
        <div className="tin-parceria-inner">
          <div className="tin-parceria-copy tin-parceria-copy--direita">
            <h2 className="tin-parceria-titulo">{t.inicio.parceriasTitulo}</h2>
            <p className="tin-parceria-sub">IECnet</p>
            <p>{t.inicio.iecnetTexto}</p>
          </div>
        </div>
      </section>

      <section className="tin-social">
        <div className="tin-social-inner">
          <div className="tin-social-copy">
            <p className="tin-social-kicker">{t.inicio.socialKicker}</p>
            <h2>
              {t.inicio.socialTituloL1}
              <br />
              <strong>{t.inicio.socialTituloL2}</strong>
            </h2>

            <div className="tin-social-tabs" role="tablist" aria-label={t.inicio.socialTabsAria}>
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
                <p>{t.inicio.socialLinkedinTexto}</p>
                <a className="asc-btn" href="https://www.linkedin.com/company/asscontpage/" target="_blank" rel="noopener noreferrer">
                  <span>{t.inicio.socialLinkedinBotao}</span>
                </a>
              </>
            ) : (
              <>
                <p>
                  {t.inicio.socialInstagramTexto} <strong>@asscont.oficial</strong>.
                </p>
                <a className="asc-btn" href="https://www.instagram.com/asscont.oficial/" target="_blank" rel="noopener noreferrer">
                  <span>{t.inicio.socialInstagramBotao}</span>
                </a>
              </>
            )}
          </div>

          <div className="tin-social-posts" role="tabpanel">
            {redeAtiva === 'linkedin' ? (
              <Carousel key="linkedin" ariaLabel={t.inicio.postsLinkedinAria} itemsPerView={3} autoPlay interval={5000}>
                {postsLinkedin.map((post, i) => (
                  <a className="tin-post" href={post.url} target="_blank" rel="noopener noreferrer" key={post.img}>
                    <img
                      src={post.img}
                      alt={t.inicio.postsLinkedinAlt[i]}
                      width={1080}
                      height={1350}
                      loading="lazy"
                      decoding="async"
                    />
                  </a>
                ))}
              </Carousel>
            ) : (
              <Carousel key="instagram" ariaLabel={t.inicio.postsInstagramAria} itemsPerView={3} autoPlay interval={5200}>
                {postsInstagram.map((post, i) => (
                  <a className="tin-post" href={post.url} target="_blank" rel="noopener noreferrer" key={post.img}>
                    <img
                      src={post.img}
                      alt={t.inicio.postsInstagramAlt[i]}
                      width={1080}
                      height={1350}
                      loading="lazy"
                      decoding="async"
                    />
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
          <h2>{t.inicio.publicacoesTitulo}</h2>
          <Carousel
            ariaLabel={t.inicio.publicacoesAria}
            itemsPerView={3}
            variant="light"
            autoPlay
            interval={6000}
          >
            {publicacoes.map((item) => traduzirPublicacao(item, t)).map((pub) => (
              <article className="tin-pub-card" key={pub.slug}>
                <div className="tin-pub-img">
                  <img src={pub.imagem} alt="" aria-hidden="true" width={1299} height={731} loading="lazy" decoding="async" />
                </div>
                <h3>{pub.titulo}</h3>
                <p>{pub.resumo}</p>
                <a className="tin-pub-link" href={`#/publicacoes/${pub.slug}`}>
                  <span>{t.inicio.publicacoesLerMais}</span>
                </a>
              </article>
            ))}
          </Carousel>
        </div>
      </section>

      <section className="tin-contato" id="contato">
        <div className="tin-contato-inner">
          <h2>{t.inicio.contatoTitulo}</h2>
          <p className="tin-contato-lead">
            {t.inicio.contatoLead1}
            <br />
            {t.inicio.contatoLead2}
          </p>

          <div className="tin-contato-grid">
            <div className="tin-contato-col">
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--local" src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p>
                    <strong>Barueri</strong> ASSCONT ASSESSORIA CONTÁBIL E AUDITORIA S/S
                  </p>
                  <p>{t.inicio.contatoBarueriEnderecoL1}</p>
                  <p>{t.inicio.contatoBarueriEnderecoL2}</p>
                </div>
              </div>
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--local" src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p>
                    <strong>São Paulo</strong> ASSCONT OUTSOURCING CONTÁBIL E SERVIÇOS LTDA.
                  </p>
                  <p>{t.inicio.contatoSpEndereco}</p>
                </div>
              </div>
            </div>

            <div className="tin-contato-col">
              <div className="tin-contato-item">
                <img className="tin-contato-icone tin-contato-icone--telefone" src={iconTelefone} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <p className="tin-contato-label">{t.inicio.contatoLabel}</p>
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
                  <p className="tin-contato-label">{t.inicio.horarioLabel}</p>
                  <p>{t.inicio.horarioDias}</p>
                  <p>{t.inicio.horarioHoras}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tin-mapas" aria-labelledby="tin-mapas-titulo">
        <div className="tin-mapas-inner">
          <div className="tin-mapas-head">
            <p>{t.inicio.mapasKicker}</p>
            <h2 id="tin-mapas-titulo">{t.inicio.mapasTitulo}</h2>
            <span>{t.inicio.mapasAjuda}</span>
          </div>

          <div className="tin-mapas-grid">
            <article className="tin-mapa-card">
              <div className="tin-mapa-card-head">
                <img src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <span>{t.inicio.mapaUnidade}</span>
                  <h3>Barueri</h3>
                  <p>{t.inicio.mapaEnderecoBarueri}</p>
                </div>
              </div>
              <div className="tin-mapa-frame">
                <iframe
                  title={t.inicio.mapaTituloBarueri}
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
                <span>{t.inicio.mapaAbrir}</span>
                <Seta />
              </a>
            </article>

            <article className="tin-mapa-card">
              <div className="tin-mapa-card-head">
                <img src={iconLocal} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <div>
                  <span>{t.inicio.mapaUnidade}</span>
                  <h3>São Paulo</h3>
                  <p>{t.inicio.mapaEnderecoSp}</p>
                </div>
              </div>
              <div className="tin-mapa-frame">
                <iframe
                  title={t.inicio.mapaTituloSp}
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
                <span>{t.inicio.mapaAbrir}</span>
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
