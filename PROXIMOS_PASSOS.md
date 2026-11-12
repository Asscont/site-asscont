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
  1. ~~Rodar o workflow pela primeira vez à mão~~ — feito em 12/11/2026: trouxe
     6 posts, fez o commit e publicou no Azure sem erro.
  2. Apagar no Azure (site-asscont → Variáveis de ambiente) as configurações da
     função antiga, se existirem: `LINKEDIN_ORG_ID`, `LINKEDIN_CLIENT_ID`,
     `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REFRESH_TOKEN`, `LINKEDIN_ACCESS_TOKEN`,
     `LINKEDIN_VERSION`.
  3. Renovar o `LINKEDIN_TOKEN` antes de **11/01/2027**.

## Publicações: texto de artigo longo invisível (corrigido, PR #4, 12/11/2026)
O corpo dos artigos longos (IFRS 18; Reforma Tributária no celular) não
aparecia: o `ScrollReveal` só mostrava um bloco com 12% dele na tela, o que
nunca acontece num bloco mais alto que ~8 telas. Agora aparece quando o topo
entra na tela (`threshold: 0`), para qualquer altura. A página Quem Somos tem
uma cópia própria desse detector (`TelaQuemSomos.tsx`, 12%), mantida: os
blocos dela têm no máximo ~360px e não correm esse risco.

## Ajustes do Marketing (nov/2026)
- **Banner de 49 anos removido** da Início: slide, imagens (computador e
  celular), texto alternativo em pt/en/es, estilos e a cor `--asc-navy-49anos`.
  O carrossel passou a ter 4 slides.
- **Identidade nova da IECnet:**
  - Logo novo em `src/assets/logoIecnet.webp` (transparente, no slide da rede,
    sobre vidro translúcido) e `logoIecnetFundoBranco.webp` (na caixinha branca
    do bloco "Parcerias"). O `logoIecnet.png` antigo foi apagado.
  - Arte nova `src/assets/bannerIecnet.webp`: aparece **só no computador e só
    em português** (o texto dela é em português), cobrindo o slide da rede. No
    celular e em en/es fica o slide em HTML, traduzido, com o logo novo.
    Recurso novo no carrossel: campo `arte` em `HeroCarousel.tsx`.
  - O fundo antigo `imgFundoBannerRede.jpg` **continua em uso** (celular e
    en/es); não apagar.
- **Artigo novo em Publicações:** "NR-1: suspensão temporária de sanções pelo
  STF e orientações às empresas" (`/publicacoes/nr-1-suspensao-sancoes-stf`),
  categoria Trabalhista, capa `publicacaoNr1Stf.webp`, traduções em en/es em
  `blog.artigos`. A data (11/11/2026) está na primeira linha do texto, como no
  comunicado: a seção não tem campo de data.
- **Falta:**
  1. **Versão vertical da arte da IECnet**, pedida ao Marketing. Quando chegar,
     converter para .webp e usar no celular em português (hoje o celular mostra
     o slide em HTML). A arte de 49 anos usava 3:2 no celular.
  2. Ver no portal do Azure se a função `/api/vagas` responde: a pasta
     `api/vagas` não tem `function.json` no repositório, e sem ele o Azure
     provavelmente não reconhece a função (a página Trabalhe Conosco cai na
     lista fixa de vagas). Achado em 12/11, não corrigido.

## Artigos do LinkedIn em Publicações: manual, com alerta (decisão de 12/11/2026)
- **Por que manual:** os artigos da newsletter "Ponto Contábil" aparecem na API
  só como itens "reference" que apontam para `urn:li:linkedInArticle:...`, e a
  API não entrega o conteúdo (diagnósticos dos PRs #8 e #9: 400/404 ao abrir).
  Não haverá robô que copie artigos para Publicações.
- **Alerta:** o job diário do robô do LinkedIn abre uma **Issue** para cada
  artigo novo da página ("Novo artigo no LinkedIn em DD/MM/AAAA: incluir em
  Publicações"), com etiqueta `artigo-linkedin`, atribuída à conta Asscont,
  sem duplicatas e só para artigos publicados a partir de 12/11/2026 22:00 UTC.
  Detalhes em `frontend/scripts/linkedin/LEIAME.md`.
- **Ao incluir um artigo à mão:**
  - **Artigo que já existe em Publicações não entra de novo.** Conferir em
    `src/data/publicacoes.ts` pelo título (sem acentos, maiúsculas e
    pontuação) e pelo `slug`: os artigos publicados à mão não guardam o link
    original do LinkedIn.
  - Seguir o formato atual (`slug`, `titulo`, `resumo`, `texto`, `imagem`,
    `categoria`), o mais recente primeiro, com tradução em `en.ts` e `es.ts`.
  - Fechar a Issue depois de publicar.
- Artigos longos já aparecem normalmente (correção do PR #4).
- **Notificação:** a conta Asscont
  não "acompanha" o repositório; o aviso chega porque a Issue é atribuída a
  ela. Se o e-mail não chegar, conferir em github.com → Settings →
  Notifications se "Participating, @mentions and custom" está com e-mail
  ligado (não foi possível ler essa configuração pela API em 12/11/2026).
