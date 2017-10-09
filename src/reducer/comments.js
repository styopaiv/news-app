import { OrderedMap, Record } from 'immutable';
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants';
import { arrToMap } from '../helpers';

const CommentRecord = Record({
  id: '',
  user: '',
  text: '',
});

const ReducerState = Record({
  entities: new OrderedMap({}),
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

    default: // nothing
  }

  return commentsState;
};

