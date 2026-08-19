import { useEffect, useId, useRef, useState } from 'react';
import './SiteChrome.css';
import {
  imgLogoAsscont,
  imgGroup14,
  imgSetaParaEnviarEmail,
} from '../figmaAssets';

export type Pagina = 'inicio' | 'servicos' | 'quem-somos' | 'publicacoes' | 'contato' | 'trabalhe-conosco';

const links: { rota: Exclude<Pagina, 'trabalhe-conosco'>; label: string }[] = [
  { rota: 'inicio', label: 'Início' },
  { rota: 'servicos', label: 'Serviços' },
  { rota: 'quem-somos', label: 'Quem Somos' },
  { rota: 'publicacoes', label: 'Publicações' },
  { rota: 'contato', label: 'Contato' },
];

export function SiteHeader({ ativo }: { ativo: Pagina }) {
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
      <a className="asc-header-logo" href="#/inicio" aria-label="Asscont — página inicial">
        <img src={imgLogoAsscont} alt="Asscont" width={888} height={620} />
      </a>

      <div className="asc-header-inner">
        <button
          type="button"
          className="asc-header-burger"
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
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

        <nav id={navId} className={`asc-header-nav${aberto ? ' is-open' : ''}`} aria-label="Navegação principal">
          {links.map((link) => (
            <a
              key={link.rota}
              href={`#/${link.rota}`}
              className={link.rota === ativo ? 'is-active' : undefined}
              aria-current={link.rota === ativo ? 'page' : undefined}
              onClick={() => setAberto(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteNewsletter() {
  return (
    <section className="asc-newsletter">
      <div className="asc-newsletter-inner">
        <div>
          <p className="asc-newsletter-title">Assine nossa newsletter</p>
          <p>E fique por dentro das principais novidades.</p>
        </div>
        <div className="asc-newsletter-form">
          <input type="email" placeholder="Cadastre seu e-mail:" aria-label="E-mail" />
          <button type="button" aria-label="Enviar e-mail">
            <img src={imgSetaParaEnviarEmail} alt="" aria-hidden="true" decoding="async" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="asc-footer">
      <div className="asc-footer-inner">
        <div className="asc-footer-col">
          <strong>Navegação</strong>
          <a href="#/inicio">Início</a>
          <a href="#/servicos">Serviços</a>
          <a href="#/quem-somos">Quem somos</a>
          <a href="#/publicacoes">Publicações</a>
          <a href="#/contato">Contato</a>
        </div>
        <div className="asc-footer-col">
          <strong>Legal</strong>
          <a href="#/servicos#faq">FAQ</a>
          <a href="#/termos">Termos de Serviço</a>
          <a href="#/privacidade">Privacidade</a>
        </div>
        <div className="asc-footer-col asc-footer-careers">
          <a
            className="asc-footer-careers-title"
            href="#/trabalhe-conosco"
          >
            Trabalhe conosco
          </a>
          <a
            className="asc-footer-careers-link"
            href="#/trabalhe-conosco"
          >
            Conheça nossa área de carreiras
          </a>
          <div className="asc-footer-social" aria-label="Redes sociais da Asscont">
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
      <div className="asc-footer-bottom">Copyright © 2026</div>
    </footer>
  );
}
