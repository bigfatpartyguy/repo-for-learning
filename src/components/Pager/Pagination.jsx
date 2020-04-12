import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './Pagination.module.css';

export default function Pagination(props) {
  const {
    selectOptions,
    onChange,
    value,
    handleNextClick,
    handlePrevClick,
    page,
    pages,
  } = props;
  return (
    <div className={styles.pagination}>
      <Button disabled={page === 1} onClick={handlePrevClick} text="Previous" />
      <Select options={selectOptions} value={value} onChange={onChange} />
      <Button disabled={page === pages} onClick={handleNextClick} text="Next" />
    </div>
  );
}

Pagination.propTypes = {
  selectOptions: PropTypes.arrayOf(PropTypes.number),
  onChange: PropTypes.func,
  handleNextClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  page: PropTypes.number,
  pages: PropTypes.number,
  value: PropTypes.number,
};

Pagination.defaultProps = {
  selectOptions: [2, 4, 6],
  onChange: () => {},
  handleNextClick: () => {},
  handlePrevClick: () => {},
  page: 1,
  pages: 1,
  value: 4,
};
