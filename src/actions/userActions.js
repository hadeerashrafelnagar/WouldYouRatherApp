import { GET_USERS, SET_CURRENT_USERS } from "./actionTypes";

export const allUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const signInAction = (user) => ({
  type: SET_CURRENT_USERS,
  user,
});
