import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import SubmitRow from '../SubmitRow/SubmitRow';
import Button from '../Button/Button';
import styles from './CommonModal.module.css';

Modal.setAppElement('#root');

/* eslint-disable react/prop-types */

class CommonModal extends Component {
  createChildren = () => {
    const {
      modalHint,
      handleCloseModal,
      handleDeleteClick,
      handleAddRow,
    } = this.props;

    switch (true) {
      case modalHint === 'delete':
        return (
          <div className={styles.container}>
            <h2>Are you sure?</h2>
            <h4>You won&apos;t be able to revert this</h4>
            <div>
              <Button
                text="Delete"
                onClick={handleDeleteClick}
                btnRole="danger"
              />
              <Button text="Cancel" onClick={handleCloseModal} />
            </div>
          </div>
        );

      case modalHint === 'add':
        return (
          <SubmitRow onSubmit={handleAddRow}>
            <Button type="submit" btnRole="submit" text="Add" />
            <Button text="Cancel" onClick={handleCloseModal} />
          </SubmitRow>
        );

      case modalHint === 'edit':
        return <div>{ /* TODO */ }</div>;

      default:
        return null;
    }
  };

  render() {
    const { showModal, handleCloseModal } = this.props;
    return (
      <Modal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        contentLabel="Delete Confirmation Modal"
      >
        {this.createChildren()}
      </Modal>
    );
  }
}

export default CommonModal;
