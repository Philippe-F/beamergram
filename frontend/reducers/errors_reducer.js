import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import postsErrorsReducer from "./posts_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  postsErrors: postsErrorsReducer,
});