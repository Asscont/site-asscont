import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: no GitHub Pages o site fica em /site-asscont/, nao na raiz do dominio.
// Sem isso o build gera caminhos /assets/... e a pagina abre em branco.
// Em desenvolvimento (npm run dev) o base continua sendo '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/site-asscont/' : '/',
  plugins: [react()],
}))
