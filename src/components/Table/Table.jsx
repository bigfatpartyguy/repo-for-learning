import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TableHeaderCell from '../TableHeaderCell/TableHeaderCell';
import Button from '../Button/Button';
import Pagination from '../Pagination/Pagination';
import DeleteModal from '../CommonModal/Modals/DeleteModal';
import AddEditModal from '../CommonModal/Modals/AddEditModal';
import { sortRows } from '../../helpers';
import { v4 as uuidv4 } from 'uuid';
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
      modalsOpen: {
        delete: false,
        add: false,
        edit: false,
      },
      studentId: null,
    };
    this.state = initialState;
  }

  handleSelect = (event) => {
    event.persist();
    this.setState(() => ({
      page: 1,
      rowsPerPage: +event.target.value,
    }));
  };

  handleDeleteClick = () => {
    this.setState((state) => {
      const students = state.students.filter(
        (row) => row.id !== state.studentId,
      );
      return {
        students,
      };
    });
    this.handleCloseModal();
  };

  handleSubmitRow = (row) => {
    const newStudent = { ...row };
    const { firstName, secondName, birthYear } = newStudent;
    if (!firstName || !secondName || !birthYear) {
      // eslint-disable-next-line no-undef, no-alert
      alert('Please, fill in the input fields.');
      return;
    }
    newStudent.id = uuidv4();
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

  handleOpenDeleteModal = (id) => {
    this.setState((state) => {
      const modalsOpen = { ...state.modalsOpen };
      modalsOpen.delete = true;
      return {
        modalsOpen,
        studentId: id,
      };
    });
  };

  handleOpenAddModal = () => {
    this.setState((state) => {
      const modalsOpen = { ...state.modalsOpen };
      modalsOpen.add = true;
      return {
        modalsOpen,
      };
    });
  };

  handleCloseModal = () => {
    this.setState((state) => {
      const modalsOpen = { ...state.modalsOpen };
      Object.keys(modalsOpen).forEach((key) => {
        modalsOpen[key] = false;
      });
      return { modalsOpen };
    });
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
                onClick={() => this.handleOpenDeleteModal(id)}
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
    const {
      sortFieldName,
      sortDirectionAsc,
      rowsPerPage,
      page,
      students,
      modalsOpen,
    } = this.state;
    return (
      <div>
        <table className={styles.main}>
          <thead>
            <tr>
              <TableHeaderCell
                value="firstName"
                sortFieldName={sortFieldName}
                sortDirectionAsc={sortDirectionAsc}
                onClick={this.handleSort}
              >
                First Name
              </TableHeaderCell>
              <TableHeaderCell
                value="secondName"
                sortFieldName={sortFieldName}
                sortDirectionAsc={sortDirectionAsc}
                onClick={this.handleSort}
              >
                Second Name
              </TableHeaderCell>
              <TableHeaderCell
                value="birthYear"
                sortFieldName={sortFieldName}
                sortDirectionAsc={sortDirectionAsc}
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
            onClick={this.handleOpenAddModal}
          />
        </div>
        <Pagination
          value={rowsPerPage}
          onChange={this.handleSelect}
          selectOptions={[2, 4, 6]}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          handlePageClick={this.handlePageClick}
          page={page}
          pages={Math.ceil(students.length / rowsPerPage)}
        />
        <DeleteModal
          isOpen={modalsOpen.delete}
          handleCloseModal={this.handleCloseModal}
          handleDeleteClick={this.handleDeleteClick}
        />
        <AddEditModal
          isOpen={modalsOpen.add}
          handleCloseModal={this.handleCloseModal}
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
