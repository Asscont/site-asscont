# Idiomas do site

O site fala português, inglês e espanhol. O seletor fica no header, à direita.

## A ideia

`textos/pt.ts` é a fonte da verdade: toda chave nasce lá, com o texto que já
está no site. `en.ts` e `es.ts` traduzem as chaves do português. **O que faltar
neles aparece em português**, sem erro e sem espaço em branco.

É isso que permite traduzir aos poucos. Um bloco migrado hoje e outro daqui a um
mês convivem sem problema, e o site pode ir para o ar em qualquer ponto do
caminho.

Chave com string vazia (`titulo: ''`) também cai para o português. Serve para
deixar o campo criado, esperando a tradução, sem afetar o site publicado.

## Migrar um bloco novo

1. Abrir `textos/pt.ts` e criar as chaves com o texto **exatamente como está
   hoje no JSX**. Nada de reescrever de passagem: se o texto precisa mudar, essa
   é outra tarefa, em outro commit.
2. No componente, trocar o texto pela chave:

   ```tsx
   import { useTextos } from '../i18n';

   export default function TelaServicos() {
     const t = useTextos();
     return <h2>{t.servicos.titulo}</h2>;
   }
   ```

3. Traduzir as mesmas chaves em `en.ts` e `es.ts`.
4. Verificar antes de commitar:

   ```bash
   cd frontend
   npx stylelint "src/**/*.css" && npx tsc -b && npm run build
   ```

O TypeScript avisa se uma chave de `en.ts` ou `es.ts` não existir no português —
protege contra erro de digitação. Chave faltando, não: isso é permitido de
propósito.

## Quebras de linha do design

Vários títulos têm `<br />` no meio porque o layout pede um número exato de
linhas. Esses pontos de quebra não servem para inglês nem para espanhol.

No dicionário a quebra é escrita como `\n` dentro do texto, e cada idioma
escolhe onde quebrar. O componente `<Linhas>` transforma `\n` em `<br />`:

```tsx
import { Linhas, useTextos } from '../i18n';

<p><Linhas texto={t.quemSomos.missaoTexto} /></p>
```

Texto sem `\n` sai sem nenhum `<br />`.

## Listas paralelas

Algumas listas casam **por posição**, não por nome: `servicosNomes`,
`redeRotulos`, `certTitulos`, `certDescricoes`, `metricaRotulos`,
`parceirosTextos`, entre outras. O item 3 de `certTitulos` corresponde ao
terceiro selo, e assim por diante.

Se alguém acrescentar ou remover um item em só um dos idiomas, o rótulo sai
trocado na tela **sem dar erro de compilação**. Ao mexer numa dessas listas,
mexer nos três arquivos.

## Publicar um artigo novo no blog

Os artigos em português continuam em `data/publicacoes.ts` — é lá que se
publica, como sempre foi. O dicionário guarda **só as traduções**, na chave
`blog.artigos`, indexadas pelo slug do artigo:

```ts
artigos: {
  'meu-artigo-novo': {
    titulo: '...', resumo: '...', texto: '...', categoria: '...',
  },
},
```

Artigo sem tradução aparece em português nos três idiomas. Ou seja: publicar
não exige traduzir na mesma hora.

## Âncoras de serviço

Cada faixa da página de Serviços tem um `slug` fixo em `TelaServicos.tsx`
(`auditoria`, `gestao-fiscal`, ...). Ele é o `id` usado pelos links do banner da
Início (`#/servicos#auditoria`) e **não pode mudar de idioma** — antes era
gerado a partir do título, o que quebraria esses links em inglês e espanhol.
Ao renomear um serviço, o slug permanece.

## Mapas abertos (depoimentos e artigos)

Duas chaves não seguem o padrão "português é a fonte da verdade":
`quemSomos.depoimentosTraduzidos` e `blog.artigos`. Nelas o português é um
objeto **vazio** — o conteúdo original vive no componente e em
`data/publicacoes.ts` —, e cada entrada só existe em `en.ts` e `es.ts`,
indexada por um id (o `id` do depoimento, o `slug` do artigo).

A mesclagem trata esse caso: objeto que não existe no português entra inteiro.
Sem isso, as entradas seriam descartadas e tudo cairia para o português em
silêncio, sem erro nenhum.

## Cuidados

- **Espanhol ocupa mais espaço** que o português, e o inglês ocupa menos. Depois
  de traduzir um bloco, olhar o resultado em 390px de largura. O parágrafo do
  bloco IECnet, na Início, já está no limite em português.
- **Termos técnicos** (Lucro Presumido, SPED Fiscal, EFD Contribuições, BPO
  Trabalhista) têm equivalência específica e precisam de conferência da ASSCONT.
- **Depoimentos de clientes**: o português vive em `TelaQuemSomos.tsx`, e as
  traduções em `quemSomos.depoimentosTraduzidos`, indexadas pelo `id` do
  depoimento. A ASSCONT autorizou a tradução dos doze atuais. Depoimento novo
  sem tradução aparece em português sozinho, sem quebrar nada. O nome e o logo
  do cliente nunca são traduzidos; o cargo, sim.
- **Vagas** (`data/vagas.ts`) são posições no Brasil, com exigências em
  português. Confirmar com a ASSCONT se devem mesmo ser traduzidas.
- As **rotas continuam em português** (`#/servicos`), em qualquer idioma, para
  não invalidar links já divulgados.

## Como o idioma é escolhido

Nesta ordem: `?lang=en` no endereço → escolha anterior salva no navegador →
idioma do navegador → português.

A escolha entra na URL (`.../?lang=es#/servicos`), então dá para mandar o link já
no idioma certo. O atributo `lang` do `<html>` também acompanha, o que importa
para leitor de tela e para busca.

## Acrescentar um quarto idioma

Incluir a sigla em `IDIOMAS`, dentro de `idiomas.ts`, preencher os três mapas do
arquivo e criar `textos/<sigla>.ts`. O seletor se ajusta sozinho.
