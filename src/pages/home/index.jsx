import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HiRefresh } from "react-icons/hi";

import { asyncPopulate } from "../../helpers/shared/action";
import { asyncPreloadProcess } from "../../helpers/is-preload/action";
import LayoutBase from "../../components/layouts/base";
import Button from "../../components/partials/button";
import ThreadCard from "../../components/partials/card/thread";

const HomePage = () => {
  const { authUser, threads, users } = useSelector((states) => states);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    dispatch(asyncPopulate());
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const threadWithUser = threads.map((thread) => ({
    ...thread,
    user: users.find(({ id }) => id === thread.ownerId)?.name,
  }));

  const filteredThreads =
    selectedCategory === "All"
      ? threadWithUser
      : threadWithUser.filter(
          (thread) =>
            thread.category.toLowerCase() === selectedCategory.toLowerCase(),
        );

  return (
    <LayoutBase isFluidContainer>
      {authUser && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src={authUser.avatar}
              alt={`${authUser.name}'s avatar`}
              className="w-11 rounded-full"
            />
            <h2>Welcome, {authUser.name}!</h2>
          </div>

          <Button
            title="Create a new thread"
            onClick={() => navigate("/create-thread")}
          >
            Write a thread
          </Button>
        </div>
      )}

      <div className="flex items-center gap-3 mb-4">
        <button
          type="button"
          aria-label="Reset Category Filter"
          onClick={() => setSelectedCategory("All")}
          className="px-2 py-2 text-dark border border-white rounded hover:text-gray-500 transition duration-150"
        >
          <HiRefresh className="text-sm" />
        </button>

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Perkenalan">Introduction</option>
          <option value="Redux">Redux</option>
          <option value="Technology">Technology</option>
          <option value="Education">Education</option>
        </select>
      </div>

      <div className="flex flex-col gap-10">
        {filteredThreads.length > 0 ? (
          filteredThreads.map((props) => (
            <ThreadCard key={props.id} {...props} />
          ))
        ) : (
          <p>No threads found in this category.</p>
        )}
      </div>
    </LayoutBase>
  );
};

export default HomePage;
