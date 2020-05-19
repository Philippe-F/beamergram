
import * as LikeAPIUtil from "../utils/like_util";
import { fetchPost } from "./post_actions";

export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLike = like => ({
  type: RECEIVE_LIKE,
  like
});

const removeLike = like => ({
  type: REMOVE_LIKE,
  like
});

export const createLike = like => dispatch => {
  return LikeAPIUtil.createLike(like).then(like => {
    return dispatch(fetchPost(like.post_id));
  });
};
export const deleteLike = postId => dispatch =>
  LikeAPIUtil.deleteLike(postId).then(like => dispatch(removeLike(like)));