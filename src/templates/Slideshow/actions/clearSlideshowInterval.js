import { createAction } from '../../redux';

const creator = (name) => ({ name });

export const clearSlideshowInterval = createAction('SLIDESHOW', 'CLEAR_INTERVAL', creator);
