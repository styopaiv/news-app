import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export default class App extends Component {
  state = {
    selection: null,
  }

  changeSelection = selection => this.setState({ selection });

  render() {
    const options = this.props.articles.map(article => ({
      label: article.title,
      value: article.id,
    }));

    return (
      <div>
        <Select
          options={options}
          value={this.state.selection}
          onChange={this.changeSelection}
        />
      </div>
    );
  }
}