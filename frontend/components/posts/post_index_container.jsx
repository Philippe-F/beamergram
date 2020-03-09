import React from "react";
import { connect } from "react-redux";
import PostIndex from "./post_index";
import { allPosts, destroyPost } from "../../actions/post_actions"


const mapStateToProps = (state) => {
  return { 
    posts: Object.values(state.entities.posts),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    allPosts: () => dispatch(allPosts()), 
    deletePost: (postId) => dispatch(destroyPost(postId)),
  }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex); 