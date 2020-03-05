import React from "react";


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "", 
      fullname: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemo() {
    const demo = { username: "guest", password: "password" };
    this.props.signIn(demo);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="session-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          Welcome to Beamergram!
          <br />
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="session-form">
            <label className="session-form-label">Email:
            <input
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
                className="session-input"
              />
              <br/>
            </label>
            <label className="session-form-label">Full Name:
            <input
                type="text"
                value={this.state.fullname}
                onChange={this.update("fullname")}
                className="session-input"
              />
            </label>
            <br />
            <label className="session-form-label">Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update("username")}
                className="session-input"
              />
            </label>
            <br />
            <label className="session-form-label">Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update("password")}
                className="session-input"
              />
            </label>
            <br />
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
        <button className="demo-submit" onClick={this.handleDemo}>Demo Login</button>
      </div>
    );
  }
}

export default SessionForm;