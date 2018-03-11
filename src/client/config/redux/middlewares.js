import thunk from 'redux-thunk';

const logger = store => next => action => {
  console.log({ action, state: store.getState() });
  next(action);
};

export const middlewares = [
	thunk,
  logger,
];
