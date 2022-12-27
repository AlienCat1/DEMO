import { Auth0Provider } from '@auth0/auth0-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AppProvider } from './Context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-gjmrx0hegjnsq7ui.us.auth0.com"
    clientId="bL2ewK9ta3mwwFkxqK8761CufhQoiCYS"
    redirectUri={window.location.origin}>
   <AppProvider>
     <App />
   </AppProvider>
  </Auth0Provider>
)
