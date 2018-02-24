import { createAction } from '../../../../common/redux';

const payload = (form, name, value) => ({
  form,
  name,
  value,
});

export const inputValueSet = createAction('FORM', 'VALUE_SET', payload);
