import uuid from 'uuid';

export default store => next => (action) => { // eslint-disable-line
  const id = uuid();
  if (!action.generateId) return next(action);
  next({
    ...action,
    randomId: id,
  });
};
