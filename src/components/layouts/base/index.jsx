import PropTypes from "prop-types";

import LayoutHeader from "../header";
import LayoutNavbar from "../navbar";

const LayoutBase = ({ withBackButton, isFluidContainer = false, children }) => {
  const containerClass = isFluidContainer ? "x-fluid-container" : "x-container";

  return (
    <>
      <LayoutHeader withBackButton={withBackButton} />

      <LayoutNavbar />

      <main className={`${containerClass} pb-32 pt-24`}>{children}</main>
    </>
  );
};

LayoutBase.propTypes = {
  withBackButton: PropTypes.bool,
  isFluidContainer: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default LayoutBase;
