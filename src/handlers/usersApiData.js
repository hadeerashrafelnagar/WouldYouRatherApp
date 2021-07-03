import { _getUsers } from "../data/_DATA";
import { allUsers, signInAction } from "../actions/userActions";
import { store } from "../store/index";

export function getUsers() {
  _getUsers()
    .then((res) => res)
    .then((users) => {
      store.dispatch(allUsers(users));
    });
}
export function setAuthUser(id) {
  _getUsers()
    .then((res) => res)
    .then((users) => {
      store.dispatch(signInAction(users[id]));
    });
}
