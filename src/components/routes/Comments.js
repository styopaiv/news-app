import React from 'react';
// import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { mapToArr } from '../../helpers';
// import { loadPageComments } from '../../AC';

import Pagination from '../Pagination';

const Comments = ({ match }) => <Pagination page={match.params.page} />;

export default Comments;

// class Comments extends Component {
//   componentDidMount() {
//     const { loadPageComments } = this.props;
//     loadPageComments(0);
//   }

//   getComments = ({ match }) => {
//     const { pageComments } = this.props; // children warning when pageComments (it's array, not map)

//     return (
//       <div>
//         <ul>
//           {pageComments.map(comment => (<li key={comment.id}>
//             {comment.text}<b> __by {comment.user}</b>
//           </li>))}
//         </ul>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div>
//         <Route path="/comments/:page" render={this.getComments} />
//         <Pagination />
//       </div>
//     );
//   }
// }

// export default connect(state => (
//   {
//     allComments: mapToArr(state.comments.allComments),
//     pageComments: state.comments.pageComments,
//   }
// ), { loadPageComments })(Comments);
