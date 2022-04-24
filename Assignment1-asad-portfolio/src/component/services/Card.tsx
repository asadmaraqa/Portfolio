import React from 'react';
import ButtonMain from '../buttonMain/ButtonMain';

import "../../sass/_main.scss";

interface servicesData{
    idServices:string,
    titleServices:string,
    descriptionServices:string,
    buttonServices:string,
}

const Card:React.FC<servicesData> = (propsServices) => {
  return (
    <div className={"card__container"} >
      <h3>{propsServices.titleServices}</h3>
      <p>{propsServices.descriptionServices}</p>
      <ButtonMain id={propsServices.idServices}/>
    </div>
  )
}

export default Card