import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.css'
// import App from './App.tsx'
import LogInView from './css/Views/auth/LogInView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LogInView />
  </StrictMode>,
)
