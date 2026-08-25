# Newsletter: do formulário até a Zenvia

## O caminho

```
rodapé do site  →  POST /api/newsletter  →  Microsoft Graph
                   (Managed Function)       envia de contato@asscont.com.br
                                                     ↓
                                        [conta]@leads.zenvia.com
                                                     ↓
                                        Zenvia cria o contato na base
```

A função existe porque enviar e-mail exige credencial, e o repositório é
público. A credencial fica em variável de ambiente do Azure e nunca sai do
servidor.

## O que falta fazer, em ordem

### 1. Ativar a pasta `api` no deploy

No arquivo `.github/workflows/azure-static-web-apps-green-glacier-058303010.yml`,
trocar:

```yaml
api_location: ""
```

por:

```yaml
api_location: "api"
```

Sem isso a função nem é publicada, e `/api/newsletter` responde 404.

### 2. Restringir a permissão `Mail.Send` — ANTES de criar o segredo

Hoje o aplicativo `asscont-site-newsletter` pode enviar e-mail em nome de
**qualquer** caixa do tenant (a tela do Entra dizia "Send mail as any user").
Com 140 usuários, isso é mais poder do que a função precisa.

O comando abaixo limita o aplicativo a **uma caixa só**. Quem executa é o
Bruno, ou a Inove, no Exchange Online:

```powershell
Connect-ExchangeOnline

# 1) grupo com a única caixa que o app pode usar
New-DistributionGroup -Name "SiteNewsletterRemetente" `
  -Type Security `
  -Members contato@asscont.com.br `
  -PrimarySmtpAddress site-newsletter-remetente@asscont.com.br

# 2) trava o app nesse grupo. Trocar <CLIENT_ID> pelo
#    "ID do aplicativo (cliente)" que aparece na visao geral do app no Entra.
New-ApplicationAccessPolicy `
  -AppId "<CLIENT_ID>" `
  -PolicyScopeGroupId site-newsletter-remetente@asscont.com.br `
  -AccessRight RestrictAccess `
  -Description "Site ASSCONT: envio da newsletter apenas por contato@asscont.com.br"

# 3) confere
Test-ApplicationAccessPolicy -Identity contato@asscont.com.br -AppId "<CLIENT_ID>"
```

O último comando deve responder `AccessCheckResult: Granted`. Testando com
outra caixa qualquer, deve responder `Denied` — é essa a prova de que a
restrição funcionou.

A política leva alguns minutos para valer.

### 3. Criar o endereço de leads na Zenvia

Painel da Zenvia: **Atendimento comercial > Integrações > + > Fonte de leads
via e-mail**. Guardar o endereço gerado, no formato
`[conta]-[id]-[palavras]@leads.zenvia.com`.

Esse endereço é secreto na prática: quem o tiver injeta contatos na base.

### 4. Criar o segredo do cliente

No Entra, aplicativo `asscont-site-newsletter` → **Certificados e segredos** →
**Novo segredo do cliente** → descrição `funcao-newsletter` → validade **24
meses**.

O valor aparece **uma única vez**. Copiar na hora.

> **ANOTAR A DATA DE VENCIMENTO** em algum lugar que alguém veja em 2028.
> Quando o segredo expira, a newsletter para de funcionar sem avisar nada.

### 5. Configurar as variáveis no Azure

Portal → `site-asscont` → **Configuração** (ou "Variáveis de ambiente") →
adicionar uma por uma:

| Nome | Valor |
|---|---|
| `TENANT_ID` | `9f9b081b-adb6-4a15-b05f-8809b89dd6f0` |
| `CLIENT_ID` | ID do aplicativo, na visão geral do app no Entra |
| `CLIENT_SECRET` | o segredo criado no passo 4 |
| `REMETENTE` | `contato@asscont.com.br` |
| `DESTINO_ZENVIA` | o endereço `@leads.zenvia.com` do passo 3 |

Salvar. O Static Web App reinicia sozinho.

### 6. Testar de verdade

Abrir `https://www.asscont.com.br`, preencher o rodapé com um e-mail real,
marcar o aceite e enviar. Deve aparecer "Pronto! Seu e-mail foi cadastrado."

**E então conferir na Zenvia** se o contato apareceu na base, com o endereço no
campo certo e "Site" na origem. É o único teste que vale: a mensagem de sucesso
diz que o Graph aceitou enviar, não que a Zenvia entendeu o formato.

Se o site disser sucesso e o contato não aparecer, o problema está na leitura
do Formato Padrão pela Zenvia. Nesse caso, olhar a caixa de
`contato@asscont.com.br` — o item Enviados está desligado (`saveToSentItems:
false`), mas uma devolução de entrega chegaria na Entrada.

## Como diagnosticar

A função devolve códigos distintos de propósito:

| Resposta | Significa |
|---|---|
| `200 {ok:true}` | Graph aceitou o envio |
| `400 email-invalido` | endereço malformado |
| `429 muitas-tentativas` | mais de 5 envios do mesmo IP em 1 minuto |
| `500 nao-configurado` | falta variável de ambiente (passo 5) |
| `502 falha-no-envio` | Graph recusou: segredo expirado, permissão, política |

Os detalhes de erro vão para o log da função, no Azure. **O e-mail da pessoa
não é registrado em log** — é dado pessoal, e log seria mais um lugar onde ele
passaria a existir.

## O que esta função NÃO tem

Não tem captcha. O freio por IP (5 por minuto) mora na memória da instância,
que é efêmera — contém repetição acidental e rajada de um mesmo lugar, mas não
segura alguém determinado a poluir a lista. Se isso acontecer, o caminho é
Turnstile do Cloudflare, que é gratuito e já está no ambiente.
