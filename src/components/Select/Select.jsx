import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  return (
    <select value={props.selectValue} onChange={props.handleSelectChange}>
      {props.rowsPerPageOptions.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

Select.propTypes = {
  handleSelectChange: PropTypes.func,
  selectValue: PropTypes.number,
  rowsPerPageOptions: PropTypes.arrayOf(PropTypes.number),
};

Select.defaultProps = {
  handleSelectChange: () => {},
  selectValue: 4,
  rowsPerPageOptions: [2, 4, 6],
};

export default Select;
