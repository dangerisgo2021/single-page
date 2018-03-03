import classnames from 'classnames';
import React from 'react';

import { preventDefault } from '../preventDefault';
import './Slideshow.pcss';

export const SlideshowComponent = ({
  slides, handleNextClick, handlePrevClick, handleDotClick, currentIndex,
}) => (
  <div class="slideshow">
    {slides.map((slide, i) => (
      <div key={i} class={classnames('slide', { active: i === currentIndex })}>
        {slide}
      </div>
    ))}
    <div class="next" onClick={preventDefault(handleNextClick)}></div>
    <div class="prev" onClick={preventDefault(handlePrevClick)}></div>
    <div class="dots">
      {slides.map((slide, i) => (
        <span
          key={i}
          class={classnames('dot', { active: i === currentIndex })}
          onClick={preventDefault(handleDotClick)}>
        </span>
      ))}
    </div>
  </div>
);
