import React from "react";
import { connect } from "react-redux";
import PostIndex from "./post_index";
import { allPosts, destroyPost } from "../../actions/post_actions"
import { logout } from "../../actions/session_action";

 
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
  }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex); 