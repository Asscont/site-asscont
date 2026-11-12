# Asscont — status do site

## Telas prontas
- **Início** (`src/pages/TelaInicio.tsx`) — hero, Quem Somos, carrossel ampliado de clientes, diferenciais, parcerias internacionais, LinkedIn, publicações, contato e mapa.
- **Serviços** (`src/pages/TelaServicos.tsx`) — hero, setores, “O que oferecemos”, faixas de serviço, depoimentos, FAQ, CTA, newsletter e rodapé.
- **Quem Somos** (`src/pages/TelaQuemSomos.tsx`) — banner, certificações interativas, pilares, propósito, histórico, indicadores, parcerias, apoio social, parceiros e clientes.
- **Publicações** (`src/pages/TelaBlog.tsx`) — listagem e leitura individual dos três conteúdos disponíveis no layout.

## Componentes e dados compartilhados
- `components/SiteChrome.tsx` — header, newsletter e rodapé.
- `components/Carousel.tsx` — carrossel responsivo com setas, indicadores e autoplay.
- `components/ScrollReveal.tsx` — animação de entrada com `IntersectionObserver` e respeito a `prefers-reduced-motion`.
- `data/clientes.ts` — logos reais extraídos do pacote enviado.
- `data/publicacoes.ts` — conteúdo compartilhado entre Home e Publicações.

## Rotas
- `#/inicio`
- `#/servicos`
- `#/quem-somos`
- `#/publicacoes`
- `#/publicacoes/<slug>`
- `#/blog` (atalho para Publicações)
- `#/contato` (abre a Home e rola até a seção de contato)

## Ajustes concluídos nesta etapa
1. Selos PQEC/ABNT extraídos da planilha e associados às descrições corretas em modais clicáveis.
2. Logos de clientes extraídos, recortados e organizados em carrosséis na Home e em Quem Somos.
3. Página de Publicações criada, com links “Ler mais” funcionais.
4. URL do LinkedIn atualizada para o perfil informado.
5. Overflow da imagem da seção IECnet corrigido.
6. Animações de entrada adicionadas a blocos relevantes.
7. Roteamento por hash expandido sem adicionar `react-router`.

## Pendências que exigem decisão/conteúdo
1. **FAQ da tela Serviços** — perguntas 2 a 5 e parte da copy seguem como no material atual; revisar texto final antes da publicação.
2. **Mapa** — continua sendo a imagem do layout com link para Google Maps; pode ser substituído por embed/iframe.
3. **Newsletter** — interface pronta, mas sem integração de backend. Credenciais não foram embutidas no front-end por segurança.
4. **Facebook/Twitter e Termos/Privacidade** — ainda precisam das URLs ou páginas definitivas.
5. Fazer conferência visual final em navegador contra o Figma/PDF no ambiente local.

## Robô do LinkedIn (12/11/2026)
A aba LinkedIn de "Nas nossas redes" passou a ser atualizada por um robô diário
no GitHub Actions. Detalhes, erros e **renovação do token**:
`frontend/scripts/linkedin/LEIAME.md`.

- **Criado:** `.github/workflows/linkedin-posts.yml`, `frontend/scripts/linkedin/`
  (script, dependência e LEIAME), `frontend/src/data/linkedinPosts.json` e as
  imagens em `frontend/public/linkedin/`. Os 3 posts fixos foram movidos para
  esse formato, com os textos alternativos em pt/en/es.
- **Alterado:** o workflow do Azure ganhou o gatilho `workflow_dispatch`, que o
  robô usa para publicar o site depois do commit dele.
- **Removido:** a função `api/linkedin` (busca ao vivo), `api/ferramentas/linkedin-autorizar.mjs`
  e `frontend/src/services/linkedin.ts`.
- **Falta:**
  1. Rodar o workflow pela primeira vez à mão (Actions → LinkedIn - posts da
     Início → Run workflow) e conferir o site publicado.
  2. Apagar no Azure (site-asscont → Variáveis de ambiente) as configurações da
     função antiga, se existirem: `LINKEDIN_ORG_ID`, `LINKEDIN_CLIENT_ID`,
     `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REFRESH_TOKEN`, `LINKEDIN_ACCESS_TOKEN`,
     `LINKEDIN_VERSION`.
  3. Renovar o `LINKEDIN_TOKEN` antes de **11/01/2027**.
