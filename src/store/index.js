import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';
import generateId from '../middlewares/generateId';
import logger from '../middlewares/logger';
import api from '../middlewares/api';

const enhancer = applyMiddleware(thunk, generateId, api, logger);

const store = createStore(reducer, {}, enhancer);

// for dev
window.store = store;

export default store;
