import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {AuthorizationStatus} from './const';
import {offers} from './mock/offers';
import {Provider} from 'react-redux';
import {store} from './store';

const Setting = {
  AUTHORIZATION_STATUS: AuthorizationStatus.Auth,
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App authorizationStatus={Setting.AUTHORIZATION_STATUS} offers={offers} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
