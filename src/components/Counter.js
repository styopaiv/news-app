import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, reset } from '../AC';

class Counter extends Component {
  handleIncrement = () => {
    const { increment } = this.props;
    increment();
  }

  handleReset = () => {
    const { reset } = this.props;
    reset();
  }

  render() {
    return (
      <div>
        <h2>{this.props.count}</h2>
        <button onClick={this.handleIncrement}>increment</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

export default connect(state => ({
  count: state.increment,
}), { increment, reset })(Counter);
