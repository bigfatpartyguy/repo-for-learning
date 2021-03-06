import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button/Button';
import SubmitRow from '../../SubmitRow/SubmitRow';
import styles from './AddEditModal.module.css';

export default function AddEditModal(props) {
  const {
    type,
    isOpen,
    handleAddRow,
    handleEditRow,
    handleCloseModal,
    currentValues,
  } = props;
  const title = type === 'add' ? 'Add new entry' : 'Edit entry';
  const [disabled, setDisabled] = useState(true);

  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      contentLabel={title}
    >
      <div className={styles.container}>
        <h2>{title}</h2>
        <SubmitRow
          onSubmit={type === 'add' ? handleAddRow : handleEditRow}
          currentValues={currentValues}
          setDisabled={setDisabled}
        >
          <Button
            disabled={disabled}
            type="submit"
            btnRole="submit"
            text="Ok"
          />
          <Button text="Cancel" onClick={handleCloseModal} />
        </SubmitRow>
      </div>
    </CommonModal>
  );
}

AddEditModal.propTypes = {
  type: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isOpen: PropTypes.bool,
  handleAddRow: PropTypes.func,
  handleEditRow: PropTypes.func,
  handleCloseModal: PropTypes.func,
  currentValues: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.string),
  ]),
};

AddEditModal.defaultProps = {
  type: false,
  isOpen: false,
  handleAddRow: () => {},
  handleEditRow: () => {},
  handleCloseModal: () => {},
  currentValues: false,
};
