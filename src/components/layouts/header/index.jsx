import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft } from "react-icons/hi";
import PropTypes from "prop-types";

const LayoutHeader = ({ withBackButton = false }) => {
  return (
    <header className="header fixed top-0 z-30 flex w-full items-center gap-x-6 border-b-2 border-dark bg-light py-3">
      {withBackButton && (
        <Link to="/" title="Back to Home">
          <HiArrowLeft className="text-2xl" />
        </Link>
      )}

      <Link to="/">
        <h2 className="font-medium text-dark">Threads</h2>
      </Link>
    </header>
  );
};

LayoutHeader.propTypes = {
  withBackButton: PropTypes.bool,
};

export default LayoutHeader;
