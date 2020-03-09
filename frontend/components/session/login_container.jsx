import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, clearErrors } from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Login",
    navLink: <Link to="/signup"><input
    className="footer-link" type="submit" value="Sign up" /></Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signIn(user)),
    signIn: (user) => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);