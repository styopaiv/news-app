import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import './style.css';
import CommentsList from '../CommentsList';
import { deleteArticle, loadArticle } from '../../AC';
import Loader from '../Loader';

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

  componentWillReceiveProps({ isOpen, loadArticle, article }) {
    if (isOpen && !article.text && !article.loading) loadArticle(article.id);
  }

  getBody() {
    const { isOpen, article } = this.props;
    if (!isOpen) return null;
    if (article.loading) return <Loader />;
    return (
      <section>
        {article.text}
        <CommentsList article={article} />
      </section>
    );
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
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

export default connect(null, { deleteArticle, loadArticle })(Article);
