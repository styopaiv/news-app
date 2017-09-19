import React from 'react';

export default function Comment({ comment }) {
  return (
    <div>
      <p>{comment.text}<b> __by {comment.user}</b></p>
    </div>
  );
}
