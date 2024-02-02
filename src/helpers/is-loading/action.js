import api from "../api/api";
import ActionType from "../actionTypes";
import { setAuthActionCreator } from "../auth/action";

function setIsLoadingActionCreator(isLoading) {
  return {
    type: ActionType.SET_IS_LOADING,
    payload: {
      isLoading,
    },
  };
}

function asyncIsLoadingProcess() {
  return async (dispatch) => {
    try {
      const authUser = await api.getOwnProfile();
      dispatch(setAuthActionCreator(authUser));
    } catch (error) {
      dispatch(setAuthActionCreator(null));
    } finally {
      dispatch(setIsLoadingActionCreator(false));
    }
  };
}

export { setIsLoadingActionCreator, asyncIsLoadingProcess };
