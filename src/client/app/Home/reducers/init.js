export const init = (state, { payload }) => ({
  ...state,
  currentIndex: 0,
  ...payload,
});
