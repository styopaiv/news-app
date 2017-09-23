import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import '../article.css';
import CommentsList from './CommentsList';

export default class Article extends Component {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
    }).isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
  }

  getBody() {
    const { isOpen, article } = this.props;
    if (!isOpen) return null;
    return (
      <section>
        {article.text}
        <CommentsList comments={article.comments} />
      </section>
    );
  }

  render() {
    const { article, toggleOpen, isOpen } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <CSSTransitionGroup
          transitionName="article"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={300}
        >
          {this.getBody()}
        </CSSTransitionGroup>
      </div>
    );
  }
}
