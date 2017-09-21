import React from 'react';
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
