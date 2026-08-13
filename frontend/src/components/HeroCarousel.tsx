import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import './HeroCarousel.css';

export type HeroSlide = {
  id: string;
  imagem: string;
  imagemAlt?: string;
  /** posição do foco da foto, ex.: '50% 40%' */
  foco?: string;
  /** véu sobre a foto: 'hero' (padrão) ou 'forte' */
  veu?: 'hero' | 'forte';
  conteudo: ReactNode;
};

type Props = {
  slides: HeroSlide[];
  intervalo?: number;
};

export default function HeroCarousel({ slides, intervalo = 7000 }: Props) {
  const [atual, setAtual] = useState(0);
  const pausado = useRef(false);
  const total = slides.length;

  const irPara = useCallback(
    (destino: number) => setAtual(((destino % total) + total) % total),
    [total],
  );

  useEffect(() => {
    if (total < 2) return;
    const timer = window.setInterval(() => {
      if (!pausado.current) setAtual((a) => (a + 1) % total);
    }, intervalo);
    return () => window.clearInterval(timer);
  }, [intervalo, total]);

  useEffect(() => {
    const aoTeclar = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') irPara(atual + 1);
      if (event.key === 'ArrowLeft') irPara(atual - 1);
    };
    window.addEventListener('keydown', aoTeclar);
    return () => window.removeEventListener('keydown', aoTeclar);
  }, [atual, irPara]);

  const arraste = useRef<{ x: number; ativo: boolean }>({ x: 0, ativo: false });

  return (
    <section
      className="tin-hero"
      aria-roledescription="carrossel"
      aria-label="Destaques da ASSCONT"
      onMouseEnter={() => {
        pausado.current = true;
      }}
      onMouseLeave={() => {
        pausado.current = false;
      }}
      onFocusCapture={() => {
        pausado.current = true;
      }}
      onBlurCapture={() => {
        pausado.current = false;
      }}
      onPointerDown={(e) => {
        arraste.current = { x: e.clientX, ativo: e.pointerType !== 'mouse' };
      }}
      onPointerUp={(e) => {
        if (!arraste.current.ativo) return;
        const delta = e.clientX - arraste.current.x;
        arraste.current.ativo = false;
        if (Math.abs(delta) < 45) return;
        irPara(delta < 0 ? atual + 1 : atual - 1);
      }}
    >
      {slides.map((slide, i) => (
        <div
          className={`tin-hero-slide tin-hero-slide--${slide.id}${i === atual ? ' is-atual' : ''}`}
          key={slide.id}
          aria-hidden={i !== atual}
          inert={i !== atual}
        >
          <div className={`tin-hero-bg tin-hero-bg--${slide.veu ?? 'hero'}`}>
            <img
              src={slide.imagem}
              alt={slide.imagemAlt ?? ''}
              aria-hidden={!slide.imagemAlt}
              style={slide.foco ? { objectPosition: slide.foco } : undefined}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
            />
          </div>
          <div className="tin-hero-inner">{slide.conteudo}</div>
        </div>
      ))}

      {total > 1 && (
        <div className="tin-hero-controles">
          <button
            type="button"
            className="tin-hero-seta"
            onClick={() => irPara(atual - 1)}
            aria-label="Destaque anterior"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 4L7 12l8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <div className="tin-hero-pontos">
            {slides.map((slide, i) => (
              <button
                type="button"
                key={slide.id}
                className={`tin-hero-ponto${i === atual ? ' is-atual' : ''}`}
                onClick={() => irPara(i)}
                aria-label={`Ir para o destaque ${i + 1} de ${total}`}
                aria-current={i === atual}
              />
            ))}
          </div>
          <button
            type="button"
            className="tin-hero-seta"
            onClick={() => irPara(atual + 1)}
            aria-label="Próximo destaque"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 4l8 8-8 8" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
