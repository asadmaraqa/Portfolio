import React from 'react';
import PropTypes from "prop-types";

import "../../sass/_main.scss";

const Input = ({InputName, placeHolder, condition, cols, rows}) => {
  const CustomTag = (condition) ? 'input' : 'textarea';

  return (
    <>
      <label htmlFor={InputName}>{placeHolder}</label>
      <CustomTag type="text" name={InputName} id={InputName} placeholder={placeHolder} 
      cols={cols} rows={rows} required/>
    </>
  )
}
Input.propTypes = {
  InputName: PropTypes.string,
  placeHolder: PropTypes.string,
  condition: PropTypes.bool,
  className:PropTypes.string,
  cols:PropTypes.string,
  rows:PropTypes.string
}
export default Input