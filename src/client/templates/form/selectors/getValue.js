import { get } from 'lodash';

export const getValue = (state, form, name, value) =>
  get(state, `forms.${form}.${name}.value`, value);
