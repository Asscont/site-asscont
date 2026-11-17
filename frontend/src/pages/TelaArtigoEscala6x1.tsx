import './TelaBlog.css';
import './TelaArtigoEscala6x1.css';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';
import ScrollReveal from '../components/ScrollReveal';
import { useIdioma, useTextos } from '../i18n';
import { artigoFimEscala6x1, traducoesFimEscala6x1, type BlocoEscala6x1 } from '../data/artigoFimEscala6x1';

const renderizarBloco = (bloco: BlocoEscala6x1, index: number) => {
  switch (bloco.tipo) {
    case 'titulo':
      return <h2 key={index} className="tblog-escala-subheading">{bloco.texto}</h2>;
    case 'paragrafo':
      return <p key={index}>{bloco.texto}</p>;
    case 'lista':
      return <ul key={index} className="tblog-escala-list">{bloco.itens.map((texto, idx) => <li key={idx}>{texto}</li>)}</ul>;
    case 'nota':
      return <p key={index} className="tblog-escala-note">{bloco.texto}</p>;
    case 'fonte':
      return <p key={index} className="tblog-escala-source"><a href={bloco.url} target="_blank" rel="noopener noreferrer">{bloco.texto}</a></p>;
  }
};

/** Página autônoma para evitar alterar a renderização de artigos já publicados. */
export default function TelaArtigoEscala6x1() {
  const t = useTextos();
  const { idioma } = useIdioma();
  const artigo = idioma === 'pt' ? artigoFimEscala6x1 : traducoesFimEscala6x1[idioma];

  return (
    <div className="tblog tblog-escala6x1">
      <SiteHeader ativo="publicacoes" />
      <main>
        <section className="tblog-article-hero">
          <div className="tblog-article-hero-backdrop" aria-hidden="true">
            <img src={artigoFimEscala6x1.imagem} alt="" width={1299} height={731} decoding="async" />
          </div>
          <div className="tblog-article-hero-image">
            <img src={artigoFimEscala6x1.imagem} alt="" width={1299} height={731} fetchPriority="high" decoding="async" />
          </div>
          <div className="tblog-article-hero-overlay" />
          <div className="tblog-article-hero-inner">
            <a className="tblog-back" href="#/publicacoes">← {t.blog.voltar}</a>
            <p>{artigo.categoria}</p>
            <h1>{artigo.titulo}</h1>
          </div>
        </section>
        <section className="tblog-article">
          <ScrollReveal>
            <article className="tblog-article-card">
              <p className="tblog-article-lead">{artigo.resumo}</p>
              {artigo.conteudo.map(renderizarBloco)}
              <div className="tblog-article-actions">
                <a className="asc-btn" href="#/contato"><span>{t.blog.falarBotao}</span></a>
              </div>
            </article>
          </ScrollReveal>
        </section>
      </main>
      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
