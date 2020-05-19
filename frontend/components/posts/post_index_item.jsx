import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleComment = this.handleComment.bind(this); 
    this.state = {
      body: ""
    };
  }

  handleComment(event) {
    event.preventDefault();

    if (this.state.body !== "") {
      const comment = { body: this.state.body, post_id: this.props.post.id };
      this.props.createComment(comment).then(() => {
        this.props.showPost(this.props.post.id);
      });
      this.setState({ body: "" });
    }
  };

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  };

  render() {
    let post = this.props;
    // console.log("test", post)

    let postComments = this.props.post.comments.map(comment => {
      return (
        comment.author,
        comment.body
      );
    });

    return (
      <div className="post-object">
        <div className="post-header">
          <div className="post-header-info">
            <div className="profile-photo-container">
              <a>
                <img className="profileImage" src={post.profileImage} />
              </a>
            </div>
            <div className="user-info">
              <a href={`#/users/${post.currentUserId}`}>
                <div className="post-username">{post.username}</div>
              </a>
            </div>
          </div>
        </div>
        <a href={`#/posts/${post.post.id}/show`}>
          <div className="photoUrl">
            <img src={post.photoUrl} width="500" height="500" />
          </div>
        </a>
        <div>
          <div className="post-icons-container">
            <img className="like-icon" src={window.likeIcon} />
            <div className="like-count">0 likes</div>
          </div>
        </div>
        <div className="comments-container">
          <div className="post-caption">
            <p>{post.caption}</p>
            <br></br>
            <p>{postComments[postComments.length - 1]}</p>
          </div>
        </div>
        <form className="comment-field">
          <input type="textarea"
            placeholder="Add a Comment..."
            value={this.state.body}
            onChange={this.update("body")} />
          <button onClick={this.handleComment}>Post</button>
        </form>
      </div>
    )
  }
}

export default PostIndexItem;