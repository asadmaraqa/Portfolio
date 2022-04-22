import React from 'react';
import { Link } from 'react-router-dom';
import "../../sass/_main.scss";
const ButtonMain = ({id}) => {
  return (
    <button aria-labelledby={id} className="btn blogs__btn" >Read
    More</button>
  )
}

export default ButtonMain