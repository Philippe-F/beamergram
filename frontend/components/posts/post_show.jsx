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
              <button onClick={this.handleNewPost}><img className="create" src={window.plusIcon} /></button>
              <a href="#/">
                <img className="profile" src={window.profileIcon} />
              </a>
              <button onClick={this.props.logout}><img className="logout" src={window.settingsIcon} /></button>
            </div>
            <div className="image-show">
              <div className="post">    
                <div className="post">
                  <div className="post-title">
                    <a href="#/users/1/profile">{}</a>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    )
  }
}


{/* <ul>
  <li>{post.caption}</li>
  <Link to={`/posts/explore`}>Post Index</Link>
  <img src={post.photoUrl} />
</ul> */}

export default PostShow; 