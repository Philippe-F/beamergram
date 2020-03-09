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
        <Link to={`/`}>Post Index</Link>
      </ul>
    )
  }
}

export default PostShow; 