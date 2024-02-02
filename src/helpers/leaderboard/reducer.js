import ActionType from "../actionTypes";

function leaderboardReducer(leaderboard = [], action = {}) {
  switch (action.type) {
    case ActionType.LEADERBOARD:
      return action?.payload?.leaderboard;
    default:
      return leaderboard;
  }
}

export default leaderboardReducer;
