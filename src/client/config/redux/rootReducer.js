import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReducerBuilder from 'reducer-builder';

import { slideshowReducer } from '../../../templates/Slideshow';

export const rootReducer = initialState =>
  new ReducerBuilder()
   .setInitialState(initialState)
   .combine('router', routerReducer)
   .combine('slides', slideshowReducer)
   .build();
