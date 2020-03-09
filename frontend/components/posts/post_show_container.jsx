import { connect } from "react-redux";
import { showPost } from "../../actions/post_actions";
import PostShow from "./post_show";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.posts[postId];

  return {
    post: post, 
  }
}

const mapDispatchToProps = (dispatch) => ({
  showPost: (postId) => dispatch(showPost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);