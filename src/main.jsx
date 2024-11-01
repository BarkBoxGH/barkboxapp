import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Bounce } from 'react-toastify'
import { ToastContainer } from 'react-toastify'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <App />
  </StrictMode>,
)
