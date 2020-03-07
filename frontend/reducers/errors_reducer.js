import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import posts_errors_reducer from "./posts_errors_reducer";

export default combineReducers({
  session: sessionErrorsReducer,
  posts: posts_errors_reducer,
});