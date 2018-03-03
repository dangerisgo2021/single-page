import { createAction } from '../../redux';

const creator = (name) => ({ name });

export const nextSlide = createAction('SLIDESHOW', 'NEXT_SLIDE', creator);
