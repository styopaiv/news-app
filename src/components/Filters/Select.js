import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { selectArticle } from '../../AC';

class SelectComponent extends Component {
  changeSelection = (selected) => {
    this.props.selectArticle(selected.map(option => option.value));
  }

  render() {
    const { articles } = this.props;
    const options = Object.keys(articles).map(article => ({
      label: articles[article].title,
      value: articles[article].id,
    }));
    return (
      <div>
        <Select
          options={options}
          value={this.props.selected}
          onChange={this.changeSelection}
          multi
        />
      </div>
    );
  }
}

export default connect(state => ({
  articles: state.articles,
  selected: state.filters.selected,
}), { selectArticle })(SelectComponent);
