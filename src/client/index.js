import React from 'react';
import {render, hydrate} from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import configureStore from '../store/configure-store';
import App from './app';

const store = configureStore(window.__initialData__);

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('react-app')
);