import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

export const createReduxStore = ({
  rootReducer,
  initialState = {},
  middlewares = [],
  devTools = false,
}) => {

  const composer = devTools ? composeWithDevTools : compose;

  const finalCreateStore = composer(applyMiddleware(...middlewares))(createStore);

  return finalCreateStore(rootReducer(initialState));

};