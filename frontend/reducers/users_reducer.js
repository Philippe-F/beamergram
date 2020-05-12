import { RECEIVE_CURRENT_USER } from "../actions/session_action";
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
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return ({}, newState, { [action.user.id]: action.user });
    case RECEIVE_ALL_USERS:
      return ({}, newState, action.users);
    case REMOVE_USER:
      delete newState[action.user.id];
      return newState;
    default:
      return state;
  }
};

export default usersReducer;