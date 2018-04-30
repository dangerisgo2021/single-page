import React from 'react';

import classnames from 'classnames';

import { MessageSlider, Logo } from './components';

import './Home.scss';

export const HomeComponent = ({ currentIndex }) => (

  <div class="home">

    <div class="left-col">

      <div class="top-row">

        <Logo currentIndex={currentIndex} />

      </div>

      <div class="bottom-row">

        <MessageSlider />

      </div>

    </div>

    <div class="right-col">

    </div>

  </div>
);
