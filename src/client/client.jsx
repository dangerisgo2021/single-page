import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createReduxStore } from '../common/redux';
import { Client } from './app';
import { redux } from './config';
import { Router, routerMiddleware } from './router';

window.onload = () => {

  const { __INITIAL_STATE__ = { test: 'default' } } = window;

  //Adding initialState and browserOnly routerMiddleware with devTools on
  const finalRedux = {
    ...redux,
    middlewares: [...redux.middlewares, routerMiddleware],
    initialState: __INITIAL_STATE__,
    devTools: true,
  };

  const store = createReduxStore(finalRedux);

  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Client />
      </Router>
    </Provider>,
    document.getElementById('app')
  );

};