import ActionType from "../actionTypes";

function leaderboardActionCreator(leaderboard) {
  return {
    type: ActionType.LEADERBOARD,
    payload: {
      leaderboard,
    },
  };
}

export { leaderboardActionCreator };
