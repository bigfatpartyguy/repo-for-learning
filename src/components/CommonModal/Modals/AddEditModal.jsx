import React from 'react';
import CommonModal from '../CommonModal';
import Button from '../../Button/Button';
import SubmitRow from '../../SubmitRow/SubmitRow';

export default function AddEditModal(props) {
  return (
    <CommonModal>
      <SubmitRow onSubmit={handleAddRow}>
        <Button type="submit" btnRole="submit" text="Add" />
        <Button text="Cancel" onClick={handleCloseModal} />
      </SubmitRow>
    </CommonModal>
  );
}
