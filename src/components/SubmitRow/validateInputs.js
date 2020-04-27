const validateInputs = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = true;
  }
  if (!values.secondName) {
    errors.secondName = true;
  }
  if (
    values.email &&
    !/^[\w.-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(values.email)
  ) {
    errors.email = true;
  }
  if (!values.birthday) {
    errors.birthday = true;
  }
  return errors;
};

export default validateInputs;
