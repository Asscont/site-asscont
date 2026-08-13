# Manual de identidade digital — ASSCONT

Documento vivo. Sempre que uma decisão de cor, texto, imagem ou tom for tomada,
ela entra aqui. Se não está aqui, não está decidido.

**O que já existia:** seis amostras de cor e dez arquivos de logo. Nada mais.
Tudo neste documento foi levantado medindo o Figma aprovado e o código do site.

---

## 1. Tipografia

### Uma fonte só: Montserrat

O Figma exportou as fontes em contorno, então não havia nome para ler. A
identificação foi feita comparando o desenho real das letras contra 18
candidatas. Montserrat venceu por margem clara:

| Medida | Figma | Montserrat | Poppins |
|---|---|---|---|
| altura-x ÷ ascendente | 0,725 | 0,706 | 0,739 |
| descendente ÷ altura-x | 0,362 | 0,383 | 0,495 |
| largura do `m` ÷ altura-x | 1,65 | 1,66 | 1,61 |
| erro médio nas 10 medidas | — | **3,8 %** | 9,9 % |

Confirmado letra a letra: o `a` tem gancho (dois andares), o `g` tem cauda
aberta curvando à esquerda, o `t` tem pé curvo. Poppins tem `a` de bola e `t`
reto — incompatível.

**O site estava usando Poppins no texto corrido.** Corrigido: Montserrat em
tudo, e Poppins saiu do carregamento (uma fonte a menos para baixar).

### A escala — 13 degraus

| Token | Desktop | Papel |
|---|---|---|
| `--asc-fs-faq` | 99 px | a palavra "FAQ", decorativa |
| `--asc-fs-banner` | 50 px | banner de página, número de destaque |
| `--asc-fs-h1` | 42 px | título de seção grande |
| `--asc-fs-h2` | 35 px | título de seção, faixa CTA |
| `--asc-fs-h3` | 30 px | nome de serviço, título de bloco |
| `--asc-fs-h4` | 26 px | título de bloco pequeno |
| `--asc-fs-h5` | 22 px | título de cartão |
| `--asc-fs-md` | 20 px | subtítulo de bloco |
| `--asc-fs-lead` | 18 px | texto de destaque |
| `--asc-fs-body` | 15 px | corpo |
| `--asc-fs-sm` | 13 px | texto de apoio |
| `--asc-fs-xs` | 12 px | legenda, rodapé |
| `--asc-fs-2xs` | 11 px | rótulo micro |

Cada degrau corresponde a um papel no layout, não a um número escolhido à toa.
O Figma tinha 28 tamanhos; estes 13 cobrem todos com desvio máximo de 4 px.

**Nunca escreva um tamanho fora desta lista.** Se um caso novo parecer precisar
de um, é sinal de que o papel dele já existe com outro nome — procure antes de
criar.

### Altura de linha e entreletra

| Token | Valor | Quando |
|---|---|---|
| `--asc-lh-tight` | 1,15 | títulos grandes |
| `--asc-lh-snug` | 1,3 | títulos médios |
| `--asc-lh-base` | 1,55 | corpo |
| `--asc-lh-relaxed` | 1,7 | parágrafos longos |
| `--asc-tracking-normal` | 0 | padrão |
| `--asc-tracking-wide` | 0,02em | leve destaque |
| `--asc-tracking-caps` | 0,06em | caixa alta |
| `--asc-tracking-kicker` | 0,12em | rótulo pequeno em caixa alta |

### Pesos — PENDENTE

Ainda não sabemos quais pesos o Figma usa. O `index.html` hoje carrega
Montserrat 300 a 800 por precaução. Assim que os pesos forem confirmados,
reduzir para só os que existem — cada peso a mais é download desperdiçado.

---

## 2. Cor

### Marca

| Token | Hex | Uso |
|---|---|---|
| `--asc-cyan` | `#00b3e3` | destaque, botões, sublinhados |
| `--asc-cyan-hover` | `#009ec8` | estado hover |
| `--asc-navy` | `#173249` | faixas institucionais |
| `--asc-navy-deep` | `#0d2436` | faixas escuras |

### Rampa neutra

`--asc-gray-900` `#191919` · `-800` `#2b2b2b` · `-700` `#464646` ·
`-600` `#666b70` · `-400` `#9ca1a5` · `-200` `#e3e3e3` · `-100` `#f0f0f0` ·
`-050` `#fafafa` · `-000` `#ffffff`

### Cor de texto — a regra que faltava

Esta é a parte que mais gera inconsistência, porque parece óbvia e não é.

| Situação | Token | Contraste |
|---|---|---|
| Texto sobre branco | `--asc-text` (`#464646`) | 9,0 : 1 |
| Texto secundário sobre branco | `--asc-text-muted` (`#666b70`) | 5,7 : 1 |
| Título sobre branco | `--asc-heading` (`#3f3f3f`) | 10,4 : 1 |
| Texto sobre faixa escura | `--asc-on-dark` (branco) | — |
| Texto secundário sobre faixa escura | `--asc-on-dark-soft` (`#d8d8d8`) | — |
| **Link ou destaque sobre branco** | `--asc-cyan-700` (`#006f8d`) | 5,7 : 1 |

**O ciano puro nunca vai em texto sobre fundo claro.** Contraste 2,45 : 1,
reprovado no WCAG AA. Ele serve para fundo de botão, sublinhado, ícone, faixa —
nunca para a letra em si. Para letra ciano sobre branco existe o
`--asc-cyan-700`, que é o mesmo tom escurecido até passar em 5,7 : 1.

Sobre faixa escura o ciano puro pode ser texto, aí ele funciona.

---

## 3. Imagens

### Tratamento

O site aplica preto e branco na maioria das fotos (`filter: grayscale(1)`), com
a cor entrando pelo ciano dos elementos gráficos. Isso é uma decisão estética
consistente e deve ser mantida: **foto em preto e branco, cor só no ciano.**

Exceções legítimas: logos de clientes (cor original), fotos de produto,
imagens de apoio social onde a cor tem significado.

### Proporções

Cinco proporções, mais nenhuma. O código tinha doze, várias delas números
crus copiados do arquivo original (`1299 / 731`, `739 / 747`).

| Token | Proporção | Uso |
|---|---|---|
| `--asc-ratio-wide` | 16 / 9 | banner, capa de publicação |
| `--asc-ratio-panel` | 16 / 7 | faixa larga de seção |
| `--asc-ratio-card` | 4 / 3 | cartão de conteúdo |
| `--asc-ratio-portrait` | 4 / 5 | retrato, equipe |
| `--asc-ratio-square` | 1 | logo de cliente, avatar |

### Regra inegociável: texto nunca dentro da imagem

O banner da home tem o título `SOLUÇÕES INTEGRADAS EM GESTÃO EMPRESARIAL...`
embutido dentro da foto. Isso significa que:

- o Google não lê esse título — é a frase mais importante da home e ela é
  invisível para busca;
- leitor de tela não lê, o que exclui usuários com deficiência visual;
- em tela de alta resolução o texto fica borrado, enquanto o resto está nítido;
- trocar uma vírgula exige reabrir o Photoshop.

São quatro banners no carrossel, portanto quatro títulos invisíveis.

**Daqui em diante: foto é foto, texto é texto, sobrepostos por CSS.**

### Peso e formato

Exportar em WebP. Nenhuma imagem de fundo acima de 250 kB, nenhuma foto de
conteúdo acima de 120 kB. Sempre com `width` e `height` no HTML, para a página
não pular enquanto carrega.

---

## 4. Ícones

O site usa SVG desenhado à mão, sem biblioteca. Funciona, mas a espessura do
traço já varia entre 1,6 e 2 — o começo da mesma deriva das cores.

**Padrão:**

- traço de 1,6, nunca preenchimento sólido
- grade de 24 × 24
- cor herdada do texto (`currentColor`), nunca hex fixo
- cantos arredondados (`stroke-linecap: round`)
- tamanhos: 16 px inline, 20 px em lista, 24 px em destaque

Se o número de ícones crescer, adotar uma biblioteca de traço (Lucide ou
Tabler) em vez de continuar desenhando. Manter consistência à mão fica caro
depois de uns quinze ícones.

---

## 4b. Cartões

Havia quatro cartões de conteúdo com quatro tratamentos diferentes: raios `lg`
e `md`, três cores de borda, sombra em um só, alturas mínimas de 520 px e
230 px. Agora todos usam o mesmo padrão.

| Token | Valor |
|---|---|
| `--asc-card-pad` | `clamp(1.25rem, 2.4vw, 1.5rem)` |
| `--asc-card-radius` | 14 px |
| `--asc-card-border` | 1 px sólido `--asc-border` |
| `--asc-card-min` | 240 px |
| `--asc-card-linhas` | 6 |

### As duas regras que resolvem o desalinhamento

**1. A altura vem da fileira, nunca do texto.**

Todo cartão leva `height: 100%`, e o slide do carrossel leva
`align-items: stretch`. Sem isso, cada cartão ganha a altura do próprio
conteúdo e a fileira fica irregular — era o que acontecia com SCI, Omie e
HubCount, cada um numa altura.

**2. O texto é cortado numa contagem fixa de linhas.**

Os depoimentos da planilha vão de **79 a 1.332 caracteres** — dezessete vezes
de diferença. Nenhum layout sobrevive a isso. O texto agora corta em 6 linhas
(`--asc-card-linhas`). Era isso que fazia um cartão com 37 caracteres ocupar
620 px de altura.

### O cartão é clicável

Cartão de depoimento abre um modal com o texto completo. O corte em 6 linhas
deixa de ser perda de informação e passa a ser um resumo: quem quiser o
depoimento inteiro, clica.

O modal fecha por `Esc`, por clique fora e pelo `×`. Enquanto está aberto, o
scroll do fundo trava. Reaproveita o mesmo overlay do modal de certificações,
então há um só componente de modal no site, não dois.

### Ritmo vertical das seções

Três alturas, e nenhuma quarta:

| Token | Desktop | Uso |
|---|---|---|
| `--asc-section-y-sm` | 48 px | seções compactas, faixas |
| `--asc-section-y` | 72 px | padrão |
| `--asc-section-y-lg` | 90 px | banner, abertura de página |

Havia seis alturas diferentes só na home, todas escritas à mão, nenhuma usando
o token que já existia. Agora são 31 declarações apontando para três valores.

**Para deixar o site inteiro mais compacto ou mais arejado, mexa nessas três
linhas do `tokens.css`.** É o ponto do trabalho todo: um ajuste, o site inteiro
acompanha.

### Altura dos banners de página

Duas alturas, e nenhuma terceira:

| Token | Desktop | Uso |
|---|---|---|
| `--asc-banner-min-lg` | 576 px | só o Início |
| `--asc-banner-min` | 448 px | Quem Somos, Serviços, Publicações, Trabalhe Conosco |
| `--asc-banner-y` | 72 px | respiro interno de todos |

A medição das cinco telas em 1280 px encontrou cinco alturas escritas à mão —
589, 512, 640, 384 e 520 px — nenhuma com relação com a outra. Serviços era o
pior caso: 640 px de banner para 265 px de conteúdo.

O conteúdo mais alto entre as páginas internas ocupa 285 px, então 448 px
acomoda todas com folga. O Início é a única exceção, por ser a porta de entrada.
Todas as demais pousam o texto na mesma altura, qualquer que seja a página que
o visitante abrir.

Há uma exceção documentada no CSS: na **capa do post** (`.tblog-article-hero`) a
arte da publicação ocupa o centro do banner, então o texto desce para o rodapé
para não cobri-la. A altura e o respiro continuam sendo os mesmos.

**Se 448 px parecer alto, é uma linha no `tokens.css`** e as quatro páginas
internas acompanham juntas.

### A altura de um bloco vem do conteúdo, nunca da proporção da foto

O bloco "Quem somos" do Início tinha 680 px porque a foto (1400×1199) ocupava
62 % da largura e ditava a altura da seção inteira. O texto ocupa 352 px:
sobravam cerca de 200 px de painel cinza vazio abaixo do último link.

A regra que ficou: em bloco de foto sobreposta a painel, a imagem é
`position: absolute` + `object-fit: cover` dentro de um container
`overflow: hidden`. Assim a foto se ajusta à altura do texto, e não o contrário.
Vale para qualquer bloco novo com o mesmo desenho.

### Seções vizinhas de mesmo fundo: o respiro é um, não dois

Contato e "Nossas unidades" dividem o mesmo `--asc-surface-alt`. O visitante
lê as duas como um bloco só, mas o CSS tratava cada uma como uma seção
independente: 72 px de `padding-bottom` na de cima somados a 90 px de
`padding-top` na de baixo davam **162 px de vazio** no meio de um bloco
contínuo.

A regra que ficou: **numa emenda de mesmo fundo, quem paga o respiro é a
seção de baixo.** A de cima zera o `padding-bottom`.

```css
.tin-contato { padding-block: var(--asc-section-y) 0; }
.tin-mapas   { padding-block: var(--asc-section-y); }
```

Isso vale para qualquer par novo que compartilhe fundo. Quando os fundos são
diferentes a emenda é visível e as duas margens fazem sentido — aí não se
mexe.

Cuidado ao auditar: um bloco pode ter fundo branco na seção e a cor vir de uma
forma posicionada por dentro (é o caso do "Apoio social" em Quem Somos). Nesses
o `padding` fica dentro da cor, não vira vazio, e não deve ser zerado.

### Limite de texto para conteúdo novo

Ao coletar um depoimento, mire em **280 a 420 caracteres**. Abaixo de 150 o
cartão fica vazio; acima de 420 o texto é cortado e ninguém lê o fim.

Dois depoimentos da planilha atual estão fora da faixa e precisam de edição:

- um com 79 caracteres, escrito em caixa alta
  (`VC É UM PARCEIRO DE INESTIMÁVEL VALOR`) — curto demais e informal demais
  para uma página institucional;
- um com 1.332 caracteres, que só aparecerá cortado na sexta linha.

O ideal é editar na origem, não no CSS: peça ao cliente um trecho de três a
quatro frases, ou selecione o melhor parágrafo do depoimento longo.

---

## 5. Como a ASSCONT fala

### Quem fala

Uma contabilidade de quase cinquenta anos, com clientes que vão de um museu a
uma importadora de parafusos. Quem lê é diretor financeiro ou dono de empresa:
entende de negócio, não entende de legislação fiscal.

### Como fala

Com a segurança de quem já viu esse problema antes. Não com entusiasmo de
startup, nem com a formalidade defensiva de escritório de advocacia.

### As quatro regras

**1. Diga o que a empresa faz, não o que ela valoriza.**

> ~~"Excelência, segurança e agilidade."~~
> "Fechamento contábil entregue até o dia 10, todo mês."

A primeira frase qualquer concorrente pode copiar. A segunda é uma promessa.

**2. Caixa alta é estrutura, nunca ênfase.**

Só em rótulo curto: `OUTSOURCING CONTÁBIL`, `PILARES`. Frase inteira em
maiúscula, nunca. O subtítulo do banner de Quem Somos tem quatro linhas em
caixa alta hoje e ninguém lê até o fim.

**3. Voz ativa, sujeito explícito.**

> ~~"Gestão completa da folha e rotinas trabalhistas."~~
> "Cuidamos da folha inteira, do eSocial à rescisão."

**4. Número em vez de adjetivo, sempre que houver número.**

Vocês têm 49 anos, 600 clientes, 6 países, R$ 13 bilhões administrados. Isso
vale mais que "referência no mercado".

### Vocabulário fixo

| Use | Não use |
|---|---|
| ASSCONT | Asscont, asscont |
| Início | Inicio |
| cliente | parceiro (a menos que seja parceria de verdade) |
| você, sua empresa | o cliente, nossos clientes |
| BPO Financeiro | BPO financeiro |

### Botões

Verbo no infinitivo, primeira letra maiúscula. Os três em uso hoje —
`Entre em contato`, `Contrate`, `Agende sua reunião` — bastam. Não invente um
quarto.

### Pendências de texto

- **"48 anos" × "quase 50 anos".** Os dois convivem no site. A fundação foi em
  1977, então em 2026 são 49. Escolher um e usar em todo lugar.
- **FAQ.** Estava em inglês (placeholder do Figma). Reescrito em português,
  aguardando validação da ASSCONT — faz afirmações sobre escopo e transição de
  contador que precisam de confirmação.

---

## 6. Como isso se mantém

Documento não sustenta padrão sozinho — quem sustenta é a verificação
automática. O projeto tem stylelint configurado no commit: se alguém escrever
uma cor em hex, um tamanho de fonte fora da escala ou um breakpoint novo, o
commit não passa.

Foram 268 violações antes, zero agora.

**Ordem de trabalho para telas novas:** o contrato de tokens vai junto com o
pedido, antes do layout. E a instrução: *"use exclusivamente estes tokens; se
algum valor da tela não existir aqui, pare e pergunte antes de criar."* Essa
última frase é o que impede a próxima deriva.
