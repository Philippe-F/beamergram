import React from "react";
import { Link } from "react-router-dom"; 


const PostIndexItem = (props) => (
  <div className="post-object">
    <div className="post-header">
      <div className="post-header-info">
        <div className="profile-photo-container">
          <a>
            <img className="profileImage" src={props.profileImage} />
          </a>
        </div>
        <div className="user-info">
          <a href={`#/users/${props.currentUserId}`}>
            <div className="post-username">{props.username}</div>
          </a>
        </div>
        </div>
        {/* <Link to={`/posts/${props.post.id}/show`}><img className="show" src={window.showIcon} /></Link> */}
      </div>
      <a href={`#/posts/${props.post.id}/show`}>
        <div className="photoUrl">
        <img src={props.photoUrl} width="500" height="500"/>
        </div>
      </a>
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
          <p>{props.caption}</p>
        </div>
      </div>
      <div className="comment-field">
        <input type="textarea" placeholder="Add a Comment..." />
        <a>Post</a>
      </div>
    </div>
)
 
export default PostIndexItem;