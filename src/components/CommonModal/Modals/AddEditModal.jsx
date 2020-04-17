import React from 'react';
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
    placeholder,
  } = props;
  const title = type === 'add' ? 'Add new entry' : 'Edit entry';
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
          placeholder={placeholder}
        >
          <Button type="submit" btnRole="submit" text="Ok" />
          <Button text="Cancel" onClick={handleCloseModal} />
        </SubmitRow>
      </div>
    </CommonModal>
  );
}

AddEditModal.propTypes = {
  isOpen: PropTypes.bool,
  handleAddRow: PropTypes.func,
  handleCloseModal: PropTypes.func,
};

AddEditModal.defaultProps = {
  isOpen: false,
  handleAddRow: () => {},
  handleCloseModal: () => {},
};
