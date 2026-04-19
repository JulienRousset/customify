import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LangProvider } from './lang'
import { ThemeProvider } from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
)
