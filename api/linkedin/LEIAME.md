# LinkedIn: posts recentes na Início

## O caminho

```
seção "LinkedIn" da Início  →  GET /api/linkedin  →  api.linkedin.com/rest/posts
                               (Managed Function)     (token da página)
```

A função busca os posts públicos mais recentes da página da ASSCONT que têm
imagem, guarda a lista por uma hora e devolve só o necessário: link, imagem,
texto curto e data.

**Enquanto nada disto estiver configurado, o site não muda:** a função responde
503 e a Início continua com os 3 posts fixos de `TelaInicio.tsx`. O mesmo vale
se o token vencer ou o LinkedIn sair do ar. A seção nunca fica vazia.

## O que falta fazer

### 1. Criar o app no LinkedIn Developers

Quem faz: alguém que seja **administrador da página** da ASSCONT no LinkedIn.

1. Entrar em <https://www.linkedin.com/developers/apps> → **Create app**.
2. Nome: algo como "Site ASSCONT". Página: **ASSCONT** (`/company/asscontpage`).
   Logo: o da ASSCONT.
3. O LinkedIn pede que um administrador da página **verifique** o app
   (aba **Settings → Verify**). Sem isso, a solicitação do passo 2 não anda.

### 2. Pedir o produto "Community Management API"

Aba **Products** → **Community Management API** → **Request access**.

O formulário pede o caso de uso. Seja direto e honesto, é isso que a análise
avalia. Sugestão:

> Exibir, no site institucional da ASSCONT (asscont.com.br), os posts públicos
> mais recentes da nossa própria página no LinkedIn. Uso somente leitura, das
> publicações da própria empresa, sem dados de membros. O acesso é feito pelo
> servidor do site, que guarda o resultado por uma hora.

A aprovação não tem prazo fixo. Enquanto isso, o site segue com os posts fixos.

**Atenção:** o LinkedIn costuma exigir que a Community Management API seja o
**único produto** do app. Se o app já tiver outro produto (como "Sign In with
LinkedIn"), crie um app separado só para isto.

### 3. Liberar o endereço de retorno

Aba **Auth** → **Authorized redirect URLs for your app** → adicionar:

```
http://localhost:8765/callback
```

Anotar, na mesma aba, o **Client ID** e o **Client Secret**.

### 4. Gerar o token (uma vez, depois da aprovação)

No computador de um administrador da página, na pasta do repositório:

```powershell
$env:LINKEDIN_CLIENT_ID = "<client id>"
$env:LINKEDIN_CLIENT_SECRET = "<client secret>"
node api/ferramentas/linkedin-autorizar.mjs
```

Abre o login do LinkedIn. Depois de autorizar, o terminal mostra o
**refresh token** (vale cerca de um ano) ou, se o LinkedIn não liberar refresh
para o app, um **access token** (vale cerca de 60 dias).

O token não pode ser commitado, colado em conversa nem mandado por e-mail. Vai
direto do terminal para o Azure.

### 5. Descobrir o número da página

Na página da ASSCONT, entrar como administrador. O endereço do painel de admin
tem o número: `linkedin.com/company/NNNNNNNN/admin/`. É o `LINKEDIN_ORG_ID`.

### 6. Configurar no Azure

Portal → `site-asscont` → **Variáveis de ambiente**:

| Nome | Valor |
|---|---|
| `LINKEDIN_ORG_ID` | o número do passo 5 |
| `LINKEDIN_CLIENT_ID` | do passo 3 |
| `LINKEDIN_CLIENT_SECRET` | do passo 3 |
| `LINKEDIN_REFRESH_TOKEN` | do passo 4 (ou `LINKEDIN_ACCESS_TOKEN`, se foi esse que saiu) |
| `LINKEDIN_VERSION` | opcional; versão da API no formato `AAAAMM` |

Salvar. Em uns dois minutos, abrir `https://www.asscont.com.br/api/linkedin`:
deve aparecer a lista de posts em JSON. Depois, a Início.

## Manutenção

| Situação | O que fazer |
|---|---|
| Refresh token perto de um ano | Rodar o passo 4 de novo e trocar no Azure |
| Usando access token | Rodar o passo 4 a cada ~60 dias |
| Log com `LinkedIn 426` ou erro de versão | Trocar `LINKEDIN_VERSION` por um mês recente (o LinkedIn aposenta versões com cerca de um ano) |
| Log com `LinkedIn 403` | O usuário que autorizou deixou de ser admin da página, ou o produto não está aprovado |

Em todos esses casos o site não quebra: volta para os posts fixos até ser
resolvido.

## O que esta função NÃO faz

Não publica nada, não lê comentários nem dados de quem curtiu. Posts só de
texto, sem imagem, ficam de fora, porque a seção da Início é feita de cards de
imagem.
