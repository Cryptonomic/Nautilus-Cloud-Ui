import React from 'react';
import {render} from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import { store } from './store';
import RouterCheck from './RouterCheck';
import * as serviceWorker from './serviceWorker';
import './assets/scss/App.scss';

const rootEl = document.getElementById('root');
const history = createBrowserHistory();

render(
  <Provider store={store}>
    <Router history={history}>
      <RouterCheck/>
    </Router>
  </Provider>
  ,
  rootEl
);
serviceWorker.unregister();
