import React from 'react';

import { Slideshow } from '../../../templates';
import { Navigation } from '../navigation';

import './Rows.pcss';

const logoSlides = [
  <div class="fill" key="0" style={{ backgroundColor: '#5a8088' }}></div>,
  <div class="fill" key="1" style={{ backgroundColor: '#773232' }}></div>,
  <div class="fill" key="2" style={{ backgroundColor: '#9c4928' }}></div>,
  <div class="fill" key="3" style={{ backgroundColor: '#1c2c39' }}></div>,
  <div class="fill" key="4" style={{ backgroundColor: '#324567' }}></div>,
];

export const Home = () => (
  <div class="home">
    <div class="left-col">
      <div class="top-row">
        <Slideshow
          name="logo"
          slides={logoSlides}
          autoplay={5000}
        />
      </div>
      <div class="bottom-row">
        <Slideshow
          name="art"
          slides={logoSlides}
          autoplay={5000}
        />
      </div>
    </div>
    <div class="right-col">
      <Slideshow
        name="feature"
        slides={logoSlides}
        autoplay={5000}
      />
    </div>
  </div>
);
