import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { connect } from 'react-redux';
import { selectArticle } from '../../AC';
import { mapToArr } from '../../helpers';

class SelectComponent extends Component {
  changeSelection = (selected) => {
    this.props.selectArticle(selected.map(option => option.value));
  }

  render() {
    const { articles } = this.props;
    const options = articles.map(article => ({
      label: article.title,
      value: article.id,
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
  articles: mapToArr(state.articles.entities),
  selected: state.filters.selected,
}), { selectArticle })(SelectComponent);
