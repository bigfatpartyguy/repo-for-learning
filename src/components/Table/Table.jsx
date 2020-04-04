import React, { Component } from 'react';
import styles from './Table.module.css';
import Pagination from '../Pagination/Pagination';

const students = [
  { firstName: 'John', secondName: 'Johnson', birthYear: 1978 },
  { firstName: 'Leanne', secondName: 'Graham', birthYear: 1988 },
  { firstName: 'Ervin', secondName: 'Howell', birthYear: 1956 },
  { firstName: 'Bauch', secondName: 'Clementine', birthYear: 2002 },
  { firstName: 'Patricia', secondName: 'Labsak', birthYear: 1997 },
  { firstName: 'Dennis', secondName: 'Schulz', birthYear: 1973 },
  { firstName: 'Kasey', secondName: 'Neistat', birthYear: 1987 },
  { firstName: 'Glenna', secondName: 'Reichert', birthYear: 2005 },
  { firstName: 'Glenna', secondName: 'Reichert', birthYear: 2005 },
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      itemPerPage: 4,
      students,
    };
  }

  getVisibleStudents() {
    const pages = Math.ceil(this.state.students.length / this.state.itemPerPage);
    if (this.state.page > pages) {
      this.setState({ page: pages });
    }
    const start = (this.state.page - 1) * this.state.itemPerPage;
    const end = start + this.state.itemPerPage;
    return students.slice(start, end);
  }

  handleSelectChange = (event) => {
    this.setState({ itemPerPage: +event.target.value });
  }

  updateItemsPerPage = (num) => {
    this.setState({ itemPerPage: +num });
  }

  getNextPage = (state) => {
    if (Math.ceil(state.students.length / state.itemPerPage) > state.page) {
      this.setState({ page: state.page + 1 });
    }
  }

  getPrevPage = (state) => {
    if (state.page > 1) {
      this.setState({ page: state.page - 1 });
    }
  }

  render() {
    const visibleStudents = this.getVisibleStudents().map(st => (
      <tr key={`${st.secondName}${st.birthYear}`}>
        <td>{st.firstName}</td>
        <td>{st.secondName}</td>
        <td>{st.birthYear}</td>
      </tr>
    ));
    return (
      <div className={styles.main}>
        <table className={styles.stTable}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Birth Year</th>
            </tr>
          </thead>
          <tbody>
            {visibleStudents}
          </tbody>
        </table>
        <Pagination
          parentState={this.state}
          getNextPage={this.getNextPage}
          getPrevPage={this.getPrevPage}
          page={this.state.page}
          pages={Math.ceil(this.state.students.length / this.state.itemPerPage)}
          handleSelectChange={this.handleSelectChange}
          selectValue={this.state.itemPerPage}
        />
      </div>
    );
  }
}

export default Table;
