/* ==========================================================================
   Envio da newsletter.

   O navegador só manda o e-mail digitado para /api/newsletter — uma Managed
   Function do Azure, que vive em `api/newsletter/` na raiz do repositório.

   O formato exigido pela Zenvia (assunto "Zenvia – Standard Email" e corpo em
   "Campo: Valor") é montado LÁ, e não aqui. Motivo: quem envia é o servidor,
   porque enviar e-mail exige credencial e o repositório é público. Deixar o
   formato no navegador só espalharia a mesma regra em dois lugares.
   ========================================================================== */

const ENDPOINT = '/api/newsletter';

export type ResultadoEnvio = 'ok' | 'invalido' | 'nao-configurado' | 'falhou';

/* Validação intencionalmente simples, só para dar resposta imediata a erro de
   digitação. Regex elaborada de e-mail rejeita endereço válido e não pega os
   inválidos que importam; quem valida de verdade é a entrega. */
export function emailValido(email: string): boolean {
  const limpo = email.trim();
  return limpo.length >= 6 && limpo.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpo);
}

export async function enviarNewsletter(email: string): Promise<ResultadoEnvio> {
  if (!emailValido(email)) return 'invalido';

  try {
    const resposta = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    });

    if (resposta.ok) return 'ok';

    /* 400 aqui significa que a função também recusou o endereço; 500 é falta
       de configuração no Azure, que é problema nosso e não da pessoa. */
    if (resposta.status === 400) return 'invalido';
    if (resposta.status === 500) {
      console.error('Função da newsletter sem as variáveis de ambiente.');
      return 'nao-configurado';
    }

    console.error(`Falha ao enviar a inscrição: HTTP ${resposta.status}`);
    return 'falhou';
  } catch (erro) {
    console.error('Falha de rede ao enviar a inscrição:', erro);
    return 'falhou';
  }
}
