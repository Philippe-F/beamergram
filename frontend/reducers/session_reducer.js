import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER
} from "../actions/session_action";

const nullSession = {
  currentUser: null, 
}

export default (state = nullSession, action) => {
  Object.freeze(state); 

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { id: action.currentUser.id });
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default: 
    return state;
  }
}