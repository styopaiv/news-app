import { normalizedComments as defaultComments } from '../fixtures';
import { } from '../constants';

const commentsMap = defaultComments.reduce((acc, comment) =>
  acc.set(comment.id, comment), new Map());

export default (commentsState = commentsMap, action) => {
  // console.log(defaultComments);
  const { type, payload } = action;

  switch (type) {
    default: // nothing
  }

  return commentsState;
};
