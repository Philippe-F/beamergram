import React from "react";
import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost, showPost } from "../../actions/post_actions";

const mapStateToProps = (state, ownProps) => {
  const postId = ownProps.match.params.postId;
  const post = state.entities.posts[postId];

  return {
    postId: postId,
    post: post,
    formType: "Update Post",
  };
}

const mapDispatchToProps = (dispatch) => ({
  getPost: (postId) => dispatch(showPost(postId)),
  action: (postId) => dispatch(updatePost(postId)),
});


class EditPostForm extends React.Component {

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  };

  render() {
    const { action, formType, post } = this.props

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post} />
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);