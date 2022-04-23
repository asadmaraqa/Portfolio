import React from 'react';
import PropTypes from "prop-types";
import ButtonMain from '../buttonMain/ButtonMain';

import "../../sass/_main.scss";

const Card = ({ title, description, button }) => {
  return (
    <div className={"card__container"} >
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonMain>{button}</ButtonMain>
    </div>
  )
}
Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  conditbuttonion: PropTypes.string,
}
export default Card