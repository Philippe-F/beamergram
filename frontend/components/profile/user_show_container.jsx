import { connect } from "react-redux";
import { fetchUser, deleteUser } from "../../actions/user_actions";
import { logout } from "../../actions/session_action";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  const profileId = ownProps.match.params.userId;
  const userProfile = state.entities.users[profileId];

  let userPosts = null;
  let currentUser = state.entities.users[state.session.id];

  return {
    currentUser,
    userPosts,
    userProfile,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);