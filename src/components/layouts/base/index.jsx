import PropTypes from "prop-types";

import Header from "./Header";
import Navbar from "./Navbar";

const LayoutBase = ({ withBackButton, isFluidContainer = false, children }) => {
  const containerClass = isFluidContainer ? "x-fluid-container" : "x-container";

  return (
    <>
      <Header withBackButton={withBackButton} />

      <Navbar />

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
