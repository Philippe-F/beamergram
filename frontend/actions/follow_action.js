import * as FollowAPIUtil from "../utils/follow_util";

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const DELETE_FOLLOW = "REMOVE_FOLLOW";

const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow: follow,
});

export const deleteFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow: follow,
});

export const createFollow = follow => dispatch =>
  FollowAPIUtil.createFollow(follow).then(res => dispatch(receiveFollow(res)));

export const deleteFollow = id => dispatch =>
  FollowAPIUtil.deleteFollow(id).then(res => dispatch(deleteFollow(res)));
