import React from "react";
import { withRouter } from "react-router";
import PostIndexItem from "./post_index_item";
import NavbarContainer from "../navbar/navbar_container";
import CreatePostFormContainer from "./create_post_form_container";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal:false}; 
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNavBarLogo = this.handleNavBarLogo.bind(this);
    // this.openModal = this.openModal.bind(this); 
    // this.closeModal = this.closeModal.bind(this);
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

  // openModal() {
  //   this.setState({modal:true})
  // }

  // closeModal() {
  //   this.setState({modal:false})
  // }


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
      <>
      {/* <div className="background" onClick={this.closeModal}></div> */}
      <div className="webpage">
        <div className="feed">
          {/* <div className="navBar">
            <div className="navBarLeft">
               <a href="#/">
                 <img className="icon" src={window.icon} />
              </a>
               <div className="verticalLine"></div>
              <button><h3>Beamergram</h3></button> 
             </div>
             <div className="navBarRight">
              <button onClick={this.handleNewPost}><img className="create" src={window.plusIcon}/></button> 
               <a href="#/">
                 <img className="profile" src={window.profileIcon} />
               </a>
              <button onClick={this.props.logout}><img className="logout" src={window.settingsIcon}/></button>
             </div>
          </div> */}
          {/* {this.state.modal && <CreatePostFormContainer/>} */}
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