import api from "../api/api";
import { userActionCreator } from "../users/action";
import { threadsActionCreator } from "../threads/action";
import { leaderboardActionCreator } from "../leaderboard/action";

function asyncPopulate() {
  return async (dispatch) => {
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      const leaderboard = await api.getLeaderboard();

      dispatch(userActionCreator(users));
      dispatch(threadsActionCreator(threads));
      dispatch(leaderboardActionCreator(leaderboard));
    } catch (err) {
      console.log("error:", err.message);
    }
  };
}

export { asyncPopulate };
