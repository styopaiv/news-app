import React, { Component } from 'react';
import Comment from './Comment';

export default class CommentsList extends Component {
  static defaultProps = {
    comments: [],
  }

  state = {
    isOpen: false,
  };

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  showComments() {
    if (!this.state.isOpen) return null;
    const { comments } = this.props;
    if (comments.length > 0) {
      const commentElements = comments.map(comment =>
        <Comment key={comment.id} comment={comment} />,
      );
      return commentElements;
    }
    return <p>No comments yet</p>;
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'Close Comments' : 'Show Comments'}
        </button>
        {this.showComments()}
      </div>
    );
  }
}
