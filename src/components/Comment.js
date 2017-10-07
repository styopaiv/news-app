import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentSelectorFactory } from '../selectors';

class Comment extends Component {
  render() {
    const { comment } = this.props;

    if (comment) {
      return (
        <div>
          <p>{comment.text}<b> __by {comment.user}</b></p>
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = () => {
  const commentSelector = commentSelectorFactory();
  return (state, ownProps) => (
    {
      comment: commentSelector(state, ownProps),
    }
  );
};

export default connect(mapStateToProps)(Comment);
