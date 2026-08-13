import { useCallback, useEffect, useRef, useState } from 'react';
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react';
import './Carousel.css';

type CarouselProps = {
  /** cada filho vira um slide */
  children: ReactNode[];
  /** quantos slides aparecem por vez no desktop */
  itemsPerView?: number;
  /** avança sozinho */
  autoPlay?: boolean;
  /** intervalo do autoplay em ms */
  interval?: number;
  /** rótulo acessível do carrossel */
  ariaLabel: string;
  /** tema das setas/bolinhas */
  variant?: 'light' | 'dark';
  className?: string;
};

/* Mesmos breakpoints estruturais do CSS: 560 / 1024. */
function useItemsPerView(desktop: number) {
  const [itens, setItens] = useState(desktop);

  useEffect(() => {
    const calcular = () => {
      const largura = window.innerWidth;
      if (largura < 560) setItens(1);
      else if (largura < 1024) setItens(Math.min(2, desktop));
      else setItens(desktop);
    };
    calcular();
    window.addEventListener('resize', calcular);
    return () => window.removeEventListener('resize', calcular);
  }, [desktop]);

  return itens;
}

export default function Carousel({
  children,
  itemsPerView = 3,
  autoPlay = false,
  interval = 5000,
  ariaLabel,
  variant = 'dark',
  className = '',
}: CarouselProps) {
  const slides = children.filter(Boolean);
  const porTela = useItemsPerView(itemsPerView);
  /* O deslocamento e contado em ITENS, nao em telas cheias. Com 22 logos e 5
     por vez, paginar de 5 em 5 fazia a ultima parada mostrar 2 logos e tres
     buracos. Limitando o primeiro item a slides.length - porTela, a ultima
     parada sempre exibe porTela itens. */
  const ultimoInicio = Math.max(0, slides.length - porTela);
  const paginas = Math.max(1, Math.ceil(slides.length / porTela));
  const [pagina, setPagina] = useState(0);
  const pausado = useRef(false);

  useEffect(() => {
    setPagina((p) => Math.min(p, paginas - 1));
  }, [paginas]);

  /* primeiro item visivel, travado no fim */
  const inicio = Math.min(pagina * porTela, ultimoInicio);

  const irPara = useCallback(
    (destino: number) => setPagina(((destino % paginas) + paginas) % paginas),
    [paginas],
  );

  useEffect(() => {
    if (!autoPlay || paginas < 2) return;
    const timer = window.setInterval(() => {
      if (!pausado.current) setPagina((p) => (p + 1) % paginas);
    }, interval);
    return () => window.clearInterval(timer);
  }, [autoPlay, interval, paginas]);

  const podeNavegar = paginas > 1;

  const arraste = useRef<{ x: number; ativo: boolean }>({ x: 0, ativo: false });

  const aoPressionar = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' || !podeNavegar) return;
    arraste.current = { x: event.clientX, ativo: true };
  };

  const aoSoltar = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!arraste.current.ativo) return;
    const delta = event.clientX - arraste.current.x;
    arraste.current.ativo = false;
    if (Math.abs(delta) < 45) return;
    irPara(delta < 0 ? pagina + 1 : pagina - 1);
  };

  return (
    <div
      className={`asc-carousel asc-carousel--${variant} ${className}`.trim()}
      role="group"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      onMouseEnter={() => {
        pausado.current = true;
      }}
      onMouseLeave={() => {
        pausado.current = false;
      }}
    >
      <div
        className="asc-carousel-viewport"
        onPointerDown={aoPressionar}
        onPointerUp={aoSoltar}
        onPointerCancel={() => {
          arraste.current.ativo = false;
        }}
      >
        <div
          className="asc-carousel-track"
          style={{ transform: `translateX(-${(inicio * 100) / porTela}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              className="asc-carousel-slide"
              style={{ flexBasis: `${100 / porTela}%` }}
              key={i}
              aria-hidden={i < inicio || i >= inicio + porTela}
              inert={i < inicio || i >= inicio + porTela}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {podeNavegar && (
        <>
          <button
            type="button"
            className="asc-carousel-arrow asc-carousel-arrow--prev"
            onClick={() => irPara(pagina - 1)}
            aria-label="Anterior"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M15 4L7 12l8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <button
            type="button"
            className="asc-carousel-arrow asc-carousel-arrow--next"
            onClick={() => irPara(pagina + 1)}
            aria-label="Próximo"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M9 4l8 8-8 8"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="asc-carousel-dots">
            {Array.from({ length: paginas }).map((_, i) => (
              <button
                type="button"
                key={i}
                className={`asc-carousel-dot${i === pagina ? ' is-active' : ''}`}
                onClick={() => irPara(i)}
                aria-label={`Ir para o grupo ${i + 1}`}
                aria-current={i === pagina}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
