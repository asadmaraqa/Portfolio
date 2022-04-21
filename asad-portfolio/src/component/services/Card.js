import React from 'react'
import "../../sass/_main.scss"
const Card = ({ title, description,button }) => {
  return (
    <div className={"Card__container"} >
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{button}</button>
    </div>
  )
}

export default Card