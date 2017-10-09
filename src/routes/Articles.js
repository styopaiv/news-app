import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import ArticleList from '../components/ArticleList';
import Article from '../components/Article';

export default class Articles extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" component={Article} />
      </div>
    );
  }
}
