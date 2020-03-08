import React from "react";
import { deletePost } from "../../actions/post_actions";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allPosts();   
  }

  render() {
    const posts = this.props.posts.map((post) => {
      return (
        <ul> 
          <PostIndexItem id={post.id} post={post} delete={this.props.deletePost}/>
        </ul>
      )
    })
  }
}

export default PostIndex; 