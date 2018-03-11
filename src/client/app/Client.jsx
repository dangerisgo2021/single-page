import React from 'react';

import { Home } from './Home';
import { Navigation } from './Navigation';

import './Client.scss';

export const Client = () => (
  <div className="client">
    <Navigation />
    <Home />
  </div>
);
