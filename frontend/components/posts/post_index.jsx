import React from "react";
import { withRouter } from "react-router";
import PostIndexItem from "./post_index_item";
import NavbarContainer from "../navbar/navbar_container";

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
        profileImage={post.profileImage} postCreator={post.user_id}
        createComment={this.props.createComment} currentUser={this.props.currentUser}
        fetchPostComments={this.props.fetchPostComments} 
        deleteComment={this.props.deleteComment} showPost={this.props.showPost} 
        createLike={this.props.createLike} deleteLike={this.props.deleteLike}/> 
      )
    })

    return (
      <>
      <div className="webpage">
        <div className="feed">
          <NavbarContainer />
        </div>
        <ul>
          {posts}
        </ul>
      </div>
      </>

    )
  }
}

export default withRouter(PostIndex); 