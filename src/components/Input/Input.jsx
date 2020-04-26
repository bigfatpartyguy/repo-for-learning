import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input(props) {
  const {
    type, text, id, onChange, value, children,
  } = props;
  return (
    <div className={styles.inputComponent}>
      <label htmlFor={id}>{text}</label>
      {children || (
        <input
          id={id}
          type={type}
          name={id}
          value={value}
          onChange={onChange}
          autoComplete="off"
          required
        />
      )}
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string,
  id: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node,
};

Input.defaultProps = {
  type: 'text',
  text: null,
  id: null,
  onChange: () => {},
  value: '',
  children: null,
};
