import React, { Component } from 'react';
import ArticleList from './ArticleList';
import Filters from './Filters';

export default class App extends Component {
  render() {
    return (
      <div>
        <Filters articles={[]} />
        <ArticleList />
      </div>
    );
  }
}
