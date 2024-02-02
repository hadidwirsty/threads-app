import ActionType from "../actionTypes";

function threadsReducer(threads = [], action = {}) {
  switch (action.type) {
    case ActionType.THREADS:
      return action?.payload?.threads;
    case ActionType.ADD_THREADS:
      return [...threads, action.payload?.threads];
    default:
      return threads;
  }
}

export default threadsReducer;
