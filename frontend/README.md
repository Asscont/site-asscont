# Site Asscont

Projeto em React + TypeScript + Vite.

## Rodar localmente

Requer Node.js 20+.

```bash
npm install
npm run dev
```

Abra o endereço exibido pelo Vite, normalmente `http://localhost:5173/`.

## Rotas

- `#/inicio`
- `#/servicos`
- `#/quem-somos`
- `#/publicacoes`
- `#/publicacoes/<slug>`
- `#/blog`
- `#/contato`

## Build de produção

```bash
npm run build
```

Os arquivos finais serão gerados em `dist/`.

## Observação de segurança

Credenciais de serviços externos não devem ser colocadas no código do front-end. A newsletter está somente com a interface visual até a definição de uma integração segura por backend/API.
