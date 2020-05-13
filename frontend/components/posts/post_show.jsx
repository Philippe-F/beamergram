import React from "react";
import { Link } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

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
      <div className="webpage">
        <div className="feed">
          <NavbarContainer />
          <div className="post-object">
            <div className="post-header">
              <div className="post-header-info">
                <div className="profile-photo-container">

                  <a href="#/">
                    <img className="profileImage" src={window.profileImage} /> {/*CHANGE*/}
                  </a>
                </div>
                <div className="user-info">
                  <a href="#/">
                    <div className="post-username">{post.username}</div>
                  </a>
                </div>
              </div> 
              <button className="show" onClick={this.props.delete}>Remove</button>
              <Link to={`/posts/${post.id}/edit`}><img className="show" src={window.showIcon} /></Link>
            </div>
            <div className="photoUrl">
              <img src={post.photoUrl} />
            </div>

            <div>
              <div className="post-icons-container">
                <img className="like-icon" src={window.likeIcon} />
                <a href="#/">
                  <img className="comment-icon" src={window.commentIcon} />
                </a>
                <div className="like-count">0 likes</div>
              </div>
            </div>
            <div className="comments-container">
              <div className="post-caption">
                <p>{post.caption}</p>
              </div>
            </div>
            <div className="comment-field">
              <input type="textarea" placeholder="Add a Comment..." />
              <a>Post</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default PostShow; 