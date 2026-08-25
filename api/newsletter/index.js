/* ==========================================================================
   POST /api/newsletter   { "email": "pessoa@empresa.com" }

   Recebe a inscricao do formulario do rodape e a entrega na Zenvia, que
   transforma em contato tudo que chega no endereco de leads dela.

   O e-mail e montado no Formato Padrao exigido pela Zenvia:

     Assunto: Zenvia - Standard Email   (com travessao, nao hifen)
     Corpo:   uma linha por campo, no formato exato "Campo: Valor"

   Por que isto existe no servidor, e nao no navegador: enviar e-mail exige uma
   credencial, e o repositorio e publico. Aqui a credencial fica em variavel de
   ambiente do Azure e nunca sai do servidor.

   Variaveis de ambiente necessarias (Azure > site-asscont > Configuracao):
     TENANT_ID       ID do diretorio (locatario) do Entra
     CLIENT_ID       ID do aplicativo asscont-site-newsletter
     CLIENT_SECRET   segredo do cliente do mesmo aplicativo
     REMETENTE       contato@asscont.com.br
     DESTINO_ZENVIA  o endereco @leads.zenvia.com gerado no painel da Zenvia
   ========================================================================== */

const ASSUNTO_ZENVIA = 'Zenvia \u2013 Standard Email';

const OBRIGATORIAS = ['TENANT_ID', 'CLIENT_ID', 'CLIENT_SECRET', 'REMETENTE', 'DESTINO_ZENVIA'];

/* Validacao proposital simples: regex elaborada de e-mail rejeita endereco
   valido e nao pega o invalido que importa. Quem valida de verdade e a
   entrega. */
function emailValido(email) {
  const limpo = String(email || '').trim();
  return limpo.length >= 6 && limpo.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(limpo);
}

/* Freio simples por IP, na memoria da instancia. Nao substitui captcha: a
   instancia e efemera e o contador zera quando ela recicla. Serve para conter
   repeticao acidental e envio em rajada de um mesmo lugar. */
const vistos = new Map();
const JANELA_MS = 60_000;
const MAXIMO_POR_JANELA = 5;

function excedeuLimite(ip) {
  const agora = Date.now();
  const registros = (vistos.get(ip) || []).filter((t) => agora - t < JANELA_MS);
  registros.push(agora);
  vistos.set(ip, registros);
  if (vistos.size > 5000) vistos.clear(); // teto de memoria
  return registros.length > MAXIMO_POR_JANELA;
}

async function obterToken() {
  const url = `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`;
  const corpo = new URLSearchParams({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    scope: 'https://graph.microsoft.com/.default',
    grant_type: 'client_credentials',
  });

  const resposta = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: corpo,
  });

  if (!resposta.ok) {
    throw new Error(`Falha ao obter token (${resposta.status}): ${await resposta.text()}`);
  }

  return (await resposta.json()).access_token;
}

async function enviarParaZenvia(token, email) {
  const remetente = encodeURIComponent(process.env.REMETENTE);
  const url = `https://graph.microsoft.com/v1.0/users/${remetente}/sendMail`;

  const mensagem = {
    message: {
      subject: ASSUNTO_ZENVIA,
      body: {
        contentType: 'Text',
        content: [`E-mail: ${email}`, 'Origem: Site'].join('\r\n'),
      },
      toRecipients: [{ emailAddress: { address: process.env.DESTINO_ZENVIA } }],
    },
    saveToSentItems: false,
  };

  const resposta = await fetch(url, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(mensagem),
  });

  if (!resposta.ok) {
    throw new Error(`Graph recusou o envio (${resposta.status}): ${await resposta.text()}`);
  }
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

  const faltando = OBRIGATORIAS.filter((v) => !process.env[v]);
  if (faltando.length) {
    context.log.error(`Variaveis de ambiente ausentes: ${faltando.join(', ')}`);
    return responder(500, { erro: 'nao-configurado' });
  }

  const email = String(req.body?.email || '').trim();
  if (!emailValido(email)) return responder(400, { erro: 'email-invalido' });

  const ip =
    (req.headers['x-forwarded-for'] || '').split(',')[0].trim() || 'desconhecido';
  if (excedeuLimite(ip)) return responder(429, { erro: 'muitas-tentativas' });

  try {
    await enviarParaZenvia(await obterToken(), email);
    /* O e-mail nao vai para o log: e dado pessoal e log e mais um lugar onde
       ele passaria a existir. */
    context.log('Inscricao encaminhada a Zenvia.');
    return responder(200, { ok: true });
  } catch (erro) {
    context.log.error('Falha ao encaminhar inscricao:', erro.message);
    return responder(502, { erro: 'falha-no-envio' });
  }
};
