import React from 'react'
import "../../sass/_main.scss"
import ButtonMain from '../buttonMain/ButtonMain'
const Card = ({ title, description,button }) => {
  return (
    <div className={"Card__container"} >
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonMain>{button}</ButtonMain>
    </div>
  )
}

export default Card