import api from "../api/api";
import ActionType from "../actionTypes";

function setAuthActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH,
    payload: {
      authUser,
    },
  };
}

function unsetAuthActionCreator() {
  return {
    type: ActionType.UNSET_AUTH,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuth({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthActionCreator(authUser));
    } catch (err) {
      console.log("error:", err.message);
    }
  };
}

function asyncUnsetAuth() {
  return (dispatch) => {
    dispatch(unsetAuthActionCreator());
    api.putAccessToken("");
  };
}

export {
  ActionType,
  setAuthActionCreator,
  unsetAuthActionCreator,
  asyncSetAuth,
  asyncUnsetAuth,
};
