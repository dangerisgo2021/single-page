import React from 'react';

import { Home, About, Menu, Reserve } from './rows';

import './Client.pcss';

export const Client = () => (
  <div className="client">
    <Home />
    <About />
    <Menu />
    <Reserve />
  </div>
);
