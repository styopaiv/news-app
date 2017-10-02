import { createSelector } from 'reselect';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector =
  createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const { selected, dateRange: { from, to } } = filters;

    const filteredArticles = articles.filter((article) => {
      const articleDate = Date.parse(article.date);

      return ((!selected.length || selected.includes(article.id)) &&
      (!from || !to || (articleDate > from && articleDate < to)));
    });
    return filteredArticles;
  });

export const commentSelectorFactory = () =>
  createSelector(commentsGetter, idGetter, (comments, id) =>
    comments.find(comment => comment.id === id));
