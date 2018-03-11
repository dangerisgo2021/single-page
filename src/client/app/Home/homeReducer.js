import ReduxReducerBuilder from 'reducer-builder';

import * as actions from './actions';
import * as reducers from './reducers';

export const homeReducer = new ReduxReducerBuilder()
  .setInitialState({ currentIndex: 0 })
  .addReducer(actions.clearInterval.type, reducers.clearInterval)
  .addReducer(actions.init.type, reducers.init)
  .addReducer(actions.step.type, reducers.step)
  .build();
