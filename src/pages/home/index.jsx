import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { asyncPopulate } from "../../helpers/shared/action";
import { asyncPreloadProcess } from "../../helpers/is-preload/action";
import LayoutBase from "../../components/layouts/base";
import Button from "../../components/partials/button";
import ThreadCard from "../../components/partials/card/thread";

const HomePage = () => {
  const { authUser, threads, users } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncPopulate());
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const threadWithUser = threads.map((thread) => ({
    ...thread,
    user: users.find(({ id }) => id === thread.ownerId).name,
  }));

  return (
    <LayoutBase isFluidContainer>
      {authUser ? (
        <div className="mb-14 flex flex-wrap items-center justify-between gap-4">
          <h2>Welcome back, {authUser?.name}!</h2>

          <Button
            title="Create a new thread"
            onClick={() => navigate("/create-thread")}
          >
            Write a thread
          </Button>
        </div>
      ) : (
        <h2 className="mb-14">
          ✏️ Let&apos;s share your thoughts to other,{" "}
          <Link to="/register" className="text-link">
            register
          </Link>{" "}
          now!
        </h2>
      )}

      <div className="flex flex-col gap-10">
        {threadWithUser.map((props) => (
          <ThreadCard key={props.id} {...props} />
        ))}
      </div>
    </LayoutBase>
  );
};

export default HomePage;
