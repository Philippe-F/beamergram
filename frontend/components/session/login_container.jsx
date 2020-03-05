import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "login",
    navLink: <Link to="/signup">sign up instead</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signIn(user)),
    signIn: (user) => dispatch(signIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);