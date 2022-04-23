import React from 'react';
import Card from './Card';

const Services = ({servicesData}) => {
  return (
    <section name="services" className='services' id="services" >
      <h2 className='services__h2'>Services</h2>
      {servicesData.map((dataCard)=>  <Card key={dataCard.id} {...dataCard} />)}
    </section>
  )
}

export default Services