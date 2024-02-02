import api from "../api/api";
import ActionType from "../actionTypes";

function userActionCreator(users) {
  return {
    type: ActionType.USERS,
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

export { userActionCreator, asyncRegisterUser };
