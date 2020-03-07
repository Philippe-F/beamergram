import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  DELETE_POST,
  deletePost
} from "../actions/post_actions";

const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return Object.assign({}, state, action.posts);
    case RECEIVE_POST:
      return Object.assign({}, state, {[action.post.id]: action.post});  
    case DELETE_POST:
      let newState = Object.assign({}, state);
      delete newState[post.id]
      return newState;
    default:
      return newState;
  }
}

export default postsReducer;