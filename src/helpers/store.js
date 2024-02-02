import { configureStore } from "@reduxjs/toolkit";

import authUserReducer from "./auth/reducer";
import usersReducer from "./users/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./thread-detail/reducer";
import leaderboardReducer from "./leaderboard/reducer";
import isPreloadReducer from "./is-preload/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
