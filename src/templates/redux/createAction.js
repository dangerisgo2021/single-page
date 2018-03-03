const ActionTypes = {};

const registerActionType = (namespace = 'ACTION', type) => {

  if (!ActionTypes[namespace]) {
    ActionTypes[namespace] = {};
  }

  if (ActionTypes[namespace][type]) {
    throw new Error('Registering ActionType that already exists : ' + ActionTypes[namespace][type]);
  } else {
    return ActionTypes[namespace][type] = `${namespace}::${type}`;
  }

};

export const createAction = (namespace, type, creator)  => {

  let registeredType = registerActionType(namespace, type);

  const action = creator
    ? (...args) => ({ type: registeredType, payload: creator(...args) })
    : (...args) => ({ type: registeredType });

  action.type = registeredType;
  return action;

};
