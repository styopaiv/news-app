import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import toggleOpenDecorator from '../decorators/toggleOpen';
import CommentForm from './CommentForm/CommentForm';

const CommentsList = ({ comments = [], isOpen, toggleOpen }) =>
  (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close Comments' : 'Show Comments'}
      </button>
      <CommentForm />
      {showComments(comments, isOpen)}
    </div>
  );

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.string).isRequired,
  // from toggleOpen
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

const showComments = (comments, isOpen) => {
  if (!isOpen) return null;
  if (comments.length > 0) {
    const commentElements = comments.map(id =>
      <Comment key={id} id={id} />,
    );
    return commentElements;
  }
  return <p>No comments yet</p>;
};


export default toggleOpenDecorator(CommentsList);
