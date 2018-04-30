import classnames from 'classnames';
import React from 'react';

import '../Home.scss';

export const Logo = ({ currentIndex }) => (

  <div class={classnames('logo', `color-${currentIndex}`)}>

    <img src="static/images/logo.png" />

  </div>

);

