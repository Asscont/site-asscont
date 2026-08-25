/* ==========================================================================
   POST /api/newsletter   { "email": "pessoa@empresa.com" }

   Cria o contato na base da Zenvia, chamando a API dela:

     POST https://api.zenvia.com/v2/contacts
     X-API-TOKEN: <token>
     { "channelList": [{ "type": "email", "id": "..." }], "listIds": [...] }

   Por que a API e nao e-mail: o caminho por e-mail (Fonte de leads) dependia
   de uma permissao Mail.Send ampla no Microsoft 365, de um segredo no Entra e
   de a Zenvia interpretar corretamente o corpo da mensagem. A API troca tudo
   isso por um token e uma resposta que diz na hora se deu certo.

   Por que isto roda no servidor: o token da Zenvia da acesso a base de
   contatos inteira. No navegador ele ficaria visivel no codigo publicado.

   Variaveis de ambiente (Azure > site-asscont > Variaveis de ambiente):
     ZENVIA_TOKEN     token criado no painel da Zenvia ("Gerar Token API")
     ZENVIA_LIST_ID   id da lista que recebe as inscricoes (opcional; sem ele
                      o contato entra na base sem lista)
   ========================================================================== */

const URL_ZENVIA = 'https://api.zenvia.com/v2/contacts';

function emailValido(email) {
  const limpo = String(email || '').trim();
  return limpo.length >= 6 && limpo.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpo);
}

/* Freio simples por IP, na memoria da instancia. Nao substitui captcha: a
   instancia e efemera e o contador zera quando ela recicla. Serve para conter
   repeticao acidental e rajada de um mesmo lugar. */
const vistos = new Map();
const JANELA_MS = 60_000;
const MAXIMO_POR_JANELA = 5;

function excedeuLimite(ip) {
  const agora = Date.now();
  const registros = (vistos.get(ip) || []).filter((t) => agora - t < JANELA_MS);
  registros.push(agora);
  vistos.set(ip, registros);
  if (vistos.size > 5000) vistos.clear();
  return registros.length > MAXIMO_POR_JANELA;
}

/* Contato que ja existe nao e erro para quem se inscreveu: a pessoa esta na
   lista, que era o objetivo. Mostrar falha nesse caso faria ela tentar de novo
   sem necessidade. A Zenvia nao documenta o codigo exato, entao a deteccao
   olha o texto da resposta — conferir no primeiro teste real. */
function jaExiste(status, texto) {
  if (status === 409) return true;
  const t = String(texto).toLowerCase();
  return status === 400 && (t.includes('exist') || t.includes('duplicat'));
}

module.exports = async function (context, req) {
  const responder = (status, corpo) => {
    context.res = {
      status,
      headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      body: corpo,
    };
  };

  if (req.method !== 'POST') return responder(405, { erro: 'metodo-nao-permitido' });

  if (!process.env.ZENVIA_TOKEN) {
    context.log.error('ZENVIA_TOKEN ausente: a inscricao nao foi enviada.');
    return responder(500, { erro: 'nao-configurado' });
  }

  const email = String(req.body?.email || '').trim();
  if (!emailValido(email)) return responder(400, { erro: 'email-invalido' });

  const ip = (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconhecido';
  if (excedeuLimite(ip)) return responder(429, { erro: 'muitas-tentativas' });

  const contato = { channelList: [{ type: 'email', id: email }] };
  if (process.env.ZENVIA_LIST_ID) contato.listIds = [process.env.ZENVIA_LIST_ID];

  try {
    const resposta = await fetch(URL_ZENVIA, {
      method: 'POST',
      headers: { 'X-API-TOKEN': process.env.ZENVIA_TOKEN, 'Content-Type': 'application/json' },
      body: JSON.stringify(contato),
    });

    if (resposta.ok) {
      /* O e-mail nao vai para o log: e dado pessoal, e log seria mais um lugar
         onde ele passaria a existir. */
      context.log('Contato criado na Zenvia.');
      return responder(200, { ok: true });
    }

    const texto = await resposta.text();

    if (jaExiste(resposta.status, texto)) {
      context.log('Contato ja existia na Zenvia.');
      return responder(200, { ok: true });
    }

    context.log.error(`Zenvia recusou (${resposta.status}): ${texto}`);
    return responder(502, { erro: 'falha-no-envio' });
  } catch (erro) {
    context.log.error('Falha de rede ao chamar a Zenvia:', erro.message);
    return responder(502, { erro: 'falha-no-envio' });
  }
};
