import React, { Component } from "react";
import styles from "./Table.module.css";
import Pagination from "../Pagination/Pagination";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      itemPerPage: 4,
      pages: 0,
      nextBtnDisabled: true,
      prevBtnDisabled: true,
    };
  }

  componentDidMount = () => {
    this.setState((state, props) => {
      const pages = calcPages(props.students.length, state.itemPerPage);
      if (pages > state.page) {
        return {
          pages,
          nextBtnDisabled: false,
        };
      }
      return { pages };
    });
  };

  getVisibleStudents() {
    const start = (this.state.page - 1) * this.state.itemPerPage;
    const end = start + this.state.itemPerPage;
    return this.props.students.slice(start, end);
  }

  renderTableRow = () => {
    return this.getVisibleStudents().map((st) => (
      <tr key={`${st.secondName}${st.birthYear}`}>
        <td>{st.firstName}</td>
        <td>{st.secondName}</td>
        <td>{st.birthYear}</td>
      </tr>
    ));
  };

  updatePages = () => {
    this.setState((state, props) => {
      const pages = calcPages(props.students.length, state.itemPerPage);
      return { pages };
    });
  };

  handleSelectChange = (event) => {
    this.setState({ itemPerPage: +event.target.value });
    this.updatePages();
  };

  handleNextClick = () => {
    this.setState((state) => {
      if (state.pages - state.page === 1) {
        return {
          page: state.page + 1,
          nextBtnDisabled: true,
        };
      }
      return {
        page: state.page + 1,
        prevBtnDisabled: false,
      };
    });
  };

  handlePrevClick = () => {
    this.setState((state) => {
      if (state.page === 2) {
        return {
          page: state.page - 1,
          prevBtnDisabled: true,
        };
      }
      return {
        page: state.page - 1,
        nextBtnDisabled: false,
      };
    });
  };

  render() {
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
          <tbody>{this.renderTableRow()}</tbody>
        </table>
        <Pagination
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
          handleSelectChange={this.handleSelectChange}
          selectValue={this.state.itemPerPage}
          nextBtnDisabled={this.state.nextBtnDisabled}
          prevBtnDisabled={this.state.prevBtnDisabled}
          page={this.state.page}
          pages={this.state.pages}
        />
      </div>
    );
  }
}

function calcPages(rowsInSource, itemsPerPage) {
  return Math.ceil(rowsInSource / itemsPerPage);
}

export default Table;
