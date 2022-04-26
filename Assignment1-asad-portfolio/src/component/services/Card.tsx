import React from 'react';
import ButtonMain from '../buttonMain/ButtonMain';

import "../../sass/_main.scss";

type servicesDataPropType={
    id:string,
    title:string,
    description:string,
}

const Card:React.FC<servicesDataPropType> = ({id,title,description}) => {
  return (
    <div className={"card__container"} >
      <h3>{title}</h3>
      <p>{description}</p>
      <ButtonMain id={id}/>
    </div>
  )
}

export default Card