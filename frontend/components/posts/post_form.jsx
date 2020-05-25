import React from "react";
import NavbarContainer from "../navbar/navbar_container"; 
import { withRouter } from "react-router";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.errors = this.errors.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(event) {
    // forms are http requests so we have to prevent the default action 
    // of submitting the form

    // handleSubmit is called on the window so we must bind
    event.preventDefault();
    if (this.props.formType === "Update Post") {
      this.props.action(this.state, this.props.postId);
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    } else if (this.state.caption && this.state.photoUrl) {
      const formData = new FormData();
      formData.append("post[caption]", this.state.caption);
      formData.append("post[photo]", this.state.photoFile);

      this.props.action(formData).then(() => {
        this.props.history.push(`/users/${this.props.currentUser.id}`);
      });
    }
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

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  errors() {
    if (!this.state.caption || !this.state.photoUrl) {
      return <span className="no-file">Image and Caption Required</span>;
    }
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deletePost(this.state.id);
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  render() {
    console.log("state", this.state)
    console.log("props", this.props)
    let imagePreview;

    if (this.state.photoUrl) {
      imagePreview = (
        <div className="preview-container">
          <div className="img-container">
            <img className="img-preview" src={this.state.photoUrl} />
          </div>
        </div>
      );
    } else {
      imagePreview = (
        <div className="preview-container">
          <div className="preview-outline">

          </div>
        </div>
      );
    }

    return (
      <div className="webpage">
        <div className="feed">
          <NavbarContainer />
        </div>
        <div className="new-post-object">
          <div className="create-form-header">
            <h2 className="new-post-header">Upload an Image</h2>
            { this.props.formType === "Update Post" ? 
              <button className="post-delete-btn" onClick={this.handleDelete}>
                Delete Post
              </button> : null
            }
            <div>
              <form onSubmit={this.handleSubmit}>
                <div className="errors-container">
                  <ul className="login-errors">{this.errors()}</ul>
                </div>

                { this.props.formType === "Create Post" ?
                <div className="new-file">
                  <input type="file" onChange={this.handleFile} />
                </div> : null 
                }
                <div>
                  {imagePreview} 
                </div>
                <div>
                  <textarea className="caption-input" 
                  value={this.state.caption} 
                  placeholder="Caption" 
                  onChange={this.update("caption")} />
                </div>
                <button className="submit-button" 
                type="submit" 
                value={this.props.formType}>
                  {this.props.formType}
                </button>
                <button className="submit-button can" onClick={this.handleCancel}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(PostForm);