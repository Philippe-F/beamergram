import React from "react";
import { withRouter } from "react-router";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleNewPost = this.handleNewPost.bind(this);
    this.handleNavBarLogo = this.handleNavBarLogo.bind(this);
  }

  handleNewPost() {
    this.props.history.push("/posts/new");
  }

  handleNavBarLogo() {
    this.props.history.push("/posts/explore");
  }

  render() {
    return (
      <div className="navBar">
        <div className="navBarLeft">
          <a href="#/">
            <img className="icon" src={window.icon} />
          </a>
          <div className="verticalLine"></div>
          <button><h3>Beamergram</h3></button>
        </div>
        <div className="navBarRight">
          {/* <button onClick={this.handleNewPost}><img className="create" src={window.plusIcon} /></button> */}
          <a href={`#/users/${this.props.currentUser.id}`}>
            <img className="profile" src={window.profileIcon} />
          </a>
          <button onClick={this.props.logout}><img className="logout" src={window.settingsIcon} /></button>
        </div>
      </div>
    )
  }
}

export default withRouter(Navbar); 