import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import ArticleList from '../ArticleList/';
import Article from '../Article';
import Filters from '../Filters';
import './style.css';

class Articles extends Component {
  getArticle = ({ match }) => {
    const { id } = match.params;
    return <Article id={id} isOpen key={id} />;
  }

  render() {
    return (
      <div>
        <div className="articles">
          <ArticleList />
          {<Filters />}
        </div>
        <Route path="/articles/:id" render={this.getArticle} />
      </div>
    );
  }
}

export default Articles;
