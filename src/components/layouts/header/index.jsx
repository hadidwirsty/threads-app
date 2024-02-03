import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import PropTypes from "prop-types";

const LayoutHeader = ({ withBackButton = false }) => {
  return (
    <header className="x-container fixed top-0 z-30 flex w-full items-center justify-between bg-light py-3 px-3">
      {withBackButton ? (
        <Link
          to="/"
          title="Back to Home"
          className="flex items-center text-sm font-medium text-dark hover:text-dark-600"
        >
          <IoIosArrowBack className="text-sm" />
          Back to Threads
        </Link>
      ) : (
        <div className="invisible">
          <IoIosArrowBack className="text-sm" />
          Back to Threads
        </div>
      )}
      <h2 className="flex-grow text-center font-medium text-dark">
        Threads App
      </h2>
      <div className="invisible">
        <IoIosArrowBack className="text-sm" />
        Back to Threads
      </div>
    </header>
  );
};

LayoutHeader.propTypes = {
  withBackButton: PropTypes.bool,
};

export default LayoutHeader;
