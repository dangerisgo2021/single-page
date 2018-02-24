import { set } from 'lodash';

export const inputValueSetReducer = (state, { payload: { form, name, value } }) =>{
  let newState = { ...state };
  return set(newState, `${form}.${name}.value`, value);
};
