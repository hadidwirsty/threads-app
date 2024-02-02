import ActionType from "../actionTypes";

function isLoadingReducer(isLoading = true, action = {}) {
  switch (action.type) {
    case ActionType.SET_IS_LOADING:
      return action?.payload?.isLoad;
    default:
      return isLoading;
  }
}

export default isLoadingReducer;
