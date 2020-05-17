import { connect } from "react-redux";
import { logout } from "../../actions/session_action";
import Navbar from "./navbar"; 

const mapStateToProps = (state, ownProps) => {
  const sessionId = state.session.id
  const users = state.entities.users
  return {
    currentUser: users[sessionId],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}; 

export default connect(mapStateToProps, mapDispatchToProps)(Navbar); 