import { connect } from "react-redux";
import { showPost } from "../../actions/post_actions";
import PostShow from "./post_show";
import { logout } from "../../actions/session_action";
import { createLike, deleteLike } from "../../actions/like_actions";
import {
  createComment,
  fetchPostComments,
  deleteComment,
  clearErrors
} from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];
  const sessionId = state.session.id;
  const users = state.entities.users;

  return {
    post: post,
    currentUser: users[sessionId]
  }
};

const mapDispatchToProps = (dispatch) => ({
  showPost: (postId) => dispatch(showPost(postId)),
  logout: () => dispatch(logout()),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id)),
  createComment: comment => dispatch(createComment(comment)),
  deleteComment: id => dispatch(deleteComment(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);