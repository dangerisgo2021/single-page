export const step = (state) => {

  const { currentIndex, length } = state;
  const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;

  return {
    ...state,
    currentIndex: nextIndex,
  };

};
