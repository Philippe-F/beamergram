import React from "react";
import PostIndexItem from "./post_index_item";

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
        <PostIndexItem key={post.id} post={post} delete={this.props.deletePost} 
        photo={post.photoUrl}/>
      )
    })

    return (
      <ul>
        { posts } 
      </ul>
    )
  }
}

export default PostIndex; 