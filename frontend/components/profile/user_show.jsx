import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.userPosts = this.props.userPosts;
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
    this.handleEditUser = this.handleEditUser.bind(this);
    this.handleDeleteUser = this.handleDeleteUser.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  handleDeleteUser(event) {
    event.preventDefault();
    window.confirm("Are you sure you want to delete this account?") &&
      this.props.deleteUser(this.props.userProfile.id);
  }

  handleEditUser(event) {
    event.preventDefault();
    this.props.history.push(`/edit-profile`);
  }

  render() {
    if (!this.props.userProfile) {
      return <h2>User Does Not Exist</h2>;
    }

    const {
      username,
      photoUrl,
      id,
    } = this.props.userProfile;

    return (
      <div>
        
        <div className="profile-webpage">
          <NavbarContainer />
          <div className="profile-left"></div>
          <div className="profile-container">
            <div className="profile-head">
              <div className="profile-pic-container">
                <img className="profile-pic" 
                src={photoUrl} 
                />
              </div>
              <div className="profile-head-right">
                <div className="profile-username">
                  <h1>{username}</h1>
                  {id === this.props.currentUser.id ? (
                    <div className="profile-head-buttons">
                      <button className="profile-button" 
                      // onClick={}
                      >
                        Log Out
                      </button>
                      <button
                        className="profile-button"
                        onClick={this.handleEditUser}
                      >
                        Edit Profile
                      </button>
                      <button
                        className="profile-button"
                        // onClick={}
                      >
                        Add Photo
                      </button>
                    </div>
                  ) : (
                    <div>nope.</div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(UserShow);