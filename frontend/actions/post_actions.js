import * as PostAPIUtil from "../utils/post_util"; 

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const DELETE_POST = "DELETE_POST";
export const RECEIVE_POST_ERRORS = "RECEIVE_POST_ERRORS";

export const receiveAllPosts = (posts) => ({
  type: RECEIVE_ALL_POSTS, 
  posts: posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post: post,
});

export const deletePost = (postId) => ({
  type: DELETE_POST, 
  postId: postId
})

export const receivePostErrors = (errors) => {
  return {
    type: RECEIVE_POST_ERRORS,
    errors: errors, 
  }
}

export const allPosts = () => (dispatch) => (
  PostAPIUtil.allPosts().then(posts => (
    dispatch(receiveAllPosts(posts))
  ), err => {
    return (
      dispatch(receivePostErrors(err.responseJSON))
    )
  }
  )
);

export const createPost = (post) => (dispatch) => (
  PostAPIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => {
    return (
      dispatch(receivePostErrors(err.responseJSON))
    )
  } 
  )
); 

export const showPost = (post) => (dispatch) => (
  PostAPIUtil.showPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => {
    return (
      dispatch(receivePostErrors(err.responseJSON))
    )
  }
  )
);

export const updatePost = (post, postId) => (dispatch) => (
  PostAPIUtil.updatePost(post, postId).then(updatedPost => (
    dispatch(receivePost(updatedPost))
  ), err => {
    return (
    dispatch(receivePostErrors(err.responseJSON))
    )
  }
  )
);

export const destroyPost = (postId) => (dispatch) => (
  PostAPIUtil.destroyPost(postId).then(() => {
    dispatch(deletePost(postId))
  }
  )
);

export const fetchUserPosts = (userId) => (dispatch) => (
  PostAPIUtil.fetchUserPosts(userId).then(posts =>
    dispatch(receiveAllPosts(posts))
  )
);