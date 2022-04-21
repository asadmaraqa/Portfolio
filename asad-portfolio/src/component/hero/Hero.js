import React from 'react'
import "./_hero.scss"
import HeroImage from "../../assets/asad.png"


const hero = () => {
  
  return (

    <section className="hero">
      <h1 className="hero__h1 hero__typewriter">Hi, Im Asad Maraqa</h1>
      <p className="hero__p"> Im a software developer who takes care of the enviroment. im trying to make a change and make
        the world to a better place.
        sometimes it doesnt look like it. but trust me many things changed and become better since the dark ages.
      </p>
      <img  src={HeroImage} className='hero__img'/>
    </section>

  )
}

export default hero
