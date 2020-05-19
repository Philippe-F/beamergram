// import {
//   RECEIVE_POST_COMMENTS,
//   RECEIVE_COMMENT,
//   REMOVE_COMMENT
// } from "../actions/comment_actions";

// const commentsReducer = (state = {}, action) => {
//   Object.freeze(state);

//   let newState;

//   switch (action.type) {
//     case RECEIVE_POST_COMMENTS:
//       return action.comments;
//     case RECEIVE_COMMENT:
//       return newState[action.comment.comment.id] = action.comment.comment;
//     case REMOVE_COMMENT:
//       delete newState[action.comment.comment.id];
//       return newState;
//     default:
//       return state;
//   }
// };
// export default commentsReducer;