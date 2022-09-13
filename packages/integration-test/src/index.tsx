import { createRoot } from 'react-dom/client'
import { App } from './pages/App'

const container = document.createElement('div')
document.body.appendChild(container)
createRoot(container).render(<App />)
