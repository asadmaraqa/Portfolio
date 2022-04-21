import React from 'react'
import "./_hero.scss"
import HeroImage from "../../assets/asad.png"


const hero = () => {
  
  return (

    <section className="hero">
      <h1 className="hero__h1 hero__typewriter">Hi, Im Asad Maraqa</h1>

      <p className="hero__p">Im a full stack developer who takes care of the enviroment. im trying to make a change and make
        the world to a better place.
        I can offer many things to you starting with UX/UI design and ending with an nice functional website.
      </p>
      <img  src={HeroImage} className='hero__img'/>
    </section>

  )
}

export default hero
