import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react';
ReactDOM.createRoot(document.getElementById('root')).render(
 <Auth0Provider
    domain="dev-tlfe0je45fku737n.us.auth0.com"
    clientId="LjEA65DQa47e2hOomsh9aA4v4g4oRfWc"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
)
