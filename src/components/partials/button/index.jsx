import PropTypes from "prop-types";

const Button = ({ type = "button", title, children, onClick }) => (
  <button type={type} title={title} className="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(["button", "submit"]),
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default Button;
