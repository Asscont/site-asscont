# Migração do GitHub Pages para o Azure Static Web Apps

## O que muda

| | GitHub Pages (hoje) | Azure SWA |
|---|---|---|
| endereço | `asscont.github.io/site-asscont/` | domínio próprio |
| caminho base | `/site-asscont/` | `/` |
| URLs | `/#/servicos` | `/servicos` |
| HTTPS | do github.io | automático, no domínio próprio |
| backend | não tem | Managed Functions (`/api/*`) |
| pré-visualização | não tem | endereço por pull request |

## Ordem sugerida

1. **Criar o Static Web App no portal**, plano gratuito, ligando ao repositório
   `Asscont/site-asscont`. O Azure cria sozinho um workflow em
   `.github/workflows/azure-static-web-apps-*.yml` e guarda o token de deploy
   como segredo do repositório. **Deixar o Azure criar** — escrever o workflow
   à mão dá errado, porque o nome do segredo é gerado na hora.

   Valores a informar na tela de criação:
   - App location: `frontend`
   - Api location: (vazio por enquanto; será `api` quando a Zenvia entrar)
   - Output location: `dist`

2. ~~**Trocar o `base` do Vite.**~~ **FEITO** — `vite.config.ts` agora usa `/`.

3. ~~**Trocar o roteamento por hash por URLs limpas.**~~ **FEITO** — ver
   `frontend/src/i18n/rotas.ts` e o `LEIAME.md` da pasta `i18n`.

4. **Apontar o DNS.** Criar `novo.asscont.com.br` como CNAME para o endereço
   `*.azurestaticapps.net` que o Azure fornece, validar no portal e esperar a
   emissão do certificado. O site atual continua no ar durante todo o processo.

5. ~~**Remover o `noindex`.**~~ **FEITO** — `index.html` sem a meta robots e
   `public/robots.txt` com `Allow: /`.

6. ~~**Desligar o deploy antigo.**~~ **FEITO** — o gatilho `push` de
   `.github/workflows/deploy.yml` está comentado. O arquivo foi mantido para
   permitir voltar ao GitHub Pages em emergência, mas atenção: as URLs limpas
   não funcionam lá.

## Ordem da virada de DNS (Cloudflare)

O TXT de validação (`_dnsauth` em `www`) já está criado e visível.

1. Esperar o Azure sair de "Validando" e **emitir o certificado**. Não seguir
   antes disso: sem certificado, quem acessar vê aviso de conexão insegura.
2. Editar o CNAME **`www`**: destino passa a ser
   `green-glacier-058303010.7.azurestaticapps.net`, proxy **cinza (DNS only)`.
   Valor anterior, para voltar atrás: CNAME para `asscont.com.br`, proxy laranja.
3. Adicionar `asscont.com.br` (raiz) nos domínios personalizados do Azure e
   ajustar o registro **A** conforme ele indicar. Valor anterior:
   A `216.172.172.239`, proxy laranja.
4. **NÃO TOCAR:** os três MX, os TXT (SPF, `MS=`, verificações Google e
   LinkedIn), os quatro `_domainkey` do SendGrid, `autodiscover`,
   `enterpriseenrollment` e `enterpriseregistration`. Mexer nos MX ou no SPF
   derruba o e-mail de 140 pessoas.
5. Esperar de 3 a 7 dias com o site novo no ar **antes** de pedir o
   cancelamento do HostGator. Enquanto ele existir, voltar atrás é mudar um
   registro; cancelado, não há volta.

## Sobre o staticwebapp.config.json

Fica em `frontend/public/`, e não na raiz do repositório, porque o Vite copia
o conteúdo de `public/` para `dist/` sem alterar nada — e o Azure procura o
arquivo na pasta publicada.

O `navigationFallback` é o que faz URL limpa funcionar: qualquer endereço que
não seja um arquivo existente devolve o `index.html`, e o roteamento acontece
no navegador. É exatamente o que o GitHub Pages não sabe fazer, e o motivo de
o site usar `#` hoje.

O `cache-control` de um ano em `/assets/*` é seguro porque o Vite põe um hash
no nome de cada arquivo gerado; quando o conteúdo muda, o nome muda junto. O
`index.html` fica sem cache, senão o visitante continuaria recebendo a versão
antiga.

## Roteamento: o que mudou (já aplicado)

São 20 links internos e 3 pontos que leem a rota:

- `src/App.tsx` — lê `window.location.hash`; passa a ler `window.location.pathname`
  e a escutar `popstate` em vez de `hashchange`
- `src/components/SiteChrome.tsx` — 11 links
- `src/pages/TelaInicio.tsx` — 3 links
- `src/pages/TelaServicos.tsx` — 3 links
- `src/pages/TelaBlog.tsx` — 2 links
- `src/pages/TelaTrabalheConosco.tsx` — 1 link

As âncoras dentro de uma página ficam mais simples: `#/servicos#auditoria`
vira `/servicos#auditoria`, que é o comportamento normal do navegador.

**Links já divulgados com `#` deixam de funcionar.** Se houver algum em
material impresso, e-mail ou rede social, é possível criar uma regra de
redirecionamento no `staticwebapp.config.json` — mas só funciona para o que
vem antes do `#`, porque o navegador não envia a parte do hash ao servidor.
Ou seja: `/#/servicos` cairia na Home, não em Serviços.

## Idioma na URL: decidido

`/en/servicos` e `/es/servicos`, com o português na raiz. O idioma vem do
caminho e nada mais — sem preferência salva, sem detecção automática. Um link
compartilhado abre no idioma em que foi compartilhado.

Sumiu o `?lang=`. Endereços antigos com `?lang=en` passam a abrir em português;
como o site ainda não foi divulgado, isso não afeta ninguém.

## Página 404

Hoje qualquer rota desconhecida cai na Home, sem avisar nada. Com URL limpa
isso fica mais visível, porque erro de digitação no endereço passa a ser
comum. Vale uma tela de 404 de verdade antes da virada.
