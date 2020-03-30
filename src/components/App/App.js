import React from 'react';
import styles from './App.module.css';
import Button from '../Button/Button';
import Table from '../Table/Table';

function App() {
  return (
    <div className={styles.main}>
      <Table />
      <Button>Next</Button>
    </div>
  );
}

export default App;
