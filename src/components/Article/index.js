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
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func,
    // from connect
    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }

  componentDidMount() {
    const { loadArticle, article, id } = this.props;
    if (!article || (!article.text && !article.loading)) loadArticle(id);
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
    if (!article) return null;
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

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id),
}), { deleteArticle, loadArticle })(Article);
