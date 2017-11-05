import React, { Component } from 'react';
import Select from './Select';
import DateRange from './DateRange';
import './style.css';

class Filters extends Component {
  render() {
    return (
      <div className="filters">
        <h2>Filters</h2>
        <Select />
        <DateRange />
      </div>
    );
  }
}

export default Filters;
