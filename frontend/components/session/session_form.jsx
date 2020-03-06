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
          <form onSubmit={this.handleSubmit} className="signup-form-box">
            <div className="errors-container">
              {this.renderErrors()}
            </div>
            <div className="welcome-message-container"> 
              <p>Sign up to see photos of the finest <br/>
                <strong>Bavarian Motor Works!</strong></p>
            </div>
            <div className="form-fields">
              { this.props.formType === "Sign up" ?
              <div className="email-container">
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update("email")}
                  placeholder="Email"
                  className="session-input"
                /> 
                </div> : null 
              } 
              <div className="fullname-container">
                <input
                  type="text"
                  value={this.state.fullname}
                  onChange={this.update("fullname")}
                  placeholder="Full Name"
                  className="session-input"
                />
              </div>
              <div className="username-container">
                <input type="text"
                  value={this.state.username}
                  onChange={this.update("username")}
                  placeholder="Username"
                  // size="40"
                  className="session-input"
                />
              </div>
              <div className="password-container">
                <input type="password"
                  value={this.state.password}
                  onChange={this.update("password")}
                  placeholder="Password"
                  className="session-input"
                />
              </div>
            </div>

            <div className="button-container">
              <div className="submit-button-container">
                <input className="session-submit"
                  type="submit"
                  value={this.props.formType}
                />
              </div>
            </div>
          </form>
          <div className="demo-submit-container">
            <button className="demo-submit"
              onClick={this.handleDemo}>Demo Login
              </button>
          </div>

          <div className="TOS-container">
            <p>By signing up, you agree to our <br/>
              <strong>Terms, Data Policy</strong> and <strong>Cookies <br/> 
                Policy.</strong></p>
          </div>
        </div>
        { this.props.formType === "Sign up" ?
        <div className="footer-container">
          <p>Have an account? {this.props.navLink}</p>
        </div> : null
        }
      </>
    );
  }

}

export default SessionForm;