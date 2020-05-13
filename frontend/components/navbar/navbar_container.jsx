import { connect } from "react-redux";
import { logout } from "../../actions/session_action";

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  }
}; 

export default connect(null, mapDispatchToProps)(PostIndex); 