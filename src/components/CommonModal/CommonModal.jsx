import React, { Component } from 'react';
import ReactModal from 'react-modal';

class CommonModal extends Component {
  render() {
    return (
      <ReactModal isOpen={this.props.showModal} contentLabel="test">
        <button type="button" onClick={this.props.handleCloseModal}>Close</button>
      </ReactModal>
    );
  }
}

export default CommonModal;
