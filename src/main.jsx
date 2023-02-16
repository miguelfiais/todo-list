import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './container/Home'
import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
)
