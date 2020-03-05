import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, signup} from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign up",
    navLink: <Link to="/login">Log in</Link>,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    signIn: (user) => dispatch(signIn(user))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 