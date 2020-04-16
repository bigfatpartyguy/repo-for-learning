import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input(props) {
  const { text, id, onChange, value } = props;
  return (
    <div className={styles.inputComponent}>
      <label htmlFor={id}>{text}</label>
      <input
        id={id}
        type="text"
        name={id}
        value={value}
        onChange={onChange}
        autoComplete="off"
        required
      />
    </div>
  );
}

Input.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

Input.defaultProps = {
  text: null,
  id: null,
  onChange: () => {},
  value: null,
};
