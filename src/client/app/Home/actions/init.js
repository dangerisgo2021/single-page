import { createAction } from '../../../../templates/redux';

const creator = (intervalID, autoplay, length) => ({
  intervalID,
  autoplay,
  length,
});

export const init = createAction('HOME', 'INIT', creator);
