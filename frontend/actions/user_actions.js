import * as UserApiUtil from "../utils/user_util";

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const REMOVE_USER = "REMOVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
});

const removeUser = user => ({
  type: REMOVE_USER,
  user
});

export const fetchUser = userId => dispatch =>
  UserApiUtil.fetchUser(userId).then(user => dispatch(receiveUser(user)));
  
export const fetchUsers = () => dispatch =>
  UserApiUtil.fetchUsers().then(users => dispatch(receiveAllUsers(users)));

export const deleteUser = id => dispatch =>
  UserApiUtil.deleteUser(id).then(() => dispatch(removeUser(user)));

export const updateUser = (formData, userId) => dispatch =>
  UserApiUtil.updateUser(formData, userId).then(user =>
    dispatch(receiveUser(user))
  );