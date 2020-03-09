import { connect } from "react-redux";
import PostForm from "./post_form";
import { createPost } from "../../actions/post_actions";


const mapStateToProps = (state) => {
  const post = {
    caption: "",
    photoFile: null,
  };

  return {
    post: post,
    formType: "create post",
  };
}

const mapDispatchToProps = (dispatch) => ({
  action: (post) => dispatch(createPost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);