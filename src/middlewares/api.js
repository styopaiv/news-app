export default store => next => (action) => { // eslint-disable-line
  const { callApi } = action;
  if (!callApi) return next(action);
  return fetch(callApi)
    .then(res => res.json())
    .then(response => next({ ...action, response }));
};
