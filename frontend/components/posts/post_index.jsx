import React from "react";
import PostIndexItem from "./post_index_item";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.allPosts();   
  }

  render() {
    if (this.props.posts.length === 0) return null

    const posts = this.props.posts.map((post) => {
      return (
        <PostIndexItem key={post.id} post={post} delete={this.props.deletePost} 
        photoUrl={post.photoUrl} caption={post.caption}/>
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
               <a href="#/">
                 <h3>Beamergram</h3> 
               </a>
             </div>
             <div className="navBarRight">
               <img className="create" src={window.plusIcon} /> 
               <a href="#/">
                 <img className="profile" src={window.profileIcon} />
               </a>
               <img className="logout" src={window.settingsIcon} />
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

export default PostIndex; 