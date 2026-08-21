import { useEffect, useId, useRef, useState } from 'react';
import './SiteChrome.css';
import {
  imgLogoAsscont,
  imgGroup14,
  imgSetaParaEnviarEmail,
} from '../figmaAssets';
import { SeletorIdioma } from './SeletorIdioma';
import { useTextos } from '../i18n';
import type { Textos } from '../i18n/textos/pt';

export type Pagina = 'inicio' | 'servicos' | 'quem-somos' | 'publicacoes' | 'contato' | 'trabalhe-conosco';

/* A rota continua em português (#/servicos) para não quebrar links já
   divulgados; só o rótulo troca de idioma. */
const links: { rota: Exclude<Pagina, 'trabalhe-conosco'>; chave: keyof Textos['header'] }[] = [
  { rota: 'inicio', chave: 'inicio' },
  { rota: 'servicos', chave: 'servicos' },
  { rota: 'quem-somos', chave: 'quemSomos' },
  { rota: 'publicacoes', chave: 'publicacoes' },
  { rota: 'contato', chave: 'contato' },
];

export function SiteHeader({ ativo }: { ativo: Pagina }) {
  const t = useTextos();
  const [aberto, setAberto] = useState(false);
  const navId = useId();
  const headerRef = useRef<HTMLElement>(null);

  // Fecha o menu com Escape ou ao clicar fora — o menu não pode ficar preso aberto.
  useEffect(() => {
    if (!aberto) return;

    const aoTeclar = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setAberto(false);
    };
    const aoClicarFora = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setAberto(false);
    };

    window.addEventListener('keydown', aoTeclar);
    document.addEventListener('mousedown', aoClicarFora);
    return () => {
      window.removeEventListener('keydown', aoTeclar);
      document.removeEventListener('mousedown', aoClicarFora);
    };
  }, [aberto]);

  return (
    <header className="asc-header" ref={headerRef}>
      {/* A placa da logo e ancorada no canto da tela, nao na coluna central:
          ela faz parte da moldura da pagina, como na referencia. */}
      <a className="asc-header-logo" href="#/inicio" aria-label={t.header.logoAlt}>
        <img src={imgLogoAsscont} alt="Asscont" width={888} height={620} />
      </a>

      <div className="asc-header-inner">
        <button
          type="button"
          className="asc-header-burger"
          aria-label={aberto ? t.header.fecharMenu : t.header.abrirMenu}
          aria-expanded={aberto}
          aria-controls={navId}
          onClick={() => setAberto((v) => !v)}
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <rect x="3" y="5" width="18" height="2" rx="1" />
            <rect x="3" y="11" width="18" height="2" rx="1" />
            <rect x="3" y="17" width="18" height="2" rx="1" />
          </svg>
        </button>

        <nav id={navId} className={`asc-header-nav${aberto ? ' is-open' : ''}`} aria-label={t.header.navegacao}>
          {links.map((link) => (
            <a
              key={link.rota}
              href={`#/${link.rota}`}
              className={link.rota === ativo ? 'is-active' : undefined}
              aria-current={link.rota === ativo ? 'page' : undefined}
              onClick={() => setAberto(false)}
            >
              {t.header[link.chave]}
            </a>
          ))}
        </nav>

        <SeletorIdioma />
      </div>
    </header>
  );
}

export function SiteNewsletter() {
  const t = useTextos();

  return (
    <section className="asc-newsletter">
      <div className="asc-newsletter-inner">
        <div>
          <p className="asc-newsletter-title">{t.newsletter.titulo}</p>
          <p>{t.newsletter.subtitulo}</p>
        </div>
        <div className="asc-newsletter-form">
          <input
            type="email"
            placeholder={t.newsletter.placeholder}
            aria-label={t.newsletter.rotuloCampo}
          />
          <button type="button" aria-label={t.newsletter.enviar}>
            <img src={imgSetaParaEnviarEmail} alt="" aria-hidden="true" decoding="async" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const t = useTextos();

  return (
    <footer className="asc-footer">
      <div className="asc-footer-inner">
        <div className="asc-footer-col">
          <strong>{t.rodape.navegacao}</strong>
          <a href="#/inicio">{t.rodape.inicio}</a>
          <a href="#/servicos">{t.rodape.servicos}</a>
          <a href="#/quem-somos">{t.rodape.quemSomos}</a>
          <a href="#/publicacoes">{t.rodape.publicacoes}</a>
          <a href="#/contato">{t.rodape.contato}</a>
        </div>
        <div className="asc-footer-col">
          <strong>{t.rodape.legal}</strong>
          <a href="#/servicos#faq">{t.rodape.faq}</a>
          <a href="#/termos">{t.rodape.termos}</a>
          <a href="#/privacidade">{t.rodape.privacidade}</a>
        </div>
        <div className="asc-footer-col asc-footer-careers">
          <a
            className="asc-footer-careers-title"
            href="#/trabalhe-conosco"
          >
            {t.rodape.trabalheConosco}
          </a>
          <a
            className="asc-footer-careers-link"
            href="#/trabalhe-conosco"
          >
            {t.rodape.carreiras}
          </a>
          <div className="asc-footer-social" aria-label={t.rodape.redesSociais}>
            <a
              href="https://www.facebook.com/AsscontAssessoria"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="asc-footer-glifo">
                <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V7.9c0-.9.25-1.5 1.55-1.5h1.65V3.6A22 22 0 0 0 14.3 3.5c-2.4 0-4 1.45-4 4.1v2.3H7.6V13h2.7v8z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/asscontpage/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <img src={imgGroup14} alt="" aria-hidden="true" loading="lazy" decoding="async" />
            </a>
            <a
              href="https://www.instagram.com/asscont.oficial/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="asc-footer-instagram"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
                <circle cx="12" cy="12" r="4.1" />
                <circle className="asc-footer-instagram-dot" cx="17.45" cy="6.65" r="1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="asc-footer-bottom">{t.rodape.copyright}</div>
    </footer>
  );
}
