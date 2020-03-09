import { connect } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { signIn, signup, clearErrors} from "../../actions/session_action";
import SessionForm from "./session_form";

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: "Sign up",
    navLink: <Link to="/login"><input 
    className="footer-link" type="submit" value="Log in"/></Link>,
  };
};
 
const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    signIn: (user) => dispatch(signIn(user)),
    clearErrors: () => dispatch(clearErrors()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm); 