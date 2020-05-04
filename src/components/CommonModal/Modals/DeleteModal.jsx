import React from 'react';
import PropTypes from 'prop-types';
import CommonModal from '../CommonModal';
import Button from '../../Button/Button';
import styles from './DeleteModal.module.css';

export default function DeleteModal(props) {
  const { isOpen, handleDeleteClick, handleCloseModal } = props;
  return (
    <CommonModal
      isOpen={isOpen}
      handleCloseModal={handleCloseModal}
      contentLabel="Confirm row deletion"
    >
      <div className={styles.container}>
        <h2>Are you sure?</h2>
        <h4>You won&apos;t be able to revert this</h4>
        <div>
          <Button text="Delete" onClick={handleDeleteClick} btnRole="danger" />
          <Button text="Cancel" onClick={handleCloseModal} />
        </div>
      </div>
    </CommonModal>
  );
}

DeleteModal.propTypes = {
  isOpen: PropTypes.bool,
  handleDeleteClick: PropTypes.func,
  handleCloseModal: PropTypes.func,
};

DeleteModal.defaultProps = {
  isOpen: false,
  handleDeleteClick: () => {},
  handleCloseModal: () => {},
};
