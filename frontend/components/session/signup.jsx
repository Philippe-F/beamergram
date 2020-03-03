import React from "react";

class Signup extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      username: "",
      email: "",
      password: "",
    }
  }

  handleInput(type) {
    return(e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createNewUser(this.state)
  }

  render() {
    return (
    <div></div>
    );
  }
};

export default Signup;