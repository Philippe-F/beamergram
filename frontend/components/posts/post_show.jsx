import React from "react";
import { Link } from "react-router-dom";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.showPost(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;
    if (!post) return null;
    return (
      <ul>
        <li>{post.caption}</li>
        <li><Link>Post Index</Link></li>
      </ul>
    )
  }
}

export default PostShow; 