import React from 'react';
import PropTypes from 'prop-types';

const Comment = ({ comment }) =>
  (
    <div>
      <p>{comment.text}<b> __by {comment.user}</b></p>
    </div>
  );

Comment.PropTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Comment;
