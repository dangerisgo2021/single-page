import React from 'react';
import { Link } from 'react-router-dom';

import './Navigation.scss';

export const Navigation = () => (
  <div class="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="#about">About</Link></li>
      <li><Link to="#menu">Menu</Link></li>
      <li><Link to="#reserve">Reserve</Link></li>
    </ul>
  </div>

);
