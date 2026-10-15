/* ==========================================================================
   Gera o LINKEDIN_REFRESH_TOKEN para a função /api/linkedin.

   Roda UMA vez, no computador de quem é administrador da página da ASSCONT
   no LinkedIn. Não faz parte do site e não é publicado como função.

   Uso (PowerShell, na pasta do repositório):

     $env:LINKEDIN_CLIENT_ID = "..."
     $env:LINKEDIN_CLIENT_SECRET = "..."
     node api/ferramentas/linkedin-autorizar.mjs

   O script abre o login do LinkedIn no navegador. Depois de autorizar, ele
   mostra o refresh token na tela. Cole esse valor direto no Azure, em
   LINKEDIN_REFRESH_TOKEN, e feche a janela. Não salve em arquivo nem mande
   por e-mail ou chat.

   Pré-requisito no app do LinkedIn Developers, aba Auth:
     Authorized redirect URL = http://localhost:8765/callback
   ========================================================================== */

import http from 'node:http';
import crypto from 'node:crypto';
import { exec } from 'node:child_process';

const ID = process.env.LINKEDIN_CLIENT_ID;
const SEGREDO = process.env.LINKEDIN_CLIENT_SECRET;
const PORTA = 8765;
const RETORNO = `http://localhost:${PORTA}/callback`;
const ESCOPOS = 'r_organization_social';

if (!ID || !SEGREDO) {
  console.error('Defina LINKEDIN_CLIENT_ID e LINKEDIN_CLIENT_SECRET antes de rodar.');
  process.exit(1);
}

const estado = crypto.randomBytes(16).toString('hex');
const login =
  'https://www.linkedin.com/oauth/v2/authorization?' +
  new URLSearchParams({ response_type: 'code', client_id: ID, redirect_uri: RETORNO, state: estado, scope: ESCOPOS });

const servidor = http.createServer(async (req, res) => {
  const url = new URL(req.url, RETORNO);
  if (url.pathname !== '/callback') return res.end();

  const fim = (msg) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<p style="font:16px sans-serif">${msg}</p>`);
    servidor.close();
  };

  if (url.searchParams.get('state') !== estado) return fim('Estado inválido. Rode o script de novo.');
  if (url.searchParams.get('error')) return fim(`O LinkedIn recusou: ${url.searchParams.get('error_description')}`);

  const r = await fetch('https://www.linkedin.com/oauth/v2/accessToken', {
    method: 'POST',
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code: url.searchParams.get('code'),
      redirect_uri: RETORNO,
      client_id: ID,
      client_secret: SEGREDO,
    }),
  });
  const j = await r.json();
  if (!r.ok) {
    console.error('Falhou ao trocar o código:', j);
    return fim('Falhou. Veja a mensagem no terminal.');
  }

  console.log('\nAutorizado. Escopos concedidos:', j.scope);
  if (j.refresh_token) {
    const dias = Math.round(j.refresh_token_expires_in / 86400);
    console.log(`\nLINKEDIN_REFRESH_TOKEN (vale ${dias} dias):\n\n${j.refresh_token}\n`);
  } else {
    const dias = Math.round(j.expires_in / 86400);
    console.log('\nO LinkedIn não devolveu refresh token para este app.');
    console.log(`Use então LINKEDIN_ACCESS_TOKEN (vale ${dias} dias e precisa ser gerado de novo depois):\n\n${j.access_token}\n`);
  }
  fim('Pronto. Volte ao terminal e copie o token para o Azure.');
});

servidor.listen(PORTA, () => {
  console.log('Abrindo o login do LinkedIn. Se o navegador não abrir, acesse:\n' + login);
  const abrir = process.platform === 'win32' ? `start "" "${login}"` : `open "${login}" || xdg-open "${login}"`;
  exec(abrir);
});
