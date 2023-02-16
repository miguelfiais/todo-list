import React from 'react'
import ReactDOM from 'react-dom/client'
import { ListProvider } from './hooks/ListContext'
import Router from './routes/routes'
import GlobalStyles from './styles/globalStyles'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListProvider>
      <Router />
    </ListProvider>
    <GlobalStyles />
  </React.StrictMode>,
)
