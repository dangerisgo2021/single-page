import { clearSlideshowInterval as clearAction } from '../actions';
import { getSlideshowByName } from '../selectors';

export const clearSlideshowInterval = store => next => action => {

  if (clearAction.type) {

    const state = store.getState();
    const { intervalId } = getSlideshowByName(state, action.name);
    clearInterval(intervalId);

  }

  next(action);

};
