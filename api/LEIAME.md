# Newsletter: do formulário até a Zenvia

## O caminho

```
rodapé do site  →  POST /api/newsletter  →  POST api.zenvia.com/v2/contacts
                   (Managed Function)        X-API-TOKEN
                                                    ↓
                                        contato criado na base da Zenvia
```

A função existe porque o token da Zenvia dá acesso à base de contatos inteira.
No navegador ele ficaria visível no código publicado — e o repositório é
público.

## Por que API e não e-mail

O primeiro caminho previsto era a "Fonte de leads via e-mail" da Zenvia. Ele
foi abandonado porque dependia de três coisas frágeis: uma permissão
`Mail.Send` ampla no Microsoft 365, um segredo no Entra que expira, e a Zenvia
interpretar corretamente o corpo da mensagem — com o risco de o site dizer
"cadastrado" e o contato nunca aparecer.

A API troca tudo isso por um token e uma resposta que diz na hora se deu certo.
**Não é mais necessário** o segredo do Entra, a permissão `Mail.Send` nem o
comando de PowerShell no Exchange.

## O que falta fazer

### 1. Criar a lista de contatos

Painel da Zenvia → **Contatos → Listas de contatos**. Criar uma lista para as
inscrições do site, algo como "Newsletter site".

Anotar o **ID** da lista. Se não aparecer na interface, dá para descobrir com:

```
curl -H "X-API-TOKEN: <token>" https://api.zenvia.com/v2/contact-lists
```

Este passo é opcional: sem `ZENVIA_LIST_ID` o contato entra na base sem lista,
e a função continua funcionando.

### 2. Gerar o token da API

Painel da Zenvia → botão **"Gerar Token API"**, na tela inicial.

O token dá acesso de leitura e escrita à base de contatos. Não pode ser
commitado, colado em conversa nem enviado por e-mail.

### 3. Configurar as variáveis no Azure

Portal → `site-asscont` → **Variáveis de ambiente** → adicionar:

| Nome | Valor |
|---|---|
| `ZENVIA_TOKEN` | o token do passo 2 |
| `ZENVIA_LIST_ID` | o ID da lista do passo 1 (pode ficar de fora) |

Salvar. O app reinicia sozinho, uns dois minutos.

### 4. Testar de verdade

Abrir `https://www.asscont.com.br`, preencher o rodapé com um e-mail real,
marcar o aceite e enviar. Deve aparecer "Pronto! Seu e-mail foi cadastrado."

**E conferir na Zenvia**, em Contatos → Base de contatos, se o contato apareceu.

## Como diagnosticar

| Resposta | Significa |
|---|---|
| `200 {ok:true}` | contato criado, ou já existia |
| `400 email-invalido` | endereço malformado |
| `429 muitas-tentativas` | mais de 5 envios do mesmo IP em 1 minuto |
| `500 nao-configurado` | falta `ZENVIA_TOKEN` (passo 3) |
| `502 falha-no-envio` | Zenvia recusou: token inválido, lista inexistente, cota |

O motivo real vai para o log da função, no Azure — incluindo a resposta da
Zenvia, que é onde está a explicação quando dá 502.

**O e-mail da pessoa não é registrado em log.** É dado pessoal, e log seria
mais um lugar onde ele passaria a existir.

## Dois pontos a verificar no primeiro teste real

**Contato repetido.** Quem se inscreve duas vezes não deve ver erro — já está
na lista, que era o objetivo. A Zenvia não documenta qual código ela devolve
nesse caso, então a função detecta pelo texto da resposta (`exist` ou
`duplicat`). Se ao inscrever o mesmo e-mail duas vezes aparecer mensagem de
falha, é só ajustar a função `jaExiste` com o código real, que estará no log.

**Descadastro.** A Política de Privacidade declara que existe link de
descadastro nas mensagens. Isso é configuração do disparo na Zenvia, não do
site — vale confirmar com quem cuida das campanhas.

## O que esta função NÃO tem

Não tem captcha. O freio por IP (5 por minuto) mora na memória da instância,
que é efêmera — contém repetição acidental, mas não segura alguém determinado a
poluir a lista. Se isso acontecer, o Turnstile do Cloudflare é gratuito e o
Cloudflare já está no caminho do site.
