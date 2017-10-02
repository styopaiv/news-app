import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Article from './Article/';
import accordionDecorator from '../decorators/accordion';
import { filteredArticlesSelector } from '../selectors';

class ArticleList extends Component {
  static propTypes = {
    // from connect
    articles: PropTypes.object.isRequired,
    // from accordion
    openItemId: PropTypes.string,
    toggleOpenItem: PropTypes.func.isRequired,
  }

  render() {
    const { articles, openItemId, toggleOpenItem } = this.props;
    const articleElements = Object.keys(articles).map(articleId =>
      (
        <li key={articleId}>
          <Article
            article={articles[articleId]}
            isOpen={articleId === openItemId}
            toggleOpen={toggleOpenItem(articleId)}
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
    // articles: state.articles,
  }
))(accordionDecorator(ArticleList));
