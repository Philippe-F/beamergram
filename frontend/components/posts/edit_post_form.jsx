import React from "react";
import PostForm from "./post_form";
import { withRouter } from "react-router";

class EditPostForm extends React.Component {
  constructor(props) {
    super(props); 
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.postId);
  };

  render() {
    const { action, formType, post, deletePost } = this.props

    if (!post) return null;
    return (
      <PostForm
        action={action}
        formType={formType}
        post={post}
        postId={post.id}
        deletePost={deletePost}
        currentUser={this.props.currentUser} />
    )
  };
}

export default withRouter(EditPostForm); 