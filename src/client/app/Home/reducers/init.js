export const init = (state, { payload }) => ({
  ...state,
  ...payload,
  currentIndex: 0,
  nextIndex: 1,
  previousIndex: payload.length - 1,
});
