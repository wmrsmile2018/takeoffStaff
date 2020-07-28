import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { App } from './App';
import { ErrorBoundary } from './components/errorBoundary/index';

import * as serviceWorker from './serviceWorker';
import store from './redux/store'

import './public/style.scss';


ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <ErrorBoundary>
          <div>asdasd</div>
        </ErrorBoundary>
      </Provider>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.register();
// "scss": "sass --watch ./src/public/style:./src/public/css/"
serviceWorker.register();
