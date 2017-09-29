import { combineReducers } from 'redux';
import articles from './articles';
import increment from './increment';
// import filters from './filters';

export default combineReducers({
  articles,
  increment,
  // filters,
});
