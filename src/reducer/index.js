import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import articles from './articles';
import increment from './increment';
import filters from './filters';
import comments from './comments';

export default combineReducers({
  articles,
  increment,
  filters,
  comments,
  router: routerReducer,
});
