import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'dev-hvkqd6vp.us.auth0.com';
const clientId = 'ReqK0FmBwGbMkjHSvxt5YUoGcaahLiPr';

ReactDOM.render(
  <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={window.location.origin}>

    <App />

  </Auth0Provider>,
  document.getElementById('root')
);