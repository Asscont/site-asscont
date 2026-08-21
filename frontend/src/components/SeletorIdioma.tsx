import './SeletorIdioma.css';
import { useIdioma, useTextos } from '../i18n';
import { HTML_LANG, IDIOMAS, NOME, SIGLA } from '../i18n/idiomas';

/* Três siglas em vez de bandeiras: bandeira representa país, não idioma —
   espanhol tem vinte países, e português ficaria entre Brasil e Portugal.
   O globo à esquerda é o que sinaliza "troca de idioma" sem depender de texto. */
export function SeletorIdioma() {
  const { idioma, definirIdioma } = useIdioma();
  const t = useTextos();

  return (
    <div className="asc-idioma" role="group" aria-label={t.idioma.rotulo}>
      <svg className="asc-idioma-globo" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4.2" ry="9" />
        <path d="M3.4 9h17.2M3.4 15h17.2" />
      </svg>

      {IDIOMAS.map((sigla) => (
        <button
          key={sigla}
          type="button"
          className="asc-idioma-botao"
          lang={HTML_LANG[sigla]}
          aria-pressed={sigla === idioma}
          title={`${t.idioma.trocarPara} ${NOME[sigla]}`}
          onClick={() => definirIdioma(sigla)}
        >
          <span className="asc-idioma-sigla">{SIGLA[sigla]}</span>
        </button>
      ))}
    </div>
  );
}

export default SeletorIdioma;
