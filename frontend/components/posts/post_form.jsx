import React from "react";

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
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
    this.setState({photoFile: e.currentTarget.files[0]});
  };

  render() {
    return (
      <div>
        <h2>{this.props.formType}</h2>

        <form onSubmit={this.handleSubmit}>
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