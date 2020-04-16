import React from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button/Button';
import SubmitRow from '../../SubmitRow/SubmitRow';

export default function AddEditModal(props) {
  const { isOpen, handleAddRow, handleCloseModal } = props;
  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      contentLabel="Add new entry"
    >
      <SubmitRow onSubmit={handleAddRow}>
        <Button type="submit" btnRole="submit" text="Add" />
        <Button text="Cancel" onClick={handleCloseModal} />
      </SubmitRow>
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
