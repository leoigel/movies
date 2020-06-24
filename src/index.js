import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
import MoviesProvider from './context';
import 'normalize.css';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
serviceWorker.unregister();
