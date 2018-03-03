import ReduxReducerBuilder from 'reducer-builder';

import * as actions from './actions';
import * as reducers from './reducers';

export const slideshowReducer = new ReduxReducerBuilder()
  .addReducer(actions.clearSlideshowInterval.type, reducers.clearSlideshowInterval)
  .addReducer(actions.initSlideshow.type, reducers.initSlideshow)
  .addReducer(actions.nextSlide.type, reducers.nextSlide)
  .build();
