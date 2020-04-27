const validateInputs = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'required';
  }
  if (!values.secondName) {
    errors.secondName = 'required';
  }
  if (!values.email) {
    errors.email = 'required';
  }
  if (
    values.email
    && !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = 'invalid Email';
  }
  if (!values.birthday) {
    errors.birthday = 'required';
  }
  return errors;
};

export default validateInputs;
