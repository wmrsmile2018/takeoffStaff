import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from "react-router-dom";

import { App } from './App'
import store from './redux/store';
import { GlobalHistory } from './utils/history';

import './public/style.scss';

ReactDOM.render(
  <BrowserRouter>
    <GlobalHistory/>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
