import React, { Component } from 'react';
import Select from './Select';
import DateRange from './DateRange';

class Filters extends Component {
  render() {
    return (
      <div>
        <Select />
        <DateRange />
      </div>
    );
  }
}

export default Filters;
