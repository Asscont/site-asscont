# ASSCONT — Padrão de escala

Documento normativo. Vale para todas as telas: Início, Quem Somos,
Serviços, Publicações, Trabalhe Conosco, e para o header, o rodapé, a
newsletter e o carrossel.

---

## 1. O problema que este padrão resolve

O Figma foi desenhado num frame de **1280px**. Um site não tem 1280px:
tem a largura do monitor de quem abriu.

Medição dos três PDFs aprovados (`TELA INICIO`, `TELA_QUEM_SOMOS`,
`TELA_SERVIÇOS`): em todas as telas o conteúdo começa em `x=80` e termina
em `x=1200`. São **1120px de conteúdo, 87,5% da largura do frame**.

O código anterior gravava esse valor em pixels (`--asc-container: 1120px`).
Num monitor de 1920px, 1120px viram **58% da tela** — daí as margens
laterais enormes e a sensação de layout ilhado.

Havia um segundo efeito, mais difícil de ver e mais destrutivo. Cada
tamanho de fonte era um `clamp(mínimo, rem + vw, máximo)` com coeficiente
próprio. Consequência: acima de ~1470px cada elemento crescia numa
velocidade diferente. O texto pequeno praticamente parava; o título grande
continuava subindo. **A proporção não se perdia de uma vez — ela se
desfazia progressivamente conforme a tela aumentava.**

---

## 2. A regra

> Toda medida do site é escrita em `rem`, e o tamanho do `rem` cresce
> junto com a tela. Um único número governa o site inteiro.

```css
/* tokens.css */
html { font-size: clamp(1rem, 1.25vw, 1.5rem); }
```

`1.25vw` dá exatamente 16px em 1280px — a largura do frame do Figma.

| largura da tela | 1 rem | o site está |
| --- | --- | --- |
| ≤ 1280px | 16px | 1,00× — idêntico ao Figma |
| 1440px | 18px | 1,13× |
| 1600px | 20px | 1,25× |
| ≥ 1920px | 24px | 1,50× — Figma ampliado |

Em 1920px o conteúdo volta a ocupar os mesmos **87,5%** da tela que ocupa
no Figma, e o texto de 20px do Figma aparece com 30px. A proporção é
idêntica em qualquer monitor; muda só o tamanho físico.

**Para deixar o site inteiro maior ou menor, mexa no `1.5rem` acima.**
Em nenhum componente.

Acessibilidade: os dois limites do `clamp` estão em `rem`, então quem
aumenta a fonte padrão do navegador continua sendo respeitado.

---

## 3. Como ler os tokens

`1.25rem` significa **"20px no Figma"**. Sempre. Em 1920px isso vira 30px
porque a tela inteira cresceu 1,5× junto — não porque alguém escolheu 30.

| token | rem | Figma | papel |
| --- | --- | --- | --- |
| `--asc-fs-2xs` | 0,6875 | 11 | rótulo micro |
| `--asc-fs-xs` | 0,75 | 12 | legenda, depoimento |
| `--asc-fs-sm` | 0,8125 | 13 | texto denso |
| `--asc-fs-body` | 0,9375 | 15 | corpo, rodapé |
| `--asc-fs-lead` | 1,125 | 18 | texto de destaque |
| `--asc-fs-md` | 1,25 | 20 | **degrau mais frequente do Figma** |
| `--asc-fs-h5` | 1,375 | 22 | título de cartão |
| `--asc-fs-h4` | 1,625 | 26 | título de bloco pequeno |
| `--asc-fs-h3` | 1,875 | 30 | nome de serviço |
| `--asc-fs-h2` | 2,1875 | 35 | título de seção |
| `--asc-fs-h1` | 2,625 | 42 | título de seção grande |
| `--asc-fs-banner` | 3,125 | 50 | banner de página |
| `--asc-fs-faq` | 6,1875 | 99 | a palavra "FAQ" |

Containers: `--asc-container` 70rem (1120), `--asc-container-wide`
77,5rem (1240), `--asc-container-narrow` 53,75rem (860).

---

## 4. Telas estreitas

Acima de 1280px o site cresce sozinho. Abaixo de 1024px ele precisa do
movimento contrário: um título de 42px não cabe num celular de 375px, por
mais correto que seja no Figma.

Isso acontece num **único bloco** no fim do `tokens.css`. Nenhuma página
redefine tamanho de fonte ou respiro dentro de media query. Para o site
inteiro ficar mais compacto no celular, mexa ali.

Os degraus pequenos (`body`, `sm`, `xs`, `2xs`) atravessam inalterados: em
15px ou menos, encolher de novo prejudicaria a leitura.

---

## 5. O que o stylelint barra

O commit é bloqueado se um CSS de componente ou página contiver:

- **`px` acima de 3** — bordas e fios de 1 a 3px continuam liberados,
  porque não devem escalar. `transform` e `outline-offset` estão isentos:
  geometria interna de SVG usa unidade de usuário, não `rem`.
- **`vw`, `vmin`, `vmax`** — só o `tokens.css` tem permissão, e usa uma vez.
- **`clamp()`** — o motor de escala é o `:root`. Um segundo motor dentro do
  componente foi exatamente o que quebrou a proporção antes.

`npm run lint:css` roda a verificação. O hook de pre-commit já a executa.

---

## 6. O que foi convertido nesta passagem

| arquivo | `clamp()` resolvidos | px → rem |
| --- | --- | --- |
| TelaQuemSomos.css | 64 | 95 |
| TelaInicio.css | 57 | 73 |
| TelaTrabalheConosco.css | 26 | 31 |
| TelaServicos.css | 18 | 15 |
| SiteChrome.css | 15 | 25 |
| TelaBlog.css | 6 | 11 |
| Carousel.css | 4 | 8 |
| **total** | **190** | **259** |

---

## 7. Correções de tipografia contra o Figma

Os três menores degraus (11, 12 e 13px) respondiam por 63 das 139
declarações de `font-size` do site. No Figma, o tamanho mais frequente é
20px. A tipografia estava sistematicamente **um a dois degraus abaixo do
desenho aprovado** — e isso é independente da escala: nenhum ajuste de
container corrigiria.

Correções aplicadas, cada uma medida no PDF:

| elemento | Figma | estava | ficou |
| --- | --- | --- | --- |
| menu do topo | 20 | 13 | `md` |
| título da newsletter | 20 | 18 | `md` |
| subtítulo e campo da newsletter | 15 | 12 | `body` |
| títulos e links do rodapé | 15 | 12 / 13 | `body` |
| copyright | 16 | 12 | `body` |
| texto das faixas de serviços | 20 | 13 | `md` |
| parágrafo "O que oferecemos" | 20 | 13 | `md` |
| subtítulo do hero de Serviços | 18 | 13 | `lead` |
| texto dos cartões de setor | 18 | 13 | `lead` |
| respostas do FAQ | 17,6 | 13 | `lead` |
| bloco de contato do Início | 17 | 13 | `lead` |
| linha do tempo (ano) | 15 | 13 | `body` |
| linha do tempo (descrição) | 13 | 12 | `sm` |
| depoimentos | 12 | 11 | `xs` |

Botão: o Figma tem **dois**, não um — 15px no "SAIBA MAIS" do Início e
21px nas conversões de Serviços. Em vez de cada página escrever o próprio
tamanho, existe `.asc-btn--lg`, aplicado nas três chamadas de Serviços.

Trabalhe Conosco e Publicações não têm Figma. Seguiram o padrão das demais
telas por analogia; se a referência aparecer, é substituição direta.

---

## 8. Como adicionar uma seção nova

1. O fundo pode ser full-bleed. O conteúdo vive num container:
   `width: min(var(--asc-container), 100% - 2 * var(--asc-gutter));
   margin-inline: auto;`
2. Respiro vertical: `--asc-section-y-sm`, `--asc-section-y` ou
   `--asc-section-y-lg`. Não existe um quarto.
3. Tamanho de texto: um dos 13 degraus, escolhido pela medição no Figma.
   Não invente um valor intermediário — se nenhum degrau serve, o degrau é
   que está faltando, e ele nasce no `tokens.css`.
4. Rode `npm run lint:css` antes de commitar.
