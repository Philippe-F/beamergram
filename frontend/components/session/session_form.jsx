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
    // this.props.history.push(`/users/${this.props.currentUser.id}`);
  }

  handleDemo() {
    const demo = { username: "KarlRapp_Admin", password: "password" };
    this.props.signIn(demo);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  };

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
        <div className="image-session-container">
          <img className="splash-image" src={window.splash_image} />

            <div className="signup-footer-container">
              <div className="session-form-container">
                <h1 className="logo">Beamergram</h1>
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                  <div className="errors-container">
                    {this.renderErrors()}
                  </div>

                    {this.props.formType === "Sign up" ?
                  <div className="welcome-message-container"> 
                    <p>Sign up to see photos of the finest <br/>
                      <strong>Bavarian Motor Works!</strong></p>
                  </div> : null
                  }

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

                    {this.props.formType === "Sign up" ?
                    <div className="fullname-container">
                      <input
                        type="text"
                        value={this.state.fullname}
                        onChange={this.update("fullname")}
                        placeholder="Full Name"
                        className="session-input"
                      />
                    </div> :null
                    }

                    <div className="session-username-container">
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
                    <strong>Terms, Data Policy</strong> and <strong>Cookies<br/> 
                      Policy.</strong></p>
                </div>
              </div>

            { this.props.formType === "Sign up" ?
            <div className="footer-text-login">
              <p>Have an account?{this.props.navLink}</p>
            </div> : 
            <div className="footer-text-signup">
              <p>Don't have an account?{this.props.navLink}</p>
            </div>
            } 
          </div>
        </div>

        <footer>
          <div className="dummy-links-div">
            <ul className="dummy-links-ul">
              <li><a href="https://philippefonzin.dev/">PORTFOLIO</a></li>
              <li><a href="https://github.com/Philippe-F">GITHUB</a></li>
              <li><a href="https://angel.co/u/philippe-fonzin">ANGELLIST</a></li>
              <li><a href="https://musicmaestro.herokuapp.com/#/">MUSIC MAESTRO</a></li>
              <li><a href="https://watch-tower-1.herokuapp.com/">WATCH TOWER</a></li>
            </ul>
          </div>
        </footer>
      </>
    );
  }
}

export default SessionForm;