import { Map, OrderedMap, Record } from 'immutable';
import { arrToMap } from '../helpers';
import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES, START, SUCCESS } from '../constants';

const articleRecord = Record({
  text: undefined,
  title: undefined,
  id: undefined,
  comments: [],
});

const ReducerState = Record({
  loading: false,
  loaded: false,
  entities: new OrderedMap({}),
});

const defaultState = new ReducerState();

export default (articleState = defaultState, action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case DELETE_ARTICLE: {
      return articleState.deleteIn(['entities', payload.id]);
    }

    case ADD_COMMENT: {
      return articleState.updateIn(['entities', payload.articleId, 'comments'], comments => comments.concat(randomId));
    }

    case LOAD_ALL_ARTICLES + START: {
      return articleState.set('loading', true);
    }

    case LOAD_ALL_ARTICLES + SUCCESS: {
      return articleState.set('entities', arrToMap(response, articleRecord))
        .set('loading', false)
        .set('loaded', true);
    }

    default: // nothing
  }

  return articleState;
};
