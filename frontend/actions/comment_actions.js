import * as CommentAPIUtil from "../utils/comment_util";

export const CLEAR_COMMENT_ERRORS = "CLEAR_COMMENT_ERRORS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_POST_COMMENTS = "RECEIVE_POST_COMMENTS";


const receivePostComments = comments => ({
  type: RECEIVE_POST_COMMENTS,
  comments
});

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const receiveErrors = errors => ({
  type: RECEIVE_COMMENT_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
  errors: []
});

export const createComment = comment => dispatch =>
  CommentAPIUtil.createComment(comment).then(
    comment => dispatch(receiveComment(comment)),
    err => dispatch(receiveErrors(err.responseJSON))
  );

export const fetchPostComments = post_id => dispatch =>
  CommentAPIUtil.fetchPostComments(post_id).then(comments => {
    return dispatch(receivePostComments(comments));
  });

export const deleteComment = id => dispatch =>
  CommentAPIUtil.deleteComment(id).then(res => {
    return dispatch(removeComment(res));
  });