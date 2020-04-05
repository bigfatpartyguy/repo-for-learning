import React from "react";
import Button from "../Button/Button";
import Select from "../Select/Select";
import styles from "./Pagination.module.css";

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
