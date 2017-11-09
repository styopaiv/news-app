import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articles from './articles';
import filters from './filters';
import comments from './comments';

export default combineReducers({
  articles,
  filters,
  comments,
  router: routerReducer,
});
