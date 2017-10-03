import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducer';
import generateId from '../middlewares/generateId';
import logger from '../middlewares/logger';


const enhancer = applyMiddleware(generateId, logger);

const store = createStore(reducer, {}, enhancer);

// for dev
window.store = store;

export default store;
