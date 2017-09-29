import { DELETE_ARTICLE, INCREMENT, RESET } from '../constants';

export const deleteArticle = id =>
  ({
    type: DELETE_ARTICLE,
    payload: { id },
  });

export const increment = () =>
  ({
    type: INCREMENT,
  });

export const reset = () =>
  ({
    type: RESET,
  });
