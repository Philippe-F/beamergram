import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class PostShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleComment = this.handleComment.bind(this); 
    this.handleLike = this.handleLike.bind(this);
    this.isLiked = this.isLiked.bind(this);
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

  componentDidMount() {
    this.props.showPost(this.props.match.params.postId);
  }

  render() {
    const { post } = this.props;
    if (!post) {
      return (
        <div>
          <h2>Post Does Not Exist</h2>
        </div>
      )
    }
    const comments = post.comments.slice(Math.max(post.comments.length - 7, 0)).map(comment => {
      return (
        <ul key={comment.id} className="comment-list">
          <strong>{comment.author}</strong><li className="comment-item">{comment.body}</li>
        </ul>
      )
    })
    return (
      <div className="webpage">
        <div className="feed">
          <NavbarContainer />
          <div className="post-box">
            <div className="img-box">
              <img className="img-box-image" src={post.photoUrl} height="100%"/>
            </div>
            <div className="right-side">
              <div className="user-info">
                <div className="post-header-info urn">
                  <a href={`#/users/${post.user_id}`} className="click-username">
                    <img className="profileImage pi" src={post.profileImage} />
                    <div className="post-username pu">{post.username}</div>
                  </a>
                  { post.user_id === this.props.currentUser.id ? (
                   <a href={`#/posts/${post.id}/edit`} className="post-show-edit">Edit Post</a>
                    ) : (
                      null
                    )
                  }
                </div>
                
                <div className="comments-box">
                  <div className="comment-lis">{comments}</div>
                </div>
                <div className="like-box">
                  <div className="post-icons-container pic">
                    {this.isLiked().includes(this.props.currentUser.id) ? (
                      <img className="like-icon" src={window.fullLikeIcon} onClick={this.handleLike} />
                      ) : (
                        <img className="like-icon" src={window.likeIcon} onClick={this.handleLike} />
                      )
                    }
                    <div className="like-count">{this.props.post.likes.length} likes</div>
                  </div>
                  <form className="comment-field cf">
                    <input className="show-com"
                    type="textarea"
                      placeholder="Add a Comment..."
                      value={this.state.body}
                      onChange={this.update("body")} />
                    <button onClick={this.handleComment}>Post</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default PostShow; 