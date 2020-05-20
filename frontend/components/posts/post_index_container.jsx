import React from "react";
import { connect } from "react-redux";
import PostIndex from "./post_index";
import { allPosts, destroyPost } from "../../actions/post_actions"
import { logout } from "../../actions/session_action";
import { fetchUser } from "../../actions/user_actions";
import { showPost } from "../../actions/post_actions";
import { createLike, deleteLike } from "../../actions/like_actions";
import {
  createComment,
  fetchPostComments,
  deleteComment,
  clearErrors
} from "../../actions/comment_actions";

 
const mapStateToProps = (state) => {
  const sessionId = state.session.id
  const users = state.entities.users
  return { 
    posts: Object.values(state.entities.posts),
    currentUser: users[sessionId], 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allPosts: () => dispatch(allPosts()), 
    deletePost: (postId) => dispatch(destroyPost(postId)),
    logout: () => dispatch(logout()),
    fetchPostComments: postId => dispatch(fetchPostComments(postId)),
    createComment: comment => dispatch(createComment(comment)),
    deleteComment: id => dispatch(deleteComment(id)),
    showPost: id => dispatch(showPost(id)),
    createLike: id => dispatch(createLike(id)),
    deleteLike: id => dispatch(deleteLike(id))
  }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex); 
