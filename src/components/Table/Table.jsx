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
      students: students
    };
    // this.getVisibleStudents = this.getVisibleStudents.bind(this);
  }

  getVisibleStudents() {
    const start = (this.state.page - 1) * this.state.itemPerPage;
    const end = start + this.state.itemPerPage;
    return students.slice(start, end);
  }

  render() {
    const visibleStudents = this.getVisibleStudents().map(st => (
      <tr>
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
        <Pagination />
      </div>
    );
  }
}

export default Table;
