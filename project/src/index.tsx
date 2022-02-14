import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  CARD_COUNT: 5,
  IS_AUTHORIZED: true,
};

ReactDOM.render(
  <React.StrictMode>
    <App cardNumber={Setting.CARD_COUNT} isAuthorized={Setting.IS_AUTHORIZED} />
  </React.StrictMode>,
  document.getElementById('root'));
