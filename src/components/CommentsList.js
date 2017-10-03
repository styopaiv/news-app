import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Comment from './Comment';
import toggleOpenDecorator from '../decorators/toggleOpen';
import CommentForm from './CommentForm';

const CommentsList = ({ article, isOpen, toggleOpen }) =>
  (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? 'Close Comments' : 'Show Comments'}
      </button>
      {showComments({ article, isOpen })}
    </div>
  );

CommentsList.propTypes = {
  article: PropTypes.object,
  // from toggleOpen
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
};

const showComments = ({ article: { comments = [], id }, isOpen }) => {
  if (!isOpen) return null;
  if (comments.length > 0) {
    return (
      <div>
        <ul>
          {comments.map(id => <li key={id}><Comment id={id} /></li>)}
        </ul>
        <CommentForm articleId={id} />
      </div>
    );
  }
  return (
    <div>
      <p>No comments yet</p>;
      <CommentForm articleId={id} />
    </div>
  );
};


export default toggleOpenDecorator(CommentsList);
