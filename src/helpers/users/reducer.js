import ActionType from "../actionTypes";

function usersReducer(users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action?.payload?.users;
    default:
      return users;
  }
}

export default usersReducer;
