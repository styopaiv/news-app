import React from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';

const Article = ({ article, isOpen, toggleOpen }) =>
  (
    <div>
      <h3>{article.title}</h3>
      <button onClick={toggleOpen}>
        {isOpen ? 'close' : 'open'}
      </button>
      {getBody(article, isOpen)}
    </div>
  );

const getBody = (article, isOpen) => {
  if (!isOpen) return null;
  return (
    <section>
      {article.text}
      <CommentsList comments={article.comments} />
    </section>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string,
  }).isRequired,
};


export default Article;
