import PropTypes from 'prop-types';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import React, { Component } from 'react';
import ArticleList from './ArticleList';

export default class App extends Component {
  static propTypes = {
    articles: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

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
        <ArticleList articles={this.props.articles} />
      </div>
    );
  }
}
