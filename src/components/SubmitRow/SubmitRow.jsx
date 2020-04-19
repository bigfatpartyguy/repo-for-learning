import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Input from '../Input/Input';
import styles from './SubmitRow.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function SubmitRow(props) {
  const { placeholder } = props;
  const date = placeholder.birthday;
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [birthday, setDate] = useState(date ? new Date(date) : new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const row = { firstName, secondName, birthday };
    props.onSubmit(row);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <Input
        text="First Name"
        id="firstName"
        placeholder={placeholder.firstName}
        value={firstName}
        onChange={(event) => setFirstName(event.target.value)}
      />
      <Input
        text="Second Name"
        id="secondName"
        placeholder={placeholder.secondName}
        value={secondName}
        onChange={(event) => setSecondName(event.target.value)}
      />
      <Input text="Date of birth" id="birthday">
        <DatePicker
          className={styles.datepicker}
          selected={birthday}
          onChange={(event) => setDate(event)}
          showYearDropdown
        />
      </Input>
      <div className={styles.buttons}>{props.children}</div>
    </form>
  );
}

SubmitRow.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  placeholder: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.string),
  ]),
};

SubmitRow.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
  children: <button type="button">Error</button>,
  placeholder: false,
};
