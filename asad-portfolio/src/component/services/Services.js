import React from 'react'
import Card from './Card'
import {dataServices} from "./ServicesData"
const Services = () => {
  return (
    <section className='services'>
      <h2 className='services__h2'>Services</h2>
      {dataServices.map((dataCard)=>  <Card key={dataCard.id} {...dataCard} />)}
    </section>
  )
}

export default Services