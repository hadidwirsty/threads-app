import { lazy, Suspense, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { asyncPreloadProcess } from "./helpers/is-preload/action";
import LoadingIndicator from "./components/partials/loading-indicator";

const HomePage = lazy(() => import("./pages/home"));
const LoginPage = lazy(() => import("./pages/login"));
const RegisterPage = lazy(() => import("./pages/register"));
const ProfilePage = lazy(() => import("./pages/profile"));
const ThreadPage = lazy(() => import("./pages/thread"));
const CreateThreadPage = lazy(() => import("./pages/thread/create"));
const LeaderboardPage = lazy(() => import("./pages/leaderboard"));
const NotFound404Page = lazy(() => import("./pages/error/404"));

const AppRoute = () => {
  const { authUser = null, isPreload = false } = useSelector(
    (states) => states,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  return (
    <Suspense fallback={<LoadingIndicator />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/thread/:threadId" element={<ThreadPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          {authUser ? (
            <>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/create-thread" element={<CreateThreadPage />} />
            </>
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
            </>
          )}
          <Route path="/*" element={<NotFound404Page />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default AppRoute;
