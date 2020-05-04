import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Input from '../Input/Input';
import styles from './SubmitRow.module.css';
import 'react-datepicker/dist/react-datepicker.css';
import useFormValidation from './useFormValidation';
import validateInputs from './validateInputs';

export default function SubmitRow(props) {
  const { currentValues, setDisabled } = props;
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
  } = useFormValidation(INITIAL_STATE, validateInputs, setDisabled);

  return (
    <form
      className={styles.main}
      onSubmit={(event) => {
        handleSubmit(event, props.onSubmit);
      }}
    >
      <Input
        id="firstName"
        error={errors.firstName || null}
        errorMessage={errors.firstName || ''}
        text="First Name"
        value={values.firstName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input
        id="secondName"
        error={errors.secondName || null}
        errorMessage={errors.secondName || ''}
        text="Second Name"
        value={values.secondName}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Input text="Date of birth" errorMessage={errors.birthday || ''} id="birthday">
        <DatePicker
          className={errors.birthday && styles.error}
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
        type="email"
        id="email"
        error={errors.email || null}
        errorMessage={errors.email || ''}
        text="Email"
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
  setDisabled: PropTypes.func,
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
  setDisabled: () => {},
  children: <button type="button">Error</button>,
  currentValues: false,
};
