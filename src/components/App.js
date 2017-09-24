import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Filters from './Filters';

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render() {
    return (
      <div>
        <Filters articles={this.props.articles} />
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
