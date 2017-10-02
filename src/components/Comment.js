import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    const { comment } = this.props;
    return (
      <div>
        <p>{comment.text}<b> __by {comment.user}</b></p>
      </div>
    );
  }
}

export default connect((state, ownProps) => (
  {
    comment: state.comments.find(comment => comment.id === ownProps.id),
  }
))(Comment);
