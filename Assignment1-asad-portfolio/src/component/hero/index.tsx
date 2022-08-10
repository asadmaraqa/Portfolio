import React from 'react';

import "../../sass/_main.scss"

const hero:React.FC = () => {
  return (

    <section className="hero">
      <h1 className="hero__h1 hero__typewriter">Hi, Im Asad Maraqa</h1>
      <p className="hero__p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
      </p>
      <img src={require("../../assets/asad.png")} className='hero__img' />
    </section>

  )
}

export default hero
