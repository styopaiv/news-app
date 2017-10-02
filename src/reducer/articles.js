import { normalizedArticles as defaultArticles } from '../fixtures';
import { DELETE_ARTICLE } from '../constants';

const articlesMap = defaultArticles.reduce((acc, article) => {
  acc[article.id] = article;
  return acc;
}, {});

export default (articleState = articlesMap, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ARTICLE:
      return Object.keys(articleState).reduce((acc, article) => {
        if (articleState[article].id !== payload.id) {
          acc[article] = articleState[article];
          return acc;
        }
        return {};
      }, {});
    default: // nothing
  }

  return articleState;
};
