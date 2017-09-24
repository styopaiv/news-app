import React, { Component } from 'react';
import './style.css';

export default class CommentForm extends Component {
    state = {
      user: '',
      text: '',
    };

    getClassName = (type) => {
      const checkMin = this.state[type].length < limits[type].min;
      const result = this.state[type].length && checkMin ? 'input-error' : '';
      return result;
    };

    handleChange = type => (event) => {
      const { value } = event.target;
      if (value.length > limits[type].max) return;
      this.setState({
        [type]: event.target.value,
      });
    }

    handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        user: '',
        text: '',
      });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          User name:
          <input
            value={this.state.user}
            onChange={this.handleChange('user')}
            className={this.getClassName('user')}
          />
          Comment:
          <input
            value={this.state.text}
            onChange={this.handleChange('text')}
            className={this.getClassName('text')}
          />
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

const limits = {
  user: {
    min: 5,
    max: 15,
  },
  text: {
    min: 10,
    max: 50,
  },
};
