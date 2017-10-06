import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Article from './Article/';
import Loader from './Loader';

import accordionDecorator from '../decorators/accordion';
import { filteredArticlesSelector } from '../selectors';
import { loadAllArticles } from '../AC';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded || !loading) loadAllArticles();
  }

  render() {
    const { articles, openItemId, toggleOpenItem, loading } = this.props;
    if (loading) return <Loader />;
    const articleElements = articles.map(article =>
      (
        <li key={article.id}>
          <Article
            article={article}
            isOpen={article.id === openItemId}
            toggleOpen={toggleOpenItem(article.id)}
          />
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
), { loadAllArticles })(accordionDecorator(ArticleList));
