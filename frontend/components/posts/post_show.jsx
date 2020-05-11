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
      <div className="webpage">
        <div className="feed">
          <div className="navBar">
            <div className="navBarLeft">
              <a href="#/">
                <img className="icon" src={window.icon} />
              </a>
              <div className="verticalLine"></div>
              <button onClick={this.handleNavBarLogo}><h3>Beamergram</h3></button>
            </div>
            <div className="navBarRight">
              <a href="#/">
                <img className="profile" src={window.profileIcon} />
              </a>
              <button onClick={this.props.logout}><img className="logout" src={window.settingsIcon} /></button>
            </div>
          </div>
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