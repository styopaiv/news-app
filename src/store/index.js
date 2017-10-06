import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import generateId from '../middlewares/generateId';
import logger from '../middlewares/logger';
import api from '../middlewares/api';

const enhancer = applyMiddleware(generateId, api, logger);

const store = createStore(reducer, {}, enhancer);

// for dev
window.store = store;

export default store;
