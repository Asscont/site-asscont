import type { ReactNode } from 'react';
import './TelaBlog.css';
import { SiteFooter, SiteHeader, SiteNewsletter } from '../components/SiteChrome';
import ScrollReveal from '../components/ScrollReveal';
import { imgFundoPublicacoes } from '../figmaAssets';
import { publicacoes } from '../data/publicacoes';
import { traduzirPublicacao, useCaminho, useTextos } from '../i18n';

/* Link dentro do texto: [texto que aparece](https://endereço). Só vira link
   esse formato exato, com endereço http(s); abre em nova aba. Texto sem esse
   padrão volta como a mesma string de antes, então os artigos sem link
   continuam exatamente iguais. */
const LINK = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;

function comLinks(texto: string): ReactNode {
  if (!texto.includes('](http')) return texto;
  const partes: ReactNode[] = [];
  let ultimo = 0;
  for (const achado of texto.matchAll(LINK)) {
    const inicio = achado.index ?? 0;
    if (inicio > ultimo) partes.push(texto.slice(ultimo, inicio));
    partes.push(
      <a key={inicio} href={achado[2]} target="_blank" rel="noopener noreferrer">
        {achado[1]}
      </a>,
    );
    ultimo = inicio + achado[0].length;
  }
  if (!partes.length) return texto;
  if (ultimo < texto.length) partes.push(texto.slice(ultimo));
  return partes;
}

/* Monta o corpo do artigo a partir do texto: parágrafos separados por linha
   em branco, "## " para subtítulo, "- " para itens de lista e
   [texto](https://endereço) para link em parágrafos e itens de lista. */
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
              {linhas.map((linha) => <li key={linha}>{comLinks(linha.slice(2))}</li>)}
            </ul>
          );
        }
        return (
          <p key={i} className={lead && i === 0 ? 'tblog-article-lead' : undefined}>
            {comLinks(limpo)}
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
