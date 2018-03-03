import ReduxReducerBuilder from 'reducer-builder';

import { inputValueSet } from '../actions';
import { inputValueSetReducer } from './reducers';

export const formReducer = new ReduxReducerBuilder()
  .addReducer(inputValueSet.type, inputValueSetReducer)
  .build();
