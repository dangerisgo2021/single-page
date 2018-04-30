import React from 'react';
import { connect } from 'react-redux';

import { MessageSliderComponent } from './MessageSliderComponent';
import { getHome } from '../../selectors';

const mapState = (state) => {
  const { currentIndex, previousIndex, nextIndex } = getHome(state);

  return {
    currentIndex,
    previousIndex,
    nextIndex,
  };

};

export const MessageSlider = connect(mapState)(MessageSliderComponent);

