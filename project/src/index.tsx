import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {offers} from './mock/offers';

const Setting = {
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
};

ReactDOM.render(
  <React.StrictMode>
    <App authorizationStatus={Setting.AUTHORIZATION_STATUS} offers={offers}/>
  </React.StrictMode>,
  document.getElementById('root'));
