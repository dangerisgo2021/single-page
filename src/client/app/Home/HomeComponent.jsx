import React from 'react';

import { Slideshow } from '../../../templates';
import { Navigation } from '../navigation';

import { Logo } from './components';

import './Home.scss';

const backgroundColors = ['#5a8088', '#773232', '#9c4928', '#1c2c39', '#324567'];

export const HomeComponent = ({ current }) => (
  <div class="home">
    <div class="left-col">
      <div class="top-row">
        <Logo />
      </div>
      <div class="bottom-row">

      </div>
    </div>
    <div class="right-col">

    </div>
  </div>
);
