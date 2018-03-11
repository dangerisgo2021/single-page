import classnames from 'classnames';
import React from 'react';

import { preventDefault } from '../../preventDefault';
import '../Slideshow.pcss';

export const SlideshowComponent = ({ children, currentIndex }) => (
  <div class="slideshow">
    {
      React.Children.map(children, ((slide, i) =>
        i !== currentIndex ? false :
        React.cloneElement(
          slide,
          {
            className: classnames('slide', slide.props.className ),
          }
        )
      ))
    }
  </div>
);
