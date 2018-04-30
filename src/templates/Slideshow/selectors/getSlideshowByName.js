import { get } from 'lodash';

export const getSlideshowByName = (state, name) => state.slides[name] || {};
