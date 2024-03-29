import ActionType from "../actionTypes";

function leaderboardReducer(leaderboard = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_LEADERBOARD:
      return action?.payload?.leaderboard;
    default:
      return leaderboard;
  }
}

export default leaderboardReducer;
