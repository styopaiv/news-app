import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Pagination from '../Pagination';

const Comments = ({ match }) => {
  if (match.isExact) return <Redirect to="/comments/1" />;
  return <Route path="/comments/:page" render={getPaginator} />;
};

const getPaginator = ({ match }) => <Pagination page={match.params.page} />;
export default Comments;
