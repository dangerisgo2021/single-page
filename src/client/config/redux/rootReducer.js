import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReducerBuilder from 'reducer-builder';

import { homeReducer } from '../../app/Home';

export const rootReducer = initialState =>
  new ReducerBuilder()
   .setInitialState(initialState)
   .combine('router', routerReducer)
   .combine('home', homeReducer)
   .build();
