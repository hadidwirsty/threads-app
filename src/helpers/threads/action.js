import ActionType from "../actionTypes";
import api from "../api";

function receiveThreadsActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_THREADS,
    payload: {
      threads,
    },
  };
}

function addThreadActionCreator(threads) {
  return {
    type: ActionType.ADD_THREADS,
    payload: {
      threads,
    },
  };
}

function asyncAddThread({ title, body, category }) {
  return async (dispatch) => {
    try {
      const threads = await api.createThread({ title, body, category });
      dispatch(addThreadActionCreator(threads));
    } catch (err) {
      console.log("error:", err.message);
    }
  };
}

export { receiveThreadsActionCreator, asyncAddThread };
