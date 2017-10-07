import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Comment from './Comment';
import CommentForm from './CommentForm';
import Loader from './Loader';

import toggleOpenDecorator from '../decorators/toggleOpen';
import { loadArticleComments } from '../AC';

class CommentsList extends Component {
  static propTypes = {
    article: PropTypes.object,
    // from toggleOpen
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  };

  componentWillReceiveProps({ isOpen, loadArticleComments, article }) {
    if (isOpen && !article.commentsLoading && !article.commentsLoaded) {
      loadArticleComments(article.id);
    }
  }

  showComments = () => {
    const { article: { comments = [], id, commentsLoading }, isOpen } = this.props;

    if (!isOpen) return null;

    if (commentsLoading) return <Loader />;

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
  }

  render() {
    const { toggleOpen, isOpen, article } = this.props;
    return (
      <div>
        <button onClick={toggleOpen}>
          {isOpen ? 'Close Comments' : 'Show Comments'}
        </button>
        {this.showComments({ article, isOpen })}
      </div>
    );
  }
}


export default connect(state => (
  {
    loading: state.comments.loading,
    loaded: state.comments.loaded,
  }
), { loadArticleComments })(toggleOpenDecorator(CommentsList));
