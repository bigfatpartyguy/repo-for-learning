import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from '../TableHeaderCell/TableHeaderCell';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import CommonModal from '../CommonModal/CommonModal';
import { sortRows } from '../../helpers';
import styles from './Table.module.css';

class Table extends Component {
  constructor(props) {
    super(props);
    const firstFieldName = Object.keys(this.props.data[0])[0];
    const initialState = {
      page: 1,
      rowsPerPage: 4,
      sortFieldName: firstFieldName,
      sortDirectionAsc: true,
      students: sortRows(this.props.data, firstFieldName, true),
      isOpen: false,
      modalHint: '',
    };
    this.state = initialState;
    this.id = null;
    this.idsStorage = new Set(
      initialState.students.map((student) => student.id),
    );
  }

  handleSelect = (event) => {
    event.persist();
    this.setState(() => ({
      page: 1,
      rowsPerPage: +event.target.value,
    }));
  };

  handleDeleteClick = (id) => {
    this.setState((state) => {
      const students = state.students.filter((row) => row.id !== id);
      this.idsStorage.delete(id);
      return {
        students,
        isOpen: false,
      };
    });
  };

  handleSubmitRow = (row) => {
    const newStudent = { ...row };
    const { firstName, secondName, birthYear } = newStudent;
    if (!firstName || !secondName || !birthYear) {
      // eslint-disable-next-line no-undef, no-alert
      alert('Please, fill in the input fields.');
      return;
    }
    let id = null;
    do {
      id = Math.round(Math.random() * 10000);
    } while (this.idsStorage.has(id));
    this.idsStorage.add(id);
    newStudent.id = id;
    this.setState((state) => ({ students: [...state.students, newStudent] }));
    this.handleCloseModal();
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

  handlePageClick = (event) => {
    const page = +event.target.value;
    this.setState({ page });
  };

  handleOpenModal = (modalHint, id) => {
    this.id = id;
    this.setState({
      isOpen: true,
      modalHint,
    });
  };

  handleCloseModal = () => {
    this.setState({ isOpen: false });
  };

  handleSort = (value) => {
    this.setState((state) => {
      let { sortFieldName, sortDirectionAsc } = state;
      if (sortFieldName === value) {
        sortDirectionAsc = !sortDirectionAsc;
      } else {
        sortFieldName = value;
        sortDirectionAsc = true;
      }
      const students = sortRows(
        state.students,
        sortFieldName,
        sortDirectionAsc,
      );
      return {
        sortFieldName,
        sortDirectionAsc,
        students,
      };
    });
  };

  renderTableRows = () => {
    const { page, rowsPerPage, students } = this.state;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const pageToDisplay = students
      .map((row) => {
        const { id } = row;
        return (
          <tr key={id}>
            <td>{row.firstName}</td>
            <td>{row.secondName}</td>
            <td>{row.birthYear}</td>
            <td>
              <Button
                text="Delete"
                onClick={() => this.handleOpenModal('delete', id)}
                btnRole="danger"
              />
              <Button
                text="Edit"
                onClick={() => this.handleOpenModal('edit', id)}
                btnRole="edit"
              />
            </td>
          </tr>
        );
      })
      .slice(start, end);
    const emptyRows = Array(rowsPerPage - pageToDisplay.length)
      .fill(null)
      .map((empty, ind) => {
        const key = ind;
        return (
          <tr key={key} className={styles.emptyRow}>
            <td colSpan="4">&nbsp;</td>
          </tr>
        );
      });

    return pageToDisplay.concat(emptyRows);
  };

  render() {
    return (
      <div>
        <table className={styles.main}>
          <thead>
            <tr>
              <TableHeaderCell
                value="firstName"
                sortFieldName={this.state.sortFieldName}
                sortDirectionAsc={this.state.sortDirectionAsc}
                onClick={this.handleSort}
              >
                First Name
              </TableHeaderCell>
              <TableHeaderCell
                value="secondName"
                sortFieldName={this.state.sortFieldName}
                sortDirectionAsc={this.state.sortDirectionAsc}
                onClick={this.handleSort}
              >
                Second Name
              </TableHeaderCell>
              <TableHeaderCell
                value="birthYear"
                sortFieldName={this.state.sortFieldName}
                sortDirectionAsc={this.state.sortDirectionAsc}
                onClick={this.handleSort}
              >
                Birth Year
              </TableHeaderCell>
              <th>Controls</th>
            </tr>
          </thead>
          <tbody>{this.renderTableRows()}</tbody>
        </table>
        <div className={styles.newEntryRow}>
          <Button
            text="Add new entry"
            btnRole="submit"
            onClick={() => this.handleOpenModal('add')}
          />
        </div>
        <Pagination
          value={this.state.rowsPerPage}
          onChange={this.handleSelect}
          selectOptions={[2, 4, 6]}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          handlePageClick={this.handlePageClick}
          page={this.state.page}
          pages={Math.ceil(this.state.students.length / this.state.rowsPerPage)}
        />
        <CommonModal
          modalHint={this.state.modalHint}
          showModal={this.state.isOpen}
          handleCloseModal={this.handleCloseModal}
          handleDeleteClick={() => this.handleDeleteClick(this.id)}
          handleAddRow={this.handleSubmitRow}
        />
      </div>
    );
  }
}

Table.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string,
      secondName: PropTypes.string,
      birthYear: PropTypes.number,
    }),
  ),
};

Table.defaultProps = {
  data: [
    {
      firstName: 'John',
      secondName: 'Doe',
      birthYear: 1900,
    },
  ],
};

export default Table;
