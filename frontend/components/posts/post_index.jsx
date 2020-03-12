import React from "react";
import { withRouter } from "react-router";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNavBarLogo = this.handleNavBarLogo.bind(this);
  };

  componentDidMount() {
    this.props.allPosts();   
  }

  handleNewPost() {
    this.props.history.push("/posts/new");
  }

  handleNavBarLogo() {
    this.props.history.push("/posts/explore");
  }


  render() {
    if (this.props.posts.length === 0) return null

    const posts = this.props.posts.map((post) => {
      return (
        <PostIndexItem key={post.id} post={post} delete={this.props.deletePost} 
        photoUrl={post.photoUrl} caption={post.caption} username={post.username}
        handlePostShow={this.handlePostShow}/> 
      )
    })
 
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
              <button onClick={this.handleNewPost}><img className="create" src={window.plusIcon}/></button> 
               <a href="#/">
                 <img className="profile" src={window.profileIcon} />
               </a>
              <button onClick={this.props.logout}><img className="logout" src={window.settingsIcon}/></button>
             </div>
          </div>
        </div>
        <ul>
          {posts}
        </ul>
      </div>


    )
  }
}

export default withRouter(PostIndex); 