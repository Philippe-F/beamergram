import { connect } from "react-redux";
import { fetchUser, deleteUser } from "../../actions/user_actions";
import { logout } from "../../actions/session_action";
import { createFollow, deleteFollow } from "../../actions/follow_actions";
import UserShow from "./user_show";

const mapStateToProps = (state, ownProps) => {
  const profileId = ownProps.match.params.userId;
  const userProfile = state.entities.users[profileId];

  let userPosts = null;
  let followBool = false;
  let followerIds = null;
  let currentUser = state.session.id;


  if (userProfile) {
    userPosts = Object.values(state.entities.posts).filter(
      post => post.user_id === userProfile.id
    );

    (followerIds = userProfile.followerIds),
    (followBool = followerIds.includes(currentUser.id));
  }

  return {
    currentUser,
    userPosts,
    userProfile,
    followerIds,
    followBool,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  deleteUser: userId => dispatch(deleteUser(userId)),
  logout: () => dispatch(logout()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: follow => dispatch(deleteFollow(follow)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);