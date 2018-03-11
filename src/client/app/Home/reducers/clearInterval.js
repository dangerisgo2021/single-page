export const clearInterval = (state, { payload: { name } }) => ({
  ...state,
  intervalID: null,
});
