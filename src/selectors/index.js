import { createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector =
  createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const { selected, dateRange: { from, to } } = filters;

    const filteredArticlesIds = Object.keys(articles).filter((articleId) => {
      const articleDate = Date.parse(articles[articleId].date);

      return ((!selected.length || selected.includes(articleId)) &&
      (!from || !to || (articleDate > from && articleDate < to)));
    });

    return filteredArticlesIds.reduce((acc, id) => {
      acc[id] = articles[id];
      return acc;
    }, {});
  });

export const commentSelectorFactory = () =>
  createSelector(commentsGetter, idGetter, (comments, id) =>
    comments.get(id));
