import React from 'react';
import PropTypes from 'prop-types';
import styles from './TableHeaderCell.module.css';

export default function TableHeaderCell(props) {
  const {
    onClick,
    value,
    sortFieldName,
    sortDirectionAsc,
  } = props;
  let activeStyle = '';
  if (sortFieldName === value) {
    activeStyle = sortDirectionAsc ? styles.active : styles.activeDesc;
  }
  return (
    <th>
      <span
        onKeyUp={(event) => {
          event.preventDefault();
          if (event.keyCode === 13 || event.keyCode === 32) {
            onClick(value);
          }
        }}
        onClick={() => onClick(value)}
        tabIndex="0"
        className={`${styles.sortBtn} ${activeStyle}`}
        role="button"
      >
        {props.children}
        <svg
          className={styles.icon}
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z" />
        </svg>
      </span>
    </th>
  );
}

TableHeaderCell.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.string,
  sortFieldName: PropTypes.string,
  sortDirectionAsc: PropTypes.bool,
};

TableHeaderCell.defaultProps = {
  value: '',
  onClick: () => {},
  children: 'header cell',
  sortFieldName: '',
  sortDirectionAsc: true,
};
