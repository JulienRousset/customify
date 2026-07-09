import React from 'react'
import ReactDOM from 'react-dom/client'
import { MotionConfig } from 'framer-motion'
import App from './App'
import { LangProvider } from './lang'
import { ThemeProvider } from './theme'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LangProvider>
        {/* Respect the OS "reduce motion" setting for all declarative motion
            (fade-ups, hover, whileInView). Infinite loops are additionally
            guarded with useReducedMotion where they need a static fallback. */}
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </LangProvider>
    </ThemeProvider>
  </React.StrictMode>
)
