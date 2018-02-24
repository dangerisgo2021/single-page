import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import ReducerBuilder from 'reducer-builder';

export const rootReducer = initialState =>
  new ReducerBuilder()
   .setInitialState(initialState)
   .combine('router', routerReducer)
   .build();
