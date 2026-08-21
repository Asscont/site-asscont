import { Fragment } from 'react';

/* Quebras de linha do design, controladas por idioma.

   Vários títulos e parágrafos do site têm <br /> no meio, porque o layout pede
   um número exato de linhas. Esses pontos de quebra não servem para inglês nem
   para espanhol — as palavras têm outro tamanho.

   Solução: no dicionário, a quebra é escrita como \n dentro do texto, e cada
   idioma escolhe onde quebrar. Aqui o \n vira <br />.

     texto: 'Entregar soluções com\nexcelência, segurança e agilidade.'
     <p><Linhas texto={t.quemSomos.missao} /></p>

   Texto sem \n é renderizado direto, sem nenhum <br />. */
export function Linhas({ texto }: { texto: string }) {
  const partes = texto.split('\n');

  return (
    <>
      {partes.map((parte, i) => (
        <Fragment key={`${parte}-${i}`}>
          {i > 0 && <br />}
          {parte}
        </Fragment>
      ))}
    </>
  );
}

export default Linhas;
