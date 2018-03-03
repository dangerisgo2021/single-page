export const initSlideshow = (state, { payload }) => ({
  ...state,
  [payload.name]: {
    currentIndex: 0,
    ...payload,
  },
});
