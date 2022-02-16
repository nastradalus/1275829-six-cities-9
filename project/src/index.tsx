import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {AuthorizationStatus} from './const';

const Setting = {
  CARD_COUNT: 5,
  AUTHORIZATION_STATUS: AuthorizationStatus.NoAuth,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardNumber={Setting.CARD_COUNT} authorizationStatus={Setting.AUTHORIZATION_STATUS}/>
  </React.StrictMode>,
  document.getElementById('root'));
