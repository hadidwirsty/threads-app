import ActionType from "../actionTypes";

function authReducer(auth = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return action.payload?.auth;
    case ActionType.UNSET_AUTH:
      return null;
    default:
      return auth;
  }
}

export default authReducer;
