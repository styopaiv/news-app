import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

import Articles from './routes/Articles';
import newArticle from './routes/NewArticle';
import NotFound from './routes/NotFound';
import Filters from './Filters';
import Counter from './Counter';
import Comments from './routes/Comments';

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink to="/counter" activeStyle={{ color: '#aac493' }}>Counter</NavLink></div>
            <div><NavLink to="/articles" activeStyle={{ color: '#aac493' }}>Articles</NavLink></div>
            <div><NavLink to="/filters" activeStyle={{ color: '#aac493' }}>Filters</NavLink></div>
            <div><NavLink to="/comments/" activeStyle={{ color: '#aac493' }}>Comments</NavLink></div>
          </div>
          <Switch>
            <Route path="/counter" component={Counter} />
            <Route path="/articles/new" component={newArticle} />
            <Route path="/articles" component={Articles} />
            <Route path="/filters" component={Filters} />
            <Route path="/comments" component={Comments} />
            <Route path="*" component={NotFound} />
            <Redirect from="/comments" to="/comments/1" />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}
