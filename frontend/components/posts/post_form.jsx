import React from "react";
import NavbarContainer from "../navbar/navbar_container"; 

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleFileSubmit = this.handleFileSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
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
      // .then(this.props.history.push("/posts/explore"))
    } else {
      const formData = new FormData();
      // append data into the formData object
      formData.append("post[caption]", this.state.caption);
      formData.append("post[photo]", this.state.photoFile);
      this.props.action(formData)
    }
    this.props.history.push("/posts/explore")
  };

  handleCancel(event) {
    event.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  render() {

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
            <div>
              <form onSubmit={this.handleFileSubmit}>
                { this.props.formType === "Create Post" ?
                <div>
                  <input className="new-file" type="file" onChange={this.handleFile} />
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

export default PostForm;