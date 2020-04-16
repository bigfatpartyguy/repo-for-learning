import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import Button from '../Button/Button';
import styles from './CommonModal.module.css';

Modal.setAppElement('#root');

export default function CommonModal(props) {
  const { children, isOpen, handleCloseModal, contentLabel } = props;
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={handleCloseModal}
      contentLabel={contentLabel}
    >
      <Button
        ariaLabel="CLose this dialog"
        btnRole="closeX"
        text="×"
        onClick={handleCloseModal}
      />
      {children}
    </Modal>
  );
}

CommonModal.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  contentLabel: PropTypes.string,
};

CommonModal.defaultProps = {
  children: <h2>Something went wrong.</h2>,
  isOpen: false,
  handleCloseModal: () => {},
  contentLabel: 'Default modal',
};
