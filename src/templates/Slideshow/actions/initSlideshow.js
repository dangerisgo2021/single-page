import { createAction } from '../../redux';

const creator = (name, intervalID, autoplay, length) => ({
  name,
  intervalID,
  autoplay,
  length,
});

export const initSlideshow = createAction('SLIDESHOW', 'INIT_SLIDESHOW', creator);
