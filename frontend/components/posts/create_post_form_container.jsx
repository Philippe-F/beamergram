import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";


const mapStateToProps = (state) => {
  let currentUser = state.entities.users[state.session.id];
  const post = {
    caption: "",
    photoFile: null,
    photoUrl: null,
  };

  return {
    currentUser,
    post: post,
    formType: "Create Post",
  };
}

const mapDispatchToProps = (dispatch) => ({
  action: (post) => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);