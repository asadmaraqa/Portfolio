import React from 'react';
import Card from './Card';

type servicesData={
  servicesData:{
    idServices:string,
    titleServices:string,
    descriptionServices:string,
    buttonServices:string,
    }[]
}

const Services:React.FC<servicesData> = (props) => {
  return (
    <section name="services" className='services' id="services" >
      <h2 className='services__h2'>Services</h2>
      {props.servicesData.map((dataCard)=>  <Card key={dataCard.idServices} {...dataCard} />)}
    </section>
  )
}

export default Services