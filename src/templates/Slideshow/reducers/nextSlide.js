export const nextSlide = (state, { payload: { name } }) => {

  const { currentIndex, length } = state[name];
  const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

  return {
    ...state,
    [name]: {
      ...state[name],
      currentIndex: nextIndex,
    },
  };

};
