import { connect } from "react-redux";
import { showPost } from "../../actions/post_actions";
import PostShow from "./post_show";
import { logout } from "../../actions/session_action";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];

  return {
    post: post,
  }
};

const mapDispatchToProps = (dispatch) => ({
  showPost: (postId) => dispatch(showPost(postId)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);