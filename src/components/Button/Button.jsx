import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

const Button = (props) => (
  <button
    disabled={props.disabled}
    className={styles.main}
    onClick={(e) => props.onClick(e)}
    type="button"
  >
    {props.children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
Button.defaultProps = {
  onClick: () => {},
  children: undefined,
};

export default Button;
