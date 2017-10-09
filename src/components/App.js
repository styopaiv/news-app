import React, { Component } from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';

import Articles from '../routes/Articles';
import Filters from './Filters';
import Counter from './Counter';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <h2>Main menu</h2>
            <div><NavLink to="/counter" activeStyle={{ color: '#aac493' }}>Counter</NavLink></div>
            <div><NavLink to="/articles" activeStyle={{ color: '#aac493' }}>Articles</NavLink></div>
            <div><NavLink to="/filters" activeStyle={{ color: '#aac493' }}>Filters</NavLink></div>
          </div>
          <Route path="/counter" component={Counter} />
          <Route path="/articles" component={Articles} />
          <Route path="/filters" component={Filters} />
        </div>
      </Router>
    );
  }
}
