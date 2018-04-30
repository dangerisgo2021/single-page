export const step = (state) => {

  const { currentIndex, nextIndex, length } = state;

  const current = nextIndex;
  const previous = currentIndex;
  const next = current === length - 1 ? 0 : current + 1;

  return {
    ...state,
    currentIndex: current,
    previousIndex: previous,
    nextIndex: next,
  };

};
