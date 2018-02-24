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

export const createAction = (namespace, type, payload)  => {

  let registeredType = registerActionType(namespace, type);

  const action = payload
    ? (...args) => ({ type: registeredType, payload: payload(...args) })
    : (...args) => ({ type: registeredType, payload: { ...args } });

  action.type = registeredType;
  return action;

};
