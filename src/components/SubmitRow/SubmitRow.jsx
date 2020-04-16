import React from 'react';
import PropTypes from 'prop-types';
import Input from '../Input/Input';
import styles from './SubmitRow.module.css';

export default class SubmitRow extends React.Component {
  constructor(props) {
    super(props);
    this.initialState = {
      firstName: '',
      secondName: '',
      birthYear: '',
    };
    this.state = this.initialState;
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const row = { ...this.state };
    row.birthYear = +row.birthYear;
    this.props.onSubmit(row);
    this.setState(this.initialState);
  };

  render() {
    const { firstName, secondName, birthYear } = this.state;
    return (
      <form className={styles.main} onSubmit={this.handleSubmit}>
        <Input
          text="First Name"
          id="firstName"
          value={firstName}
          onChange={this.handleChange}
        />
        <Input
          text="Second Name"
          id="secondName"
          value={secondName}
          onChange={this.handleChange}
        />
        <Input
          text="Birth Year"
          id="birthYear"
          value={birthYear}
          onChange={this.handleChange}
        />
        <div className={styles.buttons}>{this.props.children}</div>
      </form>
    );
  }
}

SubmitRow.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

SubmitRow.defaultProps = {
  onSubmit: (event) => {
    event.preventDefault();
  },
  children: <button type="button">Error</button>,
};
