import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import Input from '../Input/Input';
import styles from './SubmitRow.module.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class SubmitRow extends React.Component {
  constructor(props) {
    super(props);
    const date = props.placeholder.birthday;
    this.initialState = {
      firstName: '',
      secondName: '',
      birthday: date ? new Date(date) : new Date(),
    };
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleDateChange = (date) => {
    this.setState({ birthday: date });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const row = { ...this.state };
    this.props.onSubmit(row);
    this.setState(this.initialState);
  };

  render() {
    const { firstName, secondName, birthday } = this.state;
    const { placeholder } = this.props;
    return (
      <form className={styles.main} onSubmit={this.handleSubmit}>
        <Input
          text="First Name"
          id="firstName"
          placeholder={placeholder.firstName}
          value={firstName}
          onChange={this.handleChange}
        />
        <Input
          text="Second Name"
          id="secondName"
          placeholder={placeholder.secondName}
          value={secondName}
          onChange={this.handleChange}
        />
        <Input text="Date of birth" id="birthday" onChange={this.handleChange}>
          <DatePicker
            className={styles.datepicker}
            selected={birthday}
            onChange={this.handleDateChange}
            showYearDropdown
          />
        </Input>
        <div className={styles.buttons}>{this.props.children}</div>
      </form>
    );
  }
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
