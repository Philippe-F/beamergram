import { connect } from "react-redux";
import PostForm from "./post_form";
import { updatePost } from "../../actions/post_actions";


const mapStateToProps = (state) => ({
  post: ,
  formType: "Edit Post",
})

const mapDispatchToProps = (dispatch) => ({
  editPost: (postId) => dispatch(updatePost(postId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);