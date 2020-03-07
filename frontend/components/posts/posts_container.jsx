import React from "react";
import { connect } from "react-redux";
import { createPost } from "../../actions/post_actions"
import PostForm from "./post_form";


const mapStateToProps = (state) => {
  return {
    posts: state.entities.posts,
    formType: "Posts",
    post_button: <Link to="/posts"></Link>
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (post) => dispatch(createPost(post)),
  }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(PostForm); 