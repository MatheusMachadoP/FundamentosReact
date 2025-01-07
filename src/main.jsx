import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// aqui estou renderizando App dentro de um StrictMode, que é um componente que ajuda a identificar problemas na aplicação, e estou 
// passando o StrictMode para o createRoot, que é uma função que renderiza o componente App no elemento com id root no DOM.
// o StrictMode é um componente que ajuda a identificar problemas na aplicação, e está sendo usado para renderizar o componente App.
