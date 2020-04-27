import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Input from '../Input/Input';
import styles from './SubmitRow.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import useFormValidation from './useFormValidation';
import validateInputs from './validateInputs';

export default function SubmitRow(props) {
  const { currentValues } = props;
  const date = currentValues.birthday;
  const INITIAL_STATE = {
    firstName: currentValues.firstName || '',
    secondName: currentValues.secondName || '',
    email: currentValues.email || '',
    birthday: date ? new Date(date) : null,
  };

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormValidation(INITIAL_STATE, validateInputs);

  return (
    <form
      className={styles.main}
      onSubmit={(event) => {
        handleSubmit(event, props.onSubmit);
      }}
    >
      <Input
        error={errors.firstName || null}
        text="First Name"
        id="firstName"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        error={errors.secondName || null}
        text="Second Name"
        id="secondName"
        value={values.secondName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input text="Date of birth" id="birthday">
        <DatePicker
          className={styles.datepicker}
          selected={values.birthday}
          onChange={(value) => {
            handleChange({ target: { name: 'birthday', value } });
          }}
          onBlur={(value) => {
            handleBlur({ target: { name: 'birthday', value } });
          }}
          placeholderText="Click to select a date"
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
      </Input>
      <Input
        error={errors.email || null}
        type="email"
        text="Email"
        id="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <div className={styles.buttons}>{props.children}</div>
    </form>
  );
}

SubmitRow.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
  currentValues: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.objectOf(PropTypes.string),
  ]),
};

SubmitRow.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
  children: <button type="button">Error</button>,
  currentValues: false,
};
