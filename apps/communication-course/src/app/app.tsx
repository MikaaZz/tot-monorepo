// eslint-disable-next-line @typescript-eslint/no-unused-vars
import './app.scss'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}

export default App
