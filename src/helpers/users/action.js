import ActionType from "../actionTypes";
import api from "../api";

function receiveUsersActionCreator(users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async () => {
    try {
      await api.register({ name, email, password });
    } catch (err) {
      console.log("error:", err.message);
    }
  };
}

export { receiveUsersActionCreator, asyncRegisterUser };
