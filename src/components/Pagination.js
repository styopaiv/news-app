import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { checkAndLoadPageComments } from '../AC';

import Loader from '../components/Loader';
import Comment from '../components/Comment';

class Pagination extends Component {
  componentWillMount() {
    const { checkAndLoadPageComments, page } = this.props;
    checkAndLoadPageComments(page);
  }

  componentWillReceiveProps({ checkAndLoadPageComments, page }) {
    checkAndLoadPageComments(page);
  }

  getPaginator() {
    const { totalComments } = this.props;
    const pagesAmount = Math.ceil(totalComments / 5);
    return [...Array(pagesAmount + 1).keys()].slice(1).map(pageNum =>
      (
        <NavLink to={`/comments/${pageNum}`} key={pageNum}>
          {pageNum}
        </NavLink>),
    );
  }


  getPageComments() {
    const { comments, loading } = this.props;
    if (loading || !comments) return <Loader />;

    const pageComments = comments.map(id => <li key={id}><Comment id={id} /></li>);
    return <ul>{pageComments}</ul>;
  }

  render() {
    const { totalComments } = this.props;
    if (!totalComments) return <Loader />;
    console.log(this.props);
    return (
      <div>
        {this.getPageComments()}
        {this.getPaginator()}
      </div>
    );
  }
}

export default connect((state, { page }) => {
  const { pagination, totalComments } = state.comments;
  return {
    totalComments,
    loading: pagination.getIn([page, 'loading']),
    comments: pagination.getIn([page, 'ids']),
  };
}, { checkAndLoadPageComments })(Pagination);
