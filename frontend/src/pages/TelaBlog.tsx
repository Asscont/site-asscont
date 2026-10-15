import './TelaBlog.css';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';
import ScrollReveal from '../components/ScrollReveal';
import { imgFundoPublicacoes } from '../figmaAssets';
import { publicacoes } from '../data/publicacoes';
import { traduzirPublicacao, useCaminho, useTextos } from '../i18n';

/* Monta o corpo do artigo a partir do texto: parágrafos separados por linha
   em branco, "## " para subtítulo e "- " para itens de lista. */
function CorpoArtigo({ texto, lead }: { texto: string; lead?: boolean }) {
  return (
    <>
      {texto.split(/\n{2,}/).map((bloco, i) => {
        const limpo = bloco.trim();
        if (!limpo) return null;
        if (limpo.startsWith('## ')) return <h2 key={i}>{limpo.slice(3)}</h2>;
        const linhas = limpo.split('\n');
        if (linhas.every((linha) => linha.startsWith('- '))) {
          return (
            <ul key={i}>
              {linhas.map((linha) => <li key={linha}>{linha.slice(2)}</li>)}
            </ul>
          );
        }
        return (
          <p key={i} className={lead && i === 0 ? 'tblog-article-lead' : undefined}>
            {limpo}
          </p>
        );
      })}
    </>
  );
}

type TelaBlogProps = {
  slug?: string;
};

export default function TelaBlog({ slug }: TelaBlogProps) {
  const caminho = useCaminho();
  const t = useTextos();
  const original = slug ? publicacoes.find((item) => item.slug === slug) : undefined;
  const publicacao = original ? traduzirPublicacao(original, t) : undefined;

  if (slug && publicacao) {
    return (
      <div className="tblog">
        <SiteHeader ativo="publicacoes" />
        <main>
          <section className="tblog-article-hero">
            <div className="tblog-article-hero-backdrop" aria-hidden="true">
              <img src={publicacao.imagem} alt="" aria-hidden="true" width={1299} height={731} decoding="async" />
            </div>
            <div className="tblog-article-hero-image">
              <img src={publicacao.imagem} alt="" aria-hidden="true" width={1299} height={731} fetchPriority="high" decoding="async" />
            </div>
            <div className="tblog-article-hero-overlay" />
            <div className="tblog-article-hero-inner">
              <a className="tblog-back" href={caminho("publicacoes")}>← {t.blog.voltar}</a>
              <p>{publicacao.categoria}</p>
              <h1>{publicacao.titulo}</h1>
            </div>
          </section>

          <section className="tblog-article">
            <ScrollReveal>
              <article className="tblog-article-card">
                {/* quando o resumo é o começo do próprio texto, o texto já abre com ele */}
                {publicacao.texto.startsWith(publicacao.resumo.replace(/\.\.\.$/, '')) ? (
                  <CorpoArtigo texto={publicacao.texto} lead />
                ) : (
                  <>
                    <p className="tblog-article-lead">{publicacao.resumo}</p>
                    <CorpoArtigo texto={publicacao.texto} />
                  </>
                )}
                <div className="tblog-article-actions">
                  <a className="asc-btn" href={caminho("contato")}><span>{t.blog.falarBotao}</span></a>
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

  return (
    <div className="tblog">
      <SiteHeader ativo="publicacoes" />
      <main>
        <section className="tblog-hero">
          <img src={imgFundoPublicacoes} alt="" aria-hidden="true" width={1400} height={845} fetchPriority="high" decoding="async" />
          <div className="tblog-hero-overlay" />
          <div className="tblog-hero-inner">
            <p>{t.blog.heroKicker}</p>
            <h1>{t.blog.heroTitulo}</h1>
            <span>{t.blog.heroSub}</span>
          </div>
        </section>

        <section className="tblog-list">
          <div className="tblog-list-inner">
            {publicacoes.map((item) => traduzirPublicacao(item, t)).map((publicacaoItem, index) => (
              <ScrollReveal key={publicacaoItem.slug} delay={index * 90}>
                <article className="tblog-card">
                  <a className="tblog-card-image" href={caminho(`publicacoes/${publicacaoItem.slug}`)}>
                    <img src={publicacaoItem.imagem} alt="" aria-hidden="true" width={1299} height={731} loading="lazy" decoding="async" />
                  </a>
                  <div className="tblog-card-copy">
                    <p className="tblog-card-category">{publicacaoItem.categoria}</p>
                    <h2>
                      <a href={caminho(`publicacoes/${publicacaoItem.slug}`)}>{publicacaoItem.titulo}</a>
                    </h2>
                    <p>{publicacaoItem.resumo}</p>
                    <a className="tblog-read" href={caminho(`publicacoes/${publicacaoItem.slug}`)}>
                      {t.blog.lerMais} <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </section>
      </main>
      <SiteNewsletter />
      <SiteFooter />
    </div>
  );
}
