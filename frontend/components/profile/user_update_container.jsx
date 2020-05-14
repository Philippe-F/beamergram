import { connect } from "react-redux";
import { updateUser } from "../../actions/user_actions";
import UserUpdateForm from "./user_update_form";

const mapStateToProps = (state, ownProps) => {
  const userId = state.entities.users[state.session.id].id;
  let currentUser = state.entities.users[state.session.id];

  return {
    currentUser,
    userId,
  };
}

const mapDispatchToProps = {
  updateUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserUpdateForm);