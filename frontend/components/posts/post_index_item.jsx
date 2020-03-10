import React from "react";
import { Link } from "react-router-dom"; 


const PostIndexItem = (props) => (
  <div className="post-object">
    <div className="post-header">
      <div className="post-header-info">
        <div className="profile-photo-container">
          <a href="#/">
            <img className="profileImage" src={window.profileImage} />
          </a>
        </div>
        <div className="user-info">
          <a href="#/">
            <div className="post-username">philippelovesE30</div>
          </a>
        </div>
        </div>
        <img className="show" src={window.showIcon} />
      </div>
      <div className="photoUrl">
        <img src={props.photoUrl} />
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
          <p>{props.caption}</p>
        </div>
      </div>
      <div className="comment-field">
        <input type="text" placeholder="Add a Comment..." />
        <a>Post</a>
      </div>
    </div>









  // <li>
  //   <Link to={`/posts/${props.post.id}/show`}>Show</Link> 
  //   <Link to={`/posts/${props.post.id}/edit`}>Edit</Link> 
  //   <img src={props.photoUrl} /> 
  //   <button onClick={() => props.delete(props.post.id)}>
  //     Remove Post</button>
  // </li>
)
 
export default PostIndexItem;