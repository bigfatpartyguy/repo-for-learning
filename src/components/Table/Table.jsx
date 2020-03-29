import React, { Component } from 'react';
import styles from './Table.module.css';

const students = [
  { firstName: 'John', secondName: 'Johnson', birthYear: 1978 },
  { firstName: 'John1', secondName: 'Johnson1', birthYear: 1988 },
  { firstName: 'John2', secondName: 'Johnson2', birthYear: 1908 },
  { firstName: 'John3', secondName: 'Johnson3', birthYear: 1998 },
  { firstName: 'John4', secondName: 'Johnson4', birthYear: 1990 },
];

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students,
      page: 1,
      itemPerPage: 2,
    };
  }

  render() {
    return (
      <div className={styles.main}>
        тут будет наша таблица
      </div>
    );
  }
}

export default Table;
