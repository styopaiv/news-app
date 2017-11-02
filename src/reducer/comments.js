import { OrderedMap, Map, Record } from 'immutable';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, LOAD_PAGE_COMMENTS } from '../constants';
import { arrToMap } from '../helpers';

const CommentRecord = Record({
  id: '',
  user: '',
  text: '',
});

const ReducerState = Record({
  entities: new OrderedMap({}),
  pagination: new Map({}),
  totalComments: null,
});

const defaultState = new ReducerState();

export default (commentsState = defaultState, action) => {
  const { type, payload, randomId, response } = action;

  switch (type) {
    case ADD_COMMENT: {
      return commentsState.setIn(['entities', randomId], new CommentRecord({ ...payload.comment, id: randomId }));
    }

    case LOAD_ARTICLE_COMMENTS + SUCCESS: {
      return commentsState.update('entities', entities => entities.merge(arrToMap(response, CommentRecord)));
    }

    case LOAD_PAGE_COMMENTS + START: {
      return commentsState
        .setIn(['pagination', payload.page, 'loading'], true);
    }

    case LOAD_PAGE_COMMENTS + SUCCESS: {
      return commentsState
        .set('totalComments', response.total)
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id))
        .setIn(['pagination', payload.page, 'loading'], false);
    }

    default: // nothing
  }

  return commentsState;
};

