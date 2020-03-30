import React, { Component } from 'react';
import Button from '../Button/Button';
import styles from './Pagination.module.css';

export default class Pagination extends Component {
  render() {
    return (
      <div className={styles.main}>
        <Button>Previous</Button>
        <Button>Next</Button>
      </div>
    );
  }
}
