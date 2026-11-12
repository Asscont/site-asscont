# Robô do LinkedIn: posts recentes na Início

Mantém a aba **LinkedIn** de "Nas nossas redes" (página inicial) com os posts
mais recentes da página da ASSCONT (`urn:li:organization:24990701`).

## Como funciona

```
GitHub Actions, todo dia às 07:00 (Brasília)
  └─ frontend/scripts/linkedin/atualizar.mjs
       1. pede ao LinkedIn os 20 posts mais recentes da página
       2. fica com os 6 mais recentes que são públicos e têm imagem
       3. nenhum é novo?  → para, sem commit
       4. tem post novo?  → baixa as imagens, converte para .webp,
                            apaga as que saíram, grava o JSON
  └─ commit "LinkedIn: posts recentes na Início (robô diário)"
  └─ aciona o workflow do Azure, que publica o site de novo
```

**Por que o robô aciona o Azure à mão:** um commit feito pelo robô (com o
`GITHUB_TOKEN`) não dispara outros workflows. O GitHub bloqueia isso para
evitar robôs em loop. O acionamento por `workflow_dispatch` é a exceção
permitida. Por isso o workflow do Azure ganhou esse gatilho.

**Por que as imagens são baixadas:** o link de imagem que o LinkedIn entrega
expira em cerca de 7 dias. Guardadas no próprio site, elas não quebram.

## Onde está cada coisa

| O quê | Onde |
|---|---|
| Workflow do robô | `.github/workflows/linkedin-posts.yml` |
| Script | `frontend/scripts/linkedin/atualizar.mjs` |
| Dependência (conversor de imagens `sharp`) | `frontend/scripts/linkedin/package.json` |
| Dados que a página lê | `frontend/src/data/linkedinPosts.json` |
| Imagens | `frontend/public/linkedin/<número do post>.webp` (no site: `/linkedin/...`) |
| Cartões | `frontend/src/pages/TelaInicio.tsx`, aba LinkedIn |
| Texto alternativo automático | `postsLinkedinAltModelo` em `src/i18n/textos/{pt,en,es}.ts` |
| Segredo | GitHub → Settings → Secrets and variables → Actions → `LINKEDIN_TOKEN` |

## Regras do robô

- **Quantos posts:** 6. O carrossel mostra 3 por vez.
- **O que entra:** post de uma imagem; de várias imagens (vale a primeira);
  artigo com miniatura (vale a miniatura).
- **O que fica de fora:** vídeo, post só de texto, enquete e compartilhamento
  de post de outra página.
- **Quando faz commit:** só quando algum dos 6 mais recentes é novo. Um post
  apagado no LinkedIn, sozinho, não gera commit. Ele sai na próxima vez que
  houver post novo.
- **Permissões:** gravar no repositório e acionar workflows. Nada mais.
- **Token:** só é usado no cabeçalho das chamadas a `api.linkedin.com`. Não é
  impresso nem enviado ao servidor de imagens. O GitHub ainda esconde segredos
  nos logs como segunda proteção.

### Texto alternativo (pt, en, es)

Para cada cartão, a página escolhe, nesta ordem:

1. o texto escrito à mão em `alt` no JSON, no idioma da página;
2. em português, a legenda do post, se ele tiver uma;
3. o modelo traduzido: "Post da ASSCONT no LinkedIn de 10/11/2026" /
   "ASSCONT LinkedIn post from 11/10/2026" /
   "Publicación de ASSCONT en LinkedIn del 10/11/2026".

Para dar uma descrição melhor a um post, edite o JSON e acrescente ao post:

```json
"alt": { "pt": "...", "en": "...", "es": "..." }
```

O robô preserva esse campo enquanto o post estiver entre os 6.

## Quando dá erro

O workflow fica vermelho e o motivo aparece no resumo da execução. O site
continua com os últimos posts salvos.

| Mensagem | O que fazer |
|---|---|
| `token do LinkedIn expirado, gerar um novo` | Renovar o token (abaixo) |
| `segredo LINKEDIN_TOKEN não configurado no repositório` | Criar o segredo (abaixo, passos 4 a 6) |
| `LinkedIn respondeu 426` ou erro de versão | Trocar `VERSAO` em `atualizar.mjs` por um mês recente (o LinkedIn aposenta versões com cerca de um ano) |
| `LinkedIn respondeu 403` | Quem gerou o token deixou de ser administrador da página, ou o app perdeu o produto Community Management API |
| `nenhum post com imagem pôde ser baixado` | Problema passageiro do LinkedIn; rodar de novo mais tarde |

## Renovar o token (a cada 2 meses)

O token atual foi gerado em **12/11/2026** e vence por volta de **11/01/2027**.
Ponha um lembrete na agenda uma semana antes.

1. Entrar no LinkedIn com uma conta que seja **administradora da página** da
   ASSCONT.
2. Abrir o gerador de tokens do LinkedIn Developers
   (<https://www.linkedin.com/developers/tools/oauth/token-generator>) e
   escolher o mesmo app usado em 12/11/2026, o que tem o produto
   **Community Management API**.
3. Marcar **apenas** o escopo `r_organization_social`, autorizar e copiar o
   token gerado. Não colar em arquivo, e-mail nem chat.
4. No GitHub: repositório `Asscont/site-asscont` → **Settings** →
   **Secrets and variables** → **Actions**.
5. Em `LINKEDIN_TOKEN`, clicar no lápis (**Update**), colar o token novo e
   salvar.
6. Aba **Actions** → **LinkedIn - posts da Início** → **Run workflow** →
   **Run workflow**. Deve ficar verde. "Nenhum post novo" também é sucesso.
7. Atualizar as datas no começo desta seção e o lembrete na agenda.

## Agendamento pausado

Em repositório público, o GitHub **pausa os workflows agendados depois de 60
dias sem nenhum commit** no repositório e avisa por e-mail. Se isso
acontecer: aba **Actions** → **LinkedIn - posts da Início** →
**Enable workflow**.
