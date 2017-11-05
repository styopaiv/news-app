import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';
import CommentsList from '../CommentsList/';
import { deleteArticle, loadArticle } from '../../AC';
import Loader from '../Loader';

class Article extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    isOpen: PropTypes.bool,
    // from connect
    article: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      text: PropTypes.string,
    }),
  }

  componentWillMount() {
    const { loadArticle, article, id } = this.props;
    if (!article || (!article.text && !article.loading)) loadArticle(id);
  }

  getBody() {
    const { isOpen, article } = this.props;

    if (!isOpen) return null;

    if (article.loading) return <div className="article-loader"><Loader /></div>;
    return (
      <section>
        <div className="article-body">
          {article.text}
        </div>
        <CommentsList article={article} />
      </section>
    );
  }

  handleDelete = () => {
    const { deleteArticle, article } = this.props;
    deleteArticle(article.id);
  }

  render() {
    const { article } = this.props;
    if (!article) return null;
    return (
      <div className="article">
        <div className="article-title">
          <h2>{article.title}</h2>
          <button className="btn" onClick={this.handleDelete}>Delete article</button>
        </div>
        {this.getBody()}
      </div>
    );
  }
}

export default connect((state, ownProps) => ({
  article: state.articles.entities.get(ownProps.id),
}), { deleteArticle, loadArticle })(Article);
