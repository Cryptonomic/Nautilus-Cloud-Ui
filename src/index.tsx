import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterCheck from './RouterCheck';
import * as serviceWorker from './serviceWorker';
import './assets/scss/App.scss';

const rootEl = document.getElementById('root');

render(
  <Provider store={store}>
    <BrowserRouter>
      <RouterCheck/>
    </BrowserRouter>
  </Provider>
  ,
  rootEl
);
serviceWorker.unregister();
