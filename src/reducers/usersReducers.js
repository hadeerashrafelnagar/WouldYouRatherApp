import { GET_USERS, SET_CURRENT_USERS } from "../actions/actionTypes";

export const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...action.users };
    default:
      return state;
  }
};

export const authUserReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_CURRENT_USERS:
      return { ...action.user };
    default:
      return state;
  }
};