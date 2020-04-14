import React, { Component } from 'react';
import ReactModal from 'react-modal';
import SubmitRow from '../SubmitRow/SubmitRow';
import Button from '../Button/Button';
import styles from './CommonModal.module.css';

class CommonModal extends Component {
  createChildren = () => {
    const {
      modalHint,
      showModal,
      handleCloseModal,
      handleDeleteClick,
      onSubmit,
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
        return <SubmitRow onSubmit={onSubmit} />;

      case modalHint === 'edit':
        return <SubmitRow />;

      default:
        return null;
    }
  };

  render() {
    return (
      <ReactModal
        className={styles.modal}
        overlayClassName={styles.overlay}
        isOpen={this.props.showModal}
        onRequestClose={this.props.handleCloseModal}
        contentLabel="Delete Confirmation Modal"
      >
        {this.createChildren()}
      </ReactModal>
    );
  }
}

export default CommonModal;
