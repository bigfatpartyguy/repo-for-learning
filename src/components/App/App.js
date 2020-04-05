import React from 'react';
import styles from './App.module.css';
import Table from '../Table/Table';
import students from '../../Data';

function App() {
  return (
    <div className={styles.main}>
      <Table students={students} />
    </div>
  );
}

export default App;
