import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import history from '../history';
import reducer from '../reducer';
import generateId from '../middlewares/generateId';
import logger from '../middlewares/logger';
import api from '../middlewares/api';

const enhancer = applyMiddleware(thunk, routerMiddleware(history), generateId, api, logger);

const store = createStore(reducer, {}, enhancer);

// for dev
window.store = store;

export default store;
