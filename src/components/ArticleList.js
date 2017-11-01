import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filteredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

import Loader from './Loader';


class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
  }

  componentWillMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    if (loading) return <Loader />;
    const articleElements = articles.map(article =>
      (
        <li key={article.id}>
          <NavLink to={`/articles/${article.id}`} activeStyle={{ color: '#aac493' }}>
            {article.title}
          </NavLink>
        </li>
      ));
    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}

export default connect(state => (
  {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  }
), { loadAllArticles })(ArticleList);
