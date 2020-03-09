import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  DELETE_POST,
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, newState, action.posts);
    case RECEIVE_POST:
      newState[action.post.id] = action.post; 
      return newState 
    case DELETE_POST:
      delete newState[action.postId]
      return newState;
    default:
      return state;
  }
}
 
export default postsReducer;