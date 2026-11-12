import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import './ScrollReveal.css';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    if (!('IntersectionObserver' in window)) {
      setVisivel(true);
      return;
    }

    /* Mostra o bloco assim que o topo dele entra na tela (um pouco acima da
       borda de baixo, pelo rootMargin). Antes exigia 12% do bloco visível ao
       mesmo tempo (threshold 0.12): num bloco mais alto que ~8 telas, como o
       corpo de um artigo longo no celular, isso nunca acontecia e o texto
       ficava invisível para sempre. Com threshold 0 vale para qualquer altura. */
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisivel(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '0px 0px -8% 0px' },
    );

    observer.observe(elemento);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal${visivel ? ' is-visible' : ''}${className ? ` ${className}` : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
