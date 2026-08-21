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

## Cuidados

- **Espanhol ocupa mais espaço** que o português, e o inglês ocupa menos. Depois
  de traduzir um bloco, olhar o resultado em 390px de largura. O parágrafo do
  bloco IECnet, na Início, já está no limite em português.
- **Termos técnicos** (Lucro Presumido, SPED Fiscal, EFD Contribuições, BPO
  Trabalhista) têm equivalência específica e precisam de conferência da ASSCONT.
- **Depoimentos de clientes** não deveriam ser traduzidos sem autorização de quem
  os escreveu.
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
