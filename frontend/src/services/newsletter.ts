/* ==========================================================================
   Envio da newsletter.

   A Zenvia Customer Cloud não hospeda formulário. O caminho escolhido é a
   "Fonte de leads via e-mail": a Zenvia gera um endereço exclusivo
   ([conta]-[id]-[palavras]@leads.zenvia.com) e transforma em contato tudo que
   chega nele, desde que a mensagem siga o Formato Padrão:

     Assunto: Zenvia – Standard Email      (travessão, não hífen)
     Corpo:   uma linha por campo, no formato exato "Campo: Valor"

   Como o site é estático, ele não envia e-mail sozinho. Um serviço-ponte de
   formulário recebe o POST e reenvia como e-mail para o endereço da Zenvia.

   TUDO que é específico do serviço-ponte está na função `entregar`, no fim
   deste arquivo. É o único ponto a trocar quando:
     - o serviço-ponte for definido, ou
     - o site migrar para o Azure e passar a usar uma Managed Function, que
       monta o e-mail com controle total do corpo.
   ========================================================================== */

const ASSUNTO_ZENVIA = 'Zenvia – Standard Email';

/* O endpoint NÃO fica no código: vem de VITE_NEWSLETTER_ENDPOINT, definida no
   ambiente de build. Assim o mesmo código serve para teste e produção, e a URL
   não vira parte do repositório público. */
const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT as string | undefined;

export type ResultadoEnvio = 'ok' | 'invalido' | 'nao-configurado' | 'falhou';

/* Validação intencionalmente simples. Regex de e-mail elaborada rejeita
   endereços válidos e não pega os inválidos que importam; quem valida de
   verdade é a Zenvia, ao tentar entregar. */
export function emailValido(email: string): boolean {
  const limpo = email.trim();
  return limpo.length >= 6 && limpo.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpo);
}

/* Monta o corpo no Formato Padrão. Uma linha por campo, "Campo: Valor".
   Só o e-mail é pedido no site; Origem serve para separar, na Zenvia, quem
   veio do site de quem veio de importação ou cadastro manual. */
function corpoPadrao(email: string): string {
  return [`E-mail: ${email.trim()}`, 'Origem: Site'].join('\n');
}

export async function enviarNewsletter(email: string): Promise<ResultadoEnvio> {
  if (!emailValido(email)) return 'invalido';
  if (!ENDPOINT) {
    console.error('VITE_NEWSLETTER_ENDPOINT não definida: a inscrição não foi enviada.');
    return 'nao-configurado';
  }

  try {
    return (await entregar(ENDPOINT, ASSUNTO_ZENVIA, corpoPadrao(email), email)) ? 'ok' : 'falhou';
  } catch (erro) {
    console.error('Falha ao enviar a inscrição da newsletter:', erro);
    return 'falhou';
  }
}

/* -------------------------------------------------------------------------
   ADAPTADOR DO SERVIÇO-PONTE — trocar aqui, e só aqui.

   ATENÇÃO: o ponto delicado é que a Zenvia lê o CORPO do e-mail procurando
   "Campo: Valor". Vários serviços de formulário montam o corpo com o próprio
   template (tabela, cabeçalho, rodapé de propaganda), e nesse caso a leitura
   falha. Antes de considerar pronto, é obrigatório fazer um envio de teste
   real e conferir se o contato apareceu na base da Zenvia.

   Se o serviço escolhido não permitir controlar o corpo, o caminho é a
   Managed Function do Azure, que monta o e-mail sem intermediário.
   ------------------------------------------------------------------------- */
async function entregar(
  endpoint: string,
  assunto: string,
  corpo: string,
  email: string,
): Promise<boolean> {
  const resposta = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      subject: assunto,
      text: corpo,
      email,
    }),
  });

  return resposta.ok;
}
