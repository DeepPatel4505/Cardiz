import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { JudgementProvider } from './context/JudgementContext.jsx'
import { SpadeOf3Provider } from './context/SpadeOf3Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SpadeOf3Provider>
      <JudgementProvider>
        <App className="bg-gray-900" />
      </JudgementProvider>
    </SpadeOf3Provider>
  </StrictMode>,
)
