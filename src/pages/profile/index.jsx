import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { asyncUnsetAuthUser } from "../../helpers/auth/action";
import { asyncPreloadProcess } from "../../helpers/is-preload/action";
import LayoutBase from "../../components/layouts/base";
import Button from "../../components/partials/button";

const ProfilePage = () => {
  const { authUser, isPreload = false } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { avatar, name, email } = authUser;

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) return null;

  const handleLogout = () => {
    const isConfirmed = window.confirm("Are you sure want to log out?");

    if (isConfirmed) {
      dispatch(asyncUnsetAuthUser());
      navigate("/login");
    }
  };

  return (
    <LayoutBase>
      <h2>Profile</h2>

      <div className="mt-8 flex flex-col items-center">
        <img src={avatar} alt="My avatar" className="mb-3 w-16 rounded-xl" />

        <h2>{name}</h2>

        <h3 className="mb-8">{email}</h3>

        <Button onClick={handleLogout}>Log out</Button>
      </div>
    </LayoutBase>
  );
};

export default ProfilePage;
