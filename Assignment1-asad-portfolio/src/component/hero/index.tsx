import React from 'react';

import "../../sass/_main.scss"

const hero:React.FC = () => {
  return (

    <section className="hero">
      <h1 className="hero__h1 hero__typewriter">Hi, Im Asad Maraqa</h1>
      <p className="hero__p">Im a full stack developer who takes care of the enviroment. im trying to make a change and make
        the world to a better place.
        I can offer many things to you starting with UX/UI design and ending with an nice functional website.
      </p>
      <img src={require("../../assets/asad.png")} className='hero__img' />
    </section>

  )
}

export default hero
