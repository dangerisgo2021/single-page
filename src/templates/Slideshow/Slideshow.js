import { connectWithLifecycle } from 'react-lifecycle-component';

import { nextSlide, initSlideshow, clearSlideshowInterval } from './actions';
import { getSlideshowByName } from './selectors';
import { SlideshowComponent } from './SlideshowComponent';

const mapState = (state, { name }) => ({
  currentIndex: getSlideshowByName(state, name).currentIndex,
});

const mapDispatch = (dispatch, { name, autoplay, slides }) => ({
  componentDidMount() {
    let intervalID = null;

    if (autoplay) {
      intervalID = setInterval(() => {dispatch(nextSlide(name));}, autoplay);
    }

    dispatch(initSlideshow(name, intervalID, autoplay, slides.length));
  },

  componentWillUnmount() {
    dispatch(clearSlideshowInterval(name));
  },
});

export const Slideshow = connectWithLifecycle(mapState, mapDispatch)(SlideshowComponent);

