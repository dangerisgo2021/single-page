import { createAction } from '../../redux';

const creator = (form, name, value) => ({
  form,
  name,
  value,
});

export const inputValueSet = createAction('FORM', 'VALUE_SET', creator);
