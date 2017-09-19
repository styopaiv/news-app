import React, { Component } from 'react';
import CommentsList from './CommentsList';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  getBody() {
    if (!this.state.isOpen) return null;
    const { article } = this.props;
    return (
      <section>
        {article.text}
        <CommentsList comments={article.comments} />
      </section>
    );
  }

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { article } = this.props;
    const { isOpen } = this.state;
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }
}
