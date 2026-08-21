import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './tokens.css'
import App from './App.tsx'
import { ProvedorIdioma } from './i18n'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProvedorIdioma>
      <App />
    </ProvedorIdioma>
  </StrictMode>,
)
