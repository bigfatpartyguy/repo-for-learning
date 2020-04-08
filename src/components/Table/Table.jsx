import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import Pagination from '../Pagination/Pagination';

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      rowsPerPage: 4,
      students: this.props.studentsData,
    };
  }

  handleSelect = (event) => {
    event.persist();
    this.setState(() => ({
      page: 1,
      rowsPerPage: +event.target.value,
    }));
  };

  handleNextClick = () => {
    this.setState((state) => {
      const numOfRows = state.students.length;
      if (Math.ceil(numOfRows / state.rowsPerPage) > state.page) {
        return { page: state.page + 1 };
      }
      return {};
    });
  };

  handlePrevClick = () => {
    this.setState((state) => {
      if (state.page > 1) {
        return { page: state.page - 1 };
      }
      return {};
    });
  };

  renderTableRows = () => {
    const { page, rowsPerPage, students } = this.state;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    return students
      .map((row, ind) => {
        const id = ind;
        return (
          <tr key={`${id}${row.secondName}${row.birthYear}`}>
            <td>{row.firstName}</td>
            <td>{row.secondName}</td>
            <td>{row.birthYear}</td>
          </tr>
        );
      })
      .slice(start, end);
  };

  render() {
    return (
      <div>
        <table className={styles.main}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Birth Year</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
        <Pagination
          value={this.state.rowsPerPage}
          onChange={this.handleSelect}
          selectOptions={[2, 4, 6]}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          page={this.state.page}
          pages={Math.ceil(this.state.students.length / this.state.rowsPerPage)}
        />
      </div>
    );
  }
}

Table.propTypes = {
  studentsData: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      birthYear: PropTypes.number,
    }),
  ),
};

Table.defaultProps = {
  studentsData: [
    {
      firstName: 'John',
      secondName: 'Doe',
      birthYear: 1900,
    },
  ],
};

export default Table;
