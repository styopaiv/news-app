import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="header-nav">
          <NavLink to="/" exact activeStyle={{ color: '#aac493' }}>Home Page</NavLink>
          <NavLink to="/comments" activeStyle={{ color: '#aac493' }}>All Comments</NavLink>
        </nav>
      </div>
    );
  }
}

export default Header;
