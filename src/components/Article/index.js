import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import './style.css';
import CommentsList from '../CommentsList';
import { deleteArticle } from '../../AC';

class Article extends Component {
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

  handleDelete = () => {
    const { deleteArticle, article } = this.props; // eslint-disable-line
    deleteArticle(article.id);
  }

  render() {
    const { article, toggleOpen, isOpen } = this.props;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        <button onClick={this.handleDelete}>Delete article</button>
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

export default connect(null, { deleteArticle })(Article);
