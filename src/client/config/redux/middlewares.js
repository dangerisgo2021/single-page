import thunk from 'redux-thunk';

import { clearSlideshowInterval } from '../../../templates/Slideshow/middleware';

const logger = store => next => action => {
  console.log({ action, state: store.getState() });
  next(action);
};

export const middlewares = [
	thunk,
  logger,
  clearSlideshowInterval,
];
