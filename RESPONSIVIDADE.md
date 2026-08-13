# ASSCONT — Revisão estrutural de responsividade e padronização

Documento de entrega. Nenhum texto, imagem, link, cor de identidade ou
funcionalidade foi alterado: o trabalho foi exclusivamente estrutural.

---

## 1. Causas raiz encontradas e eliminadas

### 1.1 `index.css` era o template do Vite, não um CSS de projeto
- `:root { font: 18px/145% }` impunha 18px como base.
- `h1 { font-size: 56px }` e `h2 { font-size: 24px }` globais vazavam para
  todas as telas, que então se sobrescreviam mutuamente.
- **Bloco `@media (prefers-color-scheme: dark)` redefinia `--text`, `--bg`,
  `--border` e pintava o `:root`.** Esta era a origem dos relatos de
  "cores que desaparecem": em aparelho com tema escuro o fundo do
  documento virava `#16171d` e aparecia em qualquer área não pintada.
- Regras órfãs (`.hero`, `#next-steps`, `#docs`, `.counter`, `.ticks`).

### 1.2 Dois cianos de marca convivendo
`#19bae6` (Início, Serviços, Trabalhe Conosco) contra `#00b3e3`
(Quem Somos, Publicações). A amostragem de pixels do `imgLogoAsscont.png`
e os comentários "paleta extraída do Figma" no CSS confirmam `#19bae6`
como ciano da identidade. Unificado. Os cianos escuros de leitura
(`#00a8d3`, `#008eb7`) foram preservados como tokens, pois cumprem outro
papel (contraste de texto sobre branco).

### 1.3 Quem Somos era um decalque de coordenadas de PDF
34 `position:absolute`, alturas de seção travadas (549 / 680 / 987 / 401 /
264 / 603 px) e elementos em `left: max(88px, calc(50% - 552px))`.
A `.tqs-pdf-timeline` tinha `width: 1165px` fixa (1080px no breakpoint de
1100): **entre ~860px e ~1100px de viewport isso estourava a tela, e o
estouro estava sendo escondido pelo `overflow-x: hidden` da raiz.**

### 1.4 Chrome global sobrescrito por página
Quem Somos redefinia altura (85 vs 78px), cor (`#000` vs `#191919`), logo
(143 vs 166px), fonte da navegação (18 vs 15px) e container (1280 vs
1240px) — daí o deslocamento horizontal do header entre páginas. Havia
`!important` no rodapé para vencer a própria cascata. Todos os overrides
foram removidos: o chrome agora é único.

### 1.5 Outros
- 83 larguras e 73 alturas fixas em px.
- 9 breakpoints conflitantes.
- Pesos tipográficos inexistentes: `font-weight: 750` e Montserrat 500
  usado sem estar carregado (bold sintético).
- `.tin-post img` com `height: 100%` e `aspect-ratio` em conflito.
- Texto de depoimento a `10.6px`.
- Regra morta `.tin-parceria-selos { right: -104px }`.

---

## 2. Bugs corrigidos durante a validação visual

1. **Fotos do Apoio Social invisíveis.** A centralização vertical usava a
   propriedade `translate` — a mesma que a animação `.tqs-reveal`
   controla. Ao ficar visível, `translate: 0 0` anulava o `-50%`.
   Trocado para `transform: translateY(-50%)`.
2. **Palavras coladas no mobile** ("COMSOLUÇÕES", "EFICIÊNCIAOPERACIONAL",
   "aexcelência"). Bug **pré-existente**: o JSX colapsa o espaço que
   antecede um `<br />`, então ocultá-lo no mobile grudava as palavras.
   Corrigido com espaço explícito nos 31 `<br />` de Quem Somos —
   invisível no desktop.
3. **Estouro de 12px a 320px na newsletter.** `flex-wrap: wrap` combinado
   com `flex-direction: column` criava múltiplas colunas flex e impedia o
   formulário de encolher.

---

## 3. Arquivos

### Alterados (16)
```
index.html
src/App.tsx                        (só a remoção do import de App.css)
src/index.css                      107 -> 253 linhas (tokens + reset)
src/components/SiteChrome.css      368 -> 416
src/components/SiteChrome.tsx      menu acessível
src/components/Carousel.css        121 -> 121
src/components/Carousel.tsx        breakpoints, swipe, inert
src/pages/TelaInicio.css          1257 -> 1169
src/pages/TelaInicio.tsx           atributos de imagem
src/pages/TelaServicos.css         585 -> 555
src/pages/TelaServicos.tsx         atributos de imagem
src/pages/TelaQuemSomos.css       1932 -> 1266
src/pages/TelaQuemSomos.tsx        reestruturação em fluxo
src/pages/TelaBlog.css             247 -> 265
src/pages/TelaBlog.tsx             atributos de imagem
src/pages/TelaTrabalheConosco.css  542 -> 501
src/pages/TelaTrabalheConosco.tsx  atributos de imagem
```

### Novos
Nenhum.

### Removidos (1)
`src/App.css` — CSS morto do template Vite (`.hero`, `#next-steps`,
`#docs`, `.counter`, `.ticks`), sem uso em nenhuma página e com `.hero` em
risco de colisão com futuras classes. Import removido de `App.tsx`.

---

## 4. Design tokens

Declarados em `src/index.css`, extraídos do próprio projeto — nenhum valor
inventado.

- **Cores**: ciano da marca e variações de leitura, escuros
  institucionais, painéis, superfícies, textos e bordas.
- **Tipografia**: `--asc-font-heading` (Montserrat) e `--asc-font-body`
  (Poppins), pesos 400/500/600/700/800 e uma escala fluida de 9 passos
  (`--asc-fs-display` a `--asc-fs-2xs`). O valor **máximo** de cada passo
  reproduz a medida do layout no desktop.
- **Container**: `--asc-container: 1120px`, `--asc-container-wide: 1240px`
  (header), `--asc-container-narrow: 860px` (leitura de artigo),
  `--asc-gutter: clamp(1rem, 3vw, 1.5rem)`.
- **Espaçamento**: escala de 8 passos + `--asc-section-y` para o ritmo
  vertical único entre seções.
- **Formas**: ângulos de skew da identidade centralizados.

Fundo full-width e contêiner de conteúdo são coisas distintas:
`.asc-section` ocupa 100%, `.asc-container` limita a leitura.

---

## 5. Breakpoints

De 9 conflitantes (1200/1100/1024/920/860/760/700/640/560) para **4
estruturais**:

| Largura | O que muda |
|---|---|
| 1200px | setas do carrossel entram no viewport |
| 1024px | grids de 2+ colunas colapsam; pilares empilham |
| 768px  | menu vira hambúrguer; composições sobrepostas viram fluxo vertical |
| 560px  | ajustes finais de mobile |

Entre eles o layout é contínuo: `clamp()`, `min()`, `max()`,
`aspect-ratio` e `repeat(auto-fit, minmax())`.

---

## 6. Imagens

Classificadas individualmente:

| Tipo | Tratamento |
|---|---|
| Logos (clientes, parceiros, selos, certificações) | `object-fit: contain` — nunca cortar |
| Artes de publicação (contêm texto) | `contain` + `aspect-ratio: 1299/731`; no herói do artigo, arte inteira sobre fundo desfocado |
| Posts de LinkedIn (1080×1350) | `aspect-ratio: 4/5` — proporção exata do arquivo, sem crop |
| Fotografia de composição | `cover` com `object-position` ajustado |
| Backgrounds de herói | `cover`, sem `lazy`, com `fetchpriority="high"` |

- `width`/`height` intrínsecos ou `aspect-ratio` em todas as imagens de
  conteúdo, para eliminar CLS.
- `loading="lazy"` + `decoding="async"` abaixo da dobra; heróis
  explicitamente **fora** do lazy para não prejudicar o LCP.
- Não foram gerados `srcset`/`<picture>`: **não existem assets em
  múltiplas resoluções no projeto**. Ver limitações.

---

## 7. Validação

Feita com Chromium headless real, não apenas por análise estática.

- **0 problemas em 102 combinações** — 6 páginas × 17 larguras
  (320, 360, 375, 390, 414, 480, 600, 768, 820, 1024, 1280, 1366, 1440,
  1536, 1600, 1920, 2560). Sem overflow horizontal, sem imagem
  distorcida, sem texto cortado por `overflow`.
- **Header, newsletter e rodapé idênticos** nas 5 páginas em 1440/1024/
  390px: mesma altura, cor, largura e posição da logo, fonte e container.
- `overflow-x: hidden` de raiz: **0 ocorrências**.
- `!important` de layout: **0** (restam 4 no bloco
  `prefers-reduced-motion`, que é o padrão recomendado).
- Dimensões travadas: de 156 declarações para **6**, todas de formas
  decorativas dentro de contêineres recortados.
- `npm run build`: sem erros.
- `npm run lint`: 1 aviso **pré-existente** em
  `scripts/download_assets.js`, arquivo não tocado.

---

## 8. Acessibilidade e movimento

- Menu mobile com `aria-controls`, `aria-expanded`, fecha com Escape e
  com clique fora; ícone real no lugar do caractere `☰`.
- `aria-current="page"` no item ativo da navegação.
- Slides ocultos do carrossel recebem `inert` (antes só `aria-hidden`,
  o que deixava links focáveis por teclado).
- Alvos de toque de 44px nos controles.
- `focus-visible` padronizado.
- Modais de certificação seguem acessíveis (`role="dialog"`,
  `aria-modal`, fecha com Escape).
- `prefers-reduced-motion` respeitado globalmente; as animações de
  entrada continuam existindo para quem não pediu redução.
- Suporte a arraste (swipe) nos carrosséis — o CSS não resolve isso.

---

## 9. Limitações

1. **Não tive acesso ao Figma.** A fonte de verdade usada foi o código
   existente, o PDF referenciado nos comentários do CSS e a amostragem de
   pixels dos assets. Os máximos dos `clamp()` reproduzem a medida de
   desktop original. A conferência final contra o Figma continua pendente.
2. **Sem assets em múltiplas resoluções**, `srcset`/`<picture>` não foram
   inventados. Fornecendo versões @2x, o `srcset` entra sem tocar no
   layout.
3. **`imgFotoIecnet.jpg` é retrato (648×864) num bloco largo** — há crop
   inevitável. `object-position: 50% 38%` preserva os rostos, mas uma
   versão em paisagem resolveria melhor.
4. **Contraste**: texto branco pequeno sobre o cinza `#a7aaaf` (apoio
   social, faixas institucionais) fica abaixo de WCAG AA. **Não foi
   alterado** por ser o design original — fica registrado para decisão.
5. O FAQ de Serviços continua com a copy em inglês/placeholder, como já
   estava. Fora do escopo desta revisão.
