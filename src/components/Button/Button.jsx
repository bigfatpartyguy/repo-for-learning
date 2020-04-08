import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button(props) {
  const {
    btnRole,
    text,
    onClick,
    disabled,
  } = props;
  return (
    <button
      disabled={disabled}
      className={styles[btnRole]}
      type="button"
      onClick={onClick}
      value={text}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  btnRole: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  btnRole: 'primary',
  text: 'Button',
  onClick: () => {},
  disabled: false,
};
