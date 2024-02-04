import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "../api";

import { receiveUsersActionCreator } from "../users/action";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveLeaderboardActionCreator } from "../leaderboard/action";

function asyncPopulate() {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboard = await api.getLeaderboard();

      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
      dispatch(receiveLeaderboardActionCreator(leaderboard));
    } catch (err) {
      console.log("error:", err.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncPopulate };
