import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () =>  (
  <ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="#about">About</Link></li>
    <li><Link to="#menu">Menu</Link></li>
    <li><Link to="#reserve">Reserve</Link></li>
  </ul>
);
