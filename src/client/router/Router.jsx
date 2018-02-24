import React from 'react';
import { ConnectedRouter } from 'react-router-redux';

import { history } from './history';

export const Router = ({ children }) =>  (
  <ConnectedRouter history={history} >
    {children}
  </ConnectedRouter>
);
