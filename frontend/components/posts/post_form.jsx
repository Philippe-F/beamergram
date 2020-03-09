import React from "react";

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
    this.props.action(this.state);
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
    const formData = new FormData();
    // append data into the formData object
    formData.append("post[caption]", this.state.caption);
    formData.append("post[photo]", this.state.photoFile);
    this.props.action(formData) 
  };

  render() {
    return (
      <div>
        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleFileSubmit}>
          <label>Caption
            <input type="textarea" value={this.state.caption} onChange={this.update("caption")}/>
          </label>
          <input type="file" 
          onChange={this.handleFile}/>
          <button type="submit" value={this.props.formType} /> 
        </form>
      </div>
    )
  }
}

export default PostForm;