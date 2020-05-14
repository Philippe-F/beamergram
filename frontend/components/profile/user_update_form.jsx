import React from "react";
import { withRouter } from "react-router-dom";
import NavbarContainer from "../navbar/navbar_container";

class UserUpdateForm extends React.Component {
  constructor(props) {
    super(props);

    let { currentUser } = this.props;
    this.state = {
      username: currentUser.username,
      email: currentUser.email,
      bio: currentUser.bio,
      photoUrl: currentUser.photoUrl,
      photoFile: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.update = this.update.bind(this);
  }

  handleFile(event) {
    const fileReader = new FileReader();
    const file = event.currentTarget.files[0];

    fileReader.onloadend = () =>
      this.setState({ photoUrl: fileReader.result, photoFile: file });

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.props.currentUser.username === "testt") {
      window.alert(
        "Bummer, you cannot modify the demo user. Create a new account to test out all of our amazing features"
      );
    } else {
      const formData = new FormData();
      formData.append("user[id]", this.props.currentUser.id);
      formData.append("user[username]", this.state.username);
      formData.append("user[email]", this.state.email);
      formData.append("user[bio]", this.state.bio);

      if (this.state.photoFile) {
        formData.append("user[photo]", this.state.photoFile);
      }

      this.props.updateUser(formData, this.props.userId).then(response => {
        this.props.history.push(`/users/${response.user.id}`);
      });
    }
  }

  update(field) {
    return event => {
      this.setState({ [field]: event.target.value });
    };
  }

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  render() {
    let imagePreview = (
      <div className="preview-container">
        <div className="profile-pic-container">Profile Image</div>
        <div className="img-container">
          <img className="img-preview" src={this.state.photoUrl} />
        </div>
      </div>
    );

    return (
      <div>
        <div className="update-webpage">
          <NavbarContainer />
          <form className="update-form" onSubmit={this.handleSubmit}>
            <div className="user-info-container">
              <div className="username-container">
                <div>{this.props.currentUser.username}</div>
              </div>
              <div className="user-attributes">
                <div className="adjust">
                  <label className="photo" htmlFor="file-selector">
                    <div className="text">
                      Update Profile Image
                    </div>
                    <input
                      className="photo-input"
                      id="file-selector"
                      type="file"
                      onChange={this.handleFile}
                    />
                  </label>
                </div>
                <label className="adjust">
                  <div className="text">Update Email</div>
                  <input
                    type="text"
                    className="text-input"
                    placeholder={this.state.email}
                    onChange={this.update("email")}
                  />
                </label>
                <label className="adjust">
                  <div className="text">Update Username</div>
                  <input
                    type="text"
                    placeholder={this.state.username}
                    onChange={this.update("username")}
                  />
                </label>
                <label className="adjust">
                  <div className="text">Update Bio</div>
                  <textarea
                    type="text"
                    className="update-bio"
                    placeholder={this.state.bio}
                    onChange={this.update("bio")}
                  ></textarea>
                </label>
              </div>
              <div className="buttons-container">
                <div className="form-buttons">
                  <button
                    className="upload-button"
                    type="submit"
                  >
                    Update Profile
                  </button>
                  
                  <button
                    className="cancel-button"
                    onClick={this.handleCancel}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
            <div className="update-container">{imagePreview}</div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UserUpdateForm);