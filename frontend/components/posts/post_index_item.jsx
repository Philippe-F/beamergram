import React from "react";
import { Link } from "react-router-dom"; 


const PostIndexItem = (props) => (
  <li>
    <Link to={`/posts/${props.post.id}`}>Show</Link> 
    <Link to={`/posts/${props.post.id}/edit`}>Edit</Link> 
    <button onClick={() => this.props.destroyPost(this.props.post.id)}>
      Remove Post</button>
  </li>
)

export default PostIndexItem;