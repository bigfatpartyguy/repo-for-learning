import React from 'react';
import Table from '../Table/Table';
import students from '../../Data';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Table data={students} />
    </div>
  );
}

export default App;
