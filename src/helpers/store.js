import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/reducer";
import usersReducer from "./users/reducer";
import threadsReducer from "./threads/reducer";
import threadDetailReducer from "./thread-detail/reducer";
import leaderboardReducer from "./leaderboard/reducer";
import isLoadingReducer from "./is-loading/reducer";

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    threads: threadsReducer,
    threadDetail: threadDetailReducer,
    leaderboard: leaderboardReducer,
    isLoading: isLoadingReducer,
  },
});

export default store;
