import React, { Component } from 'react';
import Button from '../Button/Button';
import Select from '../Select/Select';
import styles from './Pagination.module.css';

export default class Pagination extends Component {

  render() {
    const {
      getNextPage,
      getPrevPage,
      updateItemsPerPage,
      parentState,
      page,
      pages
    } = this.props;
    return (
      <div className={styles.main}>
        <Button onClick={() => getPrevPage(parentState)}>Previous</Button>
        {/* <select onChange={(e) => updateItemsPerPage(e.target.value)} name="itemsPerPage" id="itemsPerPage">
          <option value="2">2</option>
          <option selected value="4">4</option>
          <option value="6">6</option>
        </select> */}
        <Select handleSelectChange={this.props.handleSelectChange} rowsPerPageOptions={[2, 4, 6]} selectValue={this.props.selectValue} />
        <p>{`${page} of ${pages}`}</p>
        <Button onClick={() => getNextPage(parentState)}>Next</Button>
      </div>
    );
  }
}
