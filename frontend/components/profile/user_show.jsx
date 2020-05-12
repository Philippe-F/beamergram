import React from "react";
import { withRouter } from "react-router-dom";

class UserShow extends React.Component {
  constructor(props) {
    super(props);

    this.userPosts = this.props.userPosts;
    this.currentUser = this.props.currentUser;
    this.logout = this.props.logout;
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  handleDeleteUser(e) {
    e.preventDefault();
    window.confirm("Are you sure you want to delete this account?") &&
      this.props.deleteUser(this.props.userProfile.id);
  }

  handleEditUser(e) {
    e.preventDefault();
    this.props.history.push(`/edit_profile`);
  }

  render() {
    if (!this.props.userProfile) {
      return <h2>User Does Not Exist</h2>;
    }

    return (
      <div>User Profile Page</div>
    )
  }
}

export default withRouter(UserShow);