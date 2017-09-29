import { INCREMENT, RESET } from '../constants';

export default (count = 0, action) => {
  const { type } = action;
  switch (type) {
    case INCREMENT: return count + 1;
    case RESET: return 0;
    default: // nothing,
  }
  return count;
};
