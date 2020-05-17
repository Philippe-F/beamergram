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
        <a href="#/">
          <div className="navBarLeft">
              <img className="icon" src={window.icon} />
            <div className="verticalLine"></div>
            <h3>Beamergram</h3>
          </div>
        </a>
        <div className="navBarRight">
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