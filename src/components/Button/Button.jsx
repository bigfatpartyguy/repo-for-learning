import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => (
  <button
    className={styles.main}
    onClick={props.onClick}
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
