import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HiChartBar,
  HiOutlineHome,
  HiOutlineLogin,
  HiOutlineUser,
} from "react-icons/hi";

import { asyncPreloadProcess } from "../../../helpers/is-preload/action";
import NavItem from "./nav-item";

const LayoutNavBar = () => {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  return (
    <nav className="x-container fixed bottom-0 z-30 w-full border-t border-b-dark bg-light py-5">
      <div className="flex items-center justify-between text-2xl text-dark">
        <NavItem
          to="/"
          title="Home"
          icon={<HiOutlineHome />}
          activePaths={["/", "/thread/:threadId", "/create-thread"]}
        />

        <NavItem to="/leaderboard" title="Leaderboard" icon={<HiChartBar />} />

        {authUser === null ? (
          <NavItem
            to="/login"
            title="Login"
            icon={<HiOutlineLogin />}
            activePaths={["/login", "/register"]}
          />
        ) : (
          <NavItem to="/profile" title="My profile" icon={<HiOutlineUser />} />
        )}
      </div>
    </nav>
  );
};

export default LayoutNavBar;
