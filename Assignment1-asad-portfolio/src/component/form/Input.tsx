import React from 'react';

import "../../sass/_main.scss";

type formData={
  InputName:string,
  placeHolder:string,
  condition:boolean,
  className:string,
  cols?:number,
  rows?:number,
}

const Input:React.FC<formData> = ({InputName, placeHolder, condition,className, cols, rows}) => {
  const CustomTag = (condition) ? 'input' : 'textarea';

  return (
    <>
      <label htmlFor={InputName}>{placeHolder}</label>
      <CustomTag type="text" name={InputName} id={InputName} placeholder={placeHolder} 
      cols={cols} rows={rows} className={className} required/>
    </>
  )
}

export default Input