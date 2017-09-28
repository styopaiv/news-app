import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Article/';
import accordionDecorator from '../decorators/accordion';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props;
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

export default connect(state => ({
  articles: state.articles,
}))(accordionDecorator(ArticleList));
