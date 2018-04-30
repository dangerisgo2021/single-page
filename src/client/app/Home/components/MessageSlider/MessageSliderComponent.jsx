import classnames from 'classnames';
import React from 'react';

import { SlideshowComponent as  Slideshow } from '../../../../../templates/Slideshow/components';

import '../../Home.scss';

export const MessageSliderComponent = ({ currentIndex, previousIndex, nextIndex }) => (
  <Slideshow
    class="message-slider"
    currentIndex={currentIndex}
    previousIndex={previousIndex}
    nextIndex={nextIndex}
  >
    <div class="message-slide background-image-0 ">
      <h2>Eat</h2>
      <h1>fried cads fijsajfosa opaidj fopaisdj fioasdj fhicken</h1>
      <h2>until the</h2>
      <h1>cows come home.</h1>
    </div>
    <div class="message-slide background-image-1">
      <h1>Pinkies up.</h1>
      <h2>Resort cocktails just got</h2>
      <h1>a little fancier.</h1>
    </div>
    <div class="message-slide background-image-2">
      <h2>Never underestimate the</h2>
      <h1>power of cake.</h1>
      <h2>Ours is</h2>
      <h1>100 proof.</h1>
    </div>
    <div class="message-slide background-image-3">
      <h1>
        If food is love, <br /> moonshine <br /> is magic.
      </h1>
    </div>
    <div class="message-slide background-image-4">
      <h1>
        Upscale. <br /> Down south. <br /> Shine on.
      </h1>
    </div>
  </Slideshow>
);

