import React from "react";
import { Link } from "react-router-dom";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(event) {
    // forms are http requests so we have to prevent the default action 
    // of submitting the form

    // handleSubmit is called on the window so we must bind
    event.preventDefault();
  };

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result});
    }

    if (file) {
      fileReader.readAsDataURL(file);
    }
  };

  handleFileSubmit(e) {
    e.preventDefault();
    // create a new formData object
    if (this.props.postId) {
      this.props.action(this.state, this.props.postId)
      .then(this.props.history.push("/posts/explore"))
    } else {
      const formData = new FormData();
      // append data into the formData object
      formData.append("post[caption]", this.state.caption);
      formData.append("post[photo]", this.state.photoFile);
      this.props.action(formData)
    }
  };

  render() {
    const preview = this.state.photoUrl ? 
    <img src={this.state.photoUrl} /> : null

    return (
      <div className="webpage">
        <div className="feed">
          <div className="navBar">
            <div className="navBarLeft">
              <a href="#/">
                <img className="icon" src={window.icon} />
              </a>
              <div className="verticalLine"></div>
              <button onClick={this.handleNavBarLogo}>
                <h3>Beamergram</h3></button>
            </div>
            <div className="navBarRight">
              <a href="#/">
                <img className="profile" src={window.profileIcon} />
              </a>
              <button onClick={this.props.logout}>
                <img className="logout" src={window.settingsIcon} /></button>
            </div>
          </div>
        </div>
        <div className="new-post-object">
          <div className="create-form-header">
            <h2 className="new-post-header">Upload an Image</h2>
            <div>
              <form onSubmit={this.handleFileSubmit}>
                { this.props.formType === "Create Post" ?
                <div>
                  <input type="file" onChange={this.handleFile} />
                </div> : null 
                }
                <div className="upload-preview">
                </div>
                <div>
                  {preview} 
                </div>
                <div>
                  <input className="caption-input" type="textarea" 
                  value={this.state.caption} 
                  placeholder="Caption" 
                  onChange={this.update("caption")} />
                </div>
                <button className="submit-button" 
                type="submit" 
                value={this.props.formType}>
                  {this.props.formType}</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostForm;