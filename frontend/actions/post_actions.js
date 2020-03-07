import * as PostAPIUtil from "../utils/post_util"; 
import { receiveErrors } from "./session_action";

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

export const deletePost = () => ({
  type: DELETE_POST, 
})

export const receivePostErrors = (errors) => ({
  type: RECEIVE_POST_ERRORS,
  errors: errors, 
})

export const allPosts = () => (dispatch) => (
  PostAPIUtil.allPosts().then(posts => (
    dispatch(receiveAllPosts(posts))
  ), err => (
    dispatch(receivePostErrors(err.responseJSON))
  ))
);

export const createPost = (post) => (dispatch) => (
  PostAPIUtil.createPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receivePostErrors(err.responseJSON))
  ))
); 

export const showPost = (post) => (dispatch) => (
  PostAPIUtil.showPost(post).then(post => (
    dispatch(receivePost(post))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const updatePost = (post) => (dispatch) => (
  PostAPIUtil.updatePost(post).then(updatedPost => (
    dispatch(receivePost(updatedPost))
  ), err => (
    dispatch(receivePostErrors(err.responseJSON))
  ))
);

export const deletePost = () => (dispatch) => (
  PostAPIUtil.destroyPost().then(() => (
    dispatch(deletePost())
  ), err => (
    dispatch(receivePostErrors(err.responseJSON))
  ))
);