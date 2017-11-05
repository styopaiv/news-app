import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { filteredArticlesSelector } from '../../selectors';
import { loadAllArticles } from '../../AC';

import './style.css';

import Loader from '../Loader';


class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.array.isRequired,
  }

  componentDidMount() {
    const { loaded, loading, loadAllArticles } = this.props;
    if (!loaded && !loading) loadAllArticles();
  }

  render() {
    const { articles, loading } = this.props;
    if (loading) {
      return (<div className="article-list-loader">
        <Loader />
      </div>);
    }

    const articleElements = articles.map(article =>
      (
        <li key={article.id} className="articles-list-item">
          <NavLink to={`/articles/${article.id}`} activeStyle={{ color: '#000' }}>
            {article.date}
            {article.title}
          </NavLink>
        </li>
      ));

    return (
      <div>
        <h2 className="articles-list-title">Articles</h2>
        <ul className="articles-list">
          {articleElements}
        </ul>
      </div>
    );
  }
}

export default connect(state => (
  {
    articles: filteredArticlesSelector(state),
    loading: state.articles.loading,
    loaded: state.articles.loaded,
  }
), { loadAllArticles }, null, { pure: false })(ArticleList);
