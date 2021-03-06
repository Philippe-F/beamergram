import { RECEIVE_CURRENT_USER } from "../actions/session_action";
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from "../actions/follow_actions";
import {
  RECEIVE_USER,
  RECEIVE_ALL_USERS,
  REMOVE_USER
} from "../actions/user_actions";

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.currentUser.id] = action.currentUser;
      return newState
    case RECEIVE_USER:
      newState[action.user.id] = action.user;
      return newState
    case RECEIVE_ALL_USERS:
      return ({}, newState, action.users);
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    case RECEIVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds.push(
        action.follow.user_id
      );
      newState[action.follow.user_id].followingIds.push(
        action.follow.followed_user_id
      );
      return newState;
    case REMOVE_FOLLOW:
      newState[action.follow.followed_user_id].followerIds = newState[
        action.follow.followed_user_id
      ].followerIds.filter(userId => userId !== action.follow.user_id);
      newState[action.follow.user_id].followingIds = newState[
        action.follow.user_id
      ].followingIds.filter(
        followedId => followedId !== action.follow.followed_user_id
      );
      return newState;

    default:
      return state;
  }
};

export default usersReducer;