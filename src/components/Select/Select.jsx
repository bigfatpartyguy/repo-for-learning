import React from 'react';
import PropTypes from 'prop-types';

function Select(props) {
  return (
    <select value={props.selectValue} onChange={props.handleSelectChange}>
      {
        props.rowsPerPageOptions.map(opt => {
          return <option key={opt} value={opt}>{opt}</option>;
        })
      }
    </select>
  );
}

Select.propTypes = {
  handleSelectChange: PropTypes.func,
  selectValue: PropTypes.number,
};

Select.defaultProps = {
  handleSelectChange: () => {},
  selectValue: 4,
}

export default Select;
