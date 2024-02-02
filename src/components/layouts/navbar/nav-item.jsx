import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const NavItem = ({ to, title, icon }) => {
  return (
    <NavLink
      to={to}
      title={title}
      className={({ isActive }) => `nav-link ${isActive && "nav-link-active"}`}
    >
      {icon}
    </NavLink>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default NavItem;
