import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, title, icon, activePaths }) => {
  const location = useLocation();

  const isActive = () => {
    if (location.pathname === to) return true;
    if (!activePaths) return false;
    return activePaths.some((activePath) => {
      if (activePath.includes(":")) {
        const baseActivePath = activePath.split("/:")[0];
        return location.pathname.startsWith(baseActivePath);
      }
      return location.pathname === activePath;
    });
  };

  return (
    <NavLink
      to={to}
      title={title}
      className={`nav-link ${isActive() ? "nav-link-active" : ""}`}
    >
      {icon}
    </NavLink>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  activePaths: PropTypes.arrayOf(PropTypes.string),
};

export default NavItem;
