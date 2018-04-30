import React from 'react';
import { connectWithLifecycle } from 'react-lifecycle-component';

import { HomeComponent } from './HomeComponent';
import { clearInterval, step, init, } from './actions';
import { getHome } from './selectors';

const autoplay = 0;
const length = 5;

const mapState = (state) => {
  const { currentIndex } = getHome(state);

  return {
    currentIndex,
  };

};

const mapDispatch = (dispatch) => ({

  componentDidMount() {
    const intervalID = autoplay && setInterval(() => {dispatch(step());}, autoplay);
    dispatch(init(intervalID, autoplay, length));
  },

  componentWillUnmount() {
    dispatch(clearInterval());
  },

});

export const Home = connectWithLifecycle(mapState, mapDispatch)(HomeComponent);

