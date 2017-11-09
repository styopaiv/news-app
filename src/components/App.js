import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import history from '../history';

import Articles from './routes/Articles';
import NotFound from './routes/NotFound';
import Comments from './routes/Comments';
import Header from './Header/';

export default class App extends Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" component={Articles} exact />
            <Route path="/articles/:id" component={Articles} />
            <Route path="/comments" component={Comments} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </ConnectedRouter>
    );
  }
}
