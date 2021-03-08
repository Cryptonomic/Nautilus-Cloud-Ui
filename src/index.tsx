import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { store } from './store';
import RouterCheck from './RouterCheck';
import * as serviceWorker from './serviceWorker';

import theme from './theme';

import 'typeface-montserrat';
import 'typeface-roboto';
import 'typeface-pt-sans';

const rootEl = document.getElementById('root');

render(
  <RouterCheck />
  ,
  rootEl
);
serviceWorker.unregister();
