import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpenDecorator from '../decorators/toggleOpen';

const CommentsList = ({ comments = [], isOpen, toggleOpen }) =>
  (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close Comments' : 'Show Comments'}
      </button>
      {showComments(comments, isOpen)}
    </div>
  );

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  // from toggleOpen
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

const showComments = (comments, isOpen) => {
  if (!isOpen) return null;
  if (comments.length > 0) {
    const commentElements = comments.map(comment =>
      <Comment key={comment.id} comment={comment} />,
    );
    return commentElements;
  }
  return <p>No comments yet</p>;
};


export default toggleOpenDecorator(CommentsList);
