import React from "react";
import { Link } from "react-router-dom";

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleComment = this.handleComment.bind(this); 
    this.handleLike = this.handleLike.bind(this); 
    this.isLiked = this.isLiked.bind(this);
    this.state = {
      body: ""
    };
  }

  isLiked() {
    const posts = this.props.post.likes;

    let mapped = posts.map(ele => {
      return ele.user_id;
    })

    return mapped;
  };

  handleLike(event) {
    event.preventDefault();
    this.props.createLike({ post_id: this.props.post.id })
    .then(() => this.props.showPost(this.props.post.id));
  };

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

    let postComments = this.props.post.comments.map(comment => {
      return (
        <div className="comment-div">
          <Link className="profile-link" to={`/users/${comment.user_id}`}>
            {comment.author}
          </Link>
          <span className="comment-body">&nbsp;{comment.body}</span>
        </div>
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
              <a href={`#/users/${post.postCreator}`}>
                <div className="post-username">{post.username}</div>
              </a>
            </div>
          </div>
        </div>
        <a href={`#/posts/${post.post.id}/show`}>
          <div className="photoUrl">
            <img src={post.photoUrl} width="500" />
          </div>
        </a>
        <div className="post-icons-container">
          { this.isLiked().includes(this.props.currentUser.id) ? (
            <img className="like-icon" src={window.fullLikeIcon} onClick={this.handleLike}/>
          ) : (
            <img className="like-icon" src={window.likeIcon} onClick={this.handleLike} />
          )
          }
          <div className="like-count">{this.props.post.likes.length} likes</div>
        </div>
        <div className="comments-container">
          <div className="post-caption">
            <span>{post.caption}</span>
            <div>{postComments[postComments.length - 1]}</div>
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