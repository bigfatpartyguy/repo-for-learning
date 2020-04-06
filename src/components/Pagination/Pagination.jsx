import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './Pagination.module.css';

export default function Pagination(props) {
  const {
    handleNextClick,
    handlePrevClick,
    handleSelectChange,
    selectValue,
    nextBtnDisabled,
    prevBtnDisabled,
    page,
    pages,
  } = props;
  return (
    <div className={styles.main}>
      <Button disabled={prevBtnDisabled} onClick={handlePrevClick}>
        Previous
      </Button>
      <Select
        handleSelectChange={handleSelectChange}
        rowsPerPageOptions={[2, 4, 6]}
        selectValue={selectValue}
      />
      <p>{`${page} of ${pages}`}</p>
      <Button disabled={nextBtnDisabled} onClick={handleNextClick}>
        Next
      </Button>
    </div>
  );
}

Pagination.propTypes = {
  handleNextClick: PropTypes.func,
  handlePrevClick: PropTypes.func,
  handleSelectChange: PropTypes.func,
  selectValue: PropTypes.number,
  nextBtnDisabled: PropTypes.bool,
  prevBtnDisabled: PropTypes.bool,
  page: PropTypes.number,
  pages: PropTypes.number,
};

Pagination.defaultProps = {
  handleNextClick: () => {},
  handlePrevClick: () => {},
  handleSelectChange: () => {},
  selectValue: 4,
  nextBtnDisabled: false,
  prevBtnDisabled: false,
  page: 1,
  pages: 1,
};
