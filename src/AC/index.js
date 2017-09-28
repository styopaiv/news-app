import { DELETE_ARTICLE } from '../constants';

export const deleteArticle = id =>
  ({
    type: DELETE_ARTICLE,
    payload: { id },
  });
