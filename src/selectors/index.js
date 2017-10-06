import { createSelector } from 'reselect';
import { mapToArr } from '../helpers';

const filtersGetter = state => state.filters;
const articlesGetter = state => state.articles.entities;

const commentsGetter = state => state.comments;
const idGetter = (state, props) => props.id;

export const filteredArticlesSelector =
  createSelector(filtersGetter, articlesGetter, (filters, articles) => {
    const { selected, dateRange: { from, to } } = filters;

    const filteredArticles = mapToArr(articles).filter((article) => {
      const articleDate = Date.parse(article.date);

      return ((!selected.length || selected.includes(article)) &&
      (!from || !to || (articleDate > from && articleDate < to)));
    });

    return filteredArticles;
  });

export const commentSelectorFactory = () =>
  createSelector(commentsGetter, idGetter, (comments, id) =>
    comments[id]);
