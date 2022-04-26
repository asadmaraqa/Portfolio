import React from 'react';

import Card from './Card';

type servicesDataPropType={
  servicesData:{
    id:string,
    title:string,
    description:string,
    button:string,
    }[]
}

const Services:React.FC<servicesDataPropType> = (props) => {
  return (
    <section name="services" className='services' id="services" >
      <h2 className='services__h2'>Services</h2>
      {props.servicesData.map((dataCard)=>  <Card key={dataCard.id} {...dataCard} />)}
    </section>
  )
}

export default Services