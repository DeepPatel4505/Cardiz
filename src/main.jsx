import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { JudgementProvider } from './context/JudgementContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JudgementProvider>
      <App className="bg-gray-900" />
    </JudgementProvider>
  </StrictMode>,
)
