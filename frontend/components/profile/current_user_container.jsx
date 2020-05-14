import { connect } from "react-redux";
import { logout } from "../../actions/session_action";
import { fetchUser } from "../../actions/user_actions";
import CurrentUserProfile from "./current_user_show";

const mapStateToProps = (state, ownProps) => {
  let userPosts = null;
  let currentUser = state.entities.users[state.session.id];


  return {
    currentUser,
    userPosts,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: userId => dispatch(fetchUser(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentUserProfile);