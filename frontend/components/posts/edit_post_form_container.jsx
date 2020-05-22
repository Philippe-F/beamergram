import React from "react";
import { connect } from "react-redux";
import EditPostForm from "./edit_post_form";
import { updatePost, showPost, destroyPost } from "../../actions/post_actions";


const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];
  let currentUser = state.entities.users[state.session.id];

  return {
    currentUser,
    postId: postId,
    post: post,
    formType: "Update Post",
  };
}

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(showPost(postId)),
  action: (post, postId) => dispatch(updatePost(post, postId)),
  deletePost: (postId) => dispatch(destroyPost(postId)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);