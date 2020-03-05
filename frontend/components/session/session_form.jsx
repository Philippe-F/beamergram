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
      <>
        <div className="session-form-container">
          <h1 className="logo">Beamergram</h1>
          <form onSubmit={this.handleSubmit} className="login-form-box">

            <div className="welcome-message-container">
              <p>Sign up to the see finest <br/>
                <strong>Bavarian Motor Works!</strong></p>
            </div>
            {/* Welcome to Beamergram!
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()} */}
            <div className="form-fields">
              <div className="email-container">
                <label className="session-form-label">
                <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="Email"
                    size="40"
                    className="session-input"
                  /> 
                </label>
              </div> 
              <div className="fullname-container">
              <label className="session-form-label">
                <input
                    type="text"
                    value={this.state.fullname}
                    onChange={this.update("fullname")}
                    placeholder="Full Name"
                    size="40"
                    className="session-input"
                  />
                </label>
              </div>
              <div className="username-container">
                <label className="session-form-label">
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="Username"
                    size="40"
                    className="session-input"
                  />
                </label>
              </div>
              <div className="password-container">
                <label className="session-form-label">
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="Password"
                    size="40"
                    className="session-input"
                  />
                </label>
              </div>
            </div>
          </form>

          <div className="button-container">
            <div className="submit-button-container">
              <input className="session-submit"
                type="submit"
                value={this.props.formType}
                size="40"
              />
            </div>
            <div className="demo-submit-container">
              <button className="demo-submit" 
              onClick={this.handleDemo}>Demo Login
              </button>
            </div>
          </div>

          <div className="TOS-container">
            <p>By signing up, you agree to our <br/>
              <strong>Terms, Data Policy</strong> and <strong>Cookies <br/> 
                Policy.</strong></p>
          </div>

        </div>

        <div className="footer-container">
          <p>Have an account? {this.props.navLink} </p>
        </div>
      </>
    );
  }

}

export default SessionForm;