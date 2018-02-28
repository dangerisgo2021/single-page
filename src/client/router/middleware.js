import { routerMiddleware } from 'react-router-redux';
import { history } from './history';

export const middleware = routerMiddleware(history);
