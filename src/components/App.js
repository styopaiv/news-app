import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ArticleList from './ArticleList';

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return (
      <div>
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
