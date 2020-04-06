import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Table.module.css';
import Pagination from '../Pagination/Pagination';

function calcPages(rowsInSource, itemsPerPage) {
  return Math.ceil(rowsInSource / itemsPerPage);
}

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

  renderTableRow = () => this.getVisibleStudents().map((st) => (
    <tr key={`${st.secondName}${st.birthYear}`}>
      <td>{st.firstName}</td>
      <td>{st.secondName}</td>
      <td>{st.birthYear}</td>
    </tr>
  ));

  handleSelectChange = (event) => {
    event.persist();
    this.setState((state, props) => {
      const itemPerPage = +event.target.value;
      const pages = calcPages(props.students.length, itemPerPage);
      let { page } = state;
      if (page > pages) {
        page = pages;
      }
      if (page > 1 && page < pages) {
        return {
          itemPerPage,
          pages,
          page,
          nextBtnDisabled: false,
          prevBtnDisabled: false,
        };
      } if (page === pages && page > 1) {
        return {
          itemPerPage,
          pages,
          page,
          nextBtnDisabled: true,
          prevBtnDisabled: false,
        };
      }
      return {
        itemPerPage,
        pages,
        page,
      };
    });
  };

  handleNextClick = () => {
    this.setState((state) => {
      if (state.pages - state.page === 1) {
        return {
          page: state.page + 1,
          nextBtnDisabled: true,
          prevBtnDisabled: false,
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
          nextBtnDisabled: false,
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

Table.propTypes = {
  students: PropTypes.arrayOf(PropTypes.object),
};

Table.defaultProps = {
  students: [],

};

export default Table;
