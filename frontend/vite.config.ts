import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/' porque no Azure Static Web Apps o site fica na raiz do dominio.
// Era '/site-asscont/' no GitHub Pages, que servia de um subdiretorio; com o
// valor errado o build gera caminhos que nao existem e a pagina abre em branco.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
