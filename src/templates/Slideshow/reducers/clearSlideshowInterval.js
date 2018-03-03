export const clearSlideshowInterval = (state, { payload: { name } }) => ({
  ...state,
  [name]: {
    ...state[name],
    intervalID: null,
  },
});
