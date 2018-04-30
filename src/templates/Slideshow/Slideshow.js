import React from 'react';
import { connectWithLifecycle } from 'react-lifecycle-component';

import { nextSlide, initSlideshow, clearSlideshowInterval } from './actions';
import { getSlideshowByName } from './selectors';
import { SlideshowComponent } from './components/SlideshowComponent';

const mapState = (state, { name }) => {

  const { currentIndex, nextIndex } = getSlideshowByName(state, name);

  return {
    currentIndex,
    nextIndex,
  };

};

const mapDispatch = (dispatch, { name, autoplay, children }) => ({
  componentDidMount() {
    let intervalID = null;

    if (autoplay) {
      intervalID = setInterval(() => {dispatch(nextSlide(name));}, autoplay);
    }

    dispatch(initSlideshow(name, intervalID, autoplay, React.Children.count(children)));
  },

  componentWillUnmount() {
    dispatch(clearSlideshowInterval(name));
  },
});

export const Slideshow = connectWithLifecycle(mapState, mapDispatch)(SlideshowComponent);

