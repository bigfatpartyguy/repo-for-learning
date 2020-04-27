import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input(props) {
  const { error, type, text, id, onChange, onBlur, value, children } = props;
  return (
    <div className={styles.inputComponent}>
      <label htmlFor={id}>{text}</label>
      {children || (
        <input
          className={error ? styles.error : null}
          id={id}
          type={type}
          name={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          // required disabled to test script validation logic
          // required
        />
      )}
    </div>
  );
}

Input.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  error: false,
  type: 'text',
  text: null,
  id: null,
  onChange: () => {},
  onBlur: () => {},
  value: '',
  children: null,
};
