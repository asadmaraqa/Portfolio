import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../../sass/_main.scss";

import * as Scroll from 'react-scroll';

const Navbar:React.FC = () => {
  const path = window.location.pathname;
  const condition=path==("/blogs" || "/blog");
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  return (

    <nav className='nav'>
      {(toggleMenu || screenWidth > 750) && (
        <ul className="nav__list">
          <li className="nav__items"><Link to="/">Home</Link></li>
          <li className="nav__items"><Link to="/blogs">Blogs</Link></li>
          <li className="nav__items">
            {condition ? <Link to="/">Services</Link> : <Scroll.Link to="services" spy={true} smooth={true} offset={50} duration={500}>Services</Scroll.Link>}</li>
          <li className="nav__items">
            {condition ? <Link to="/">Lets talk</Link> : <Scroll.Link to="letsTalk" spy={true} smooth={true} offset={50} duration={500}>Lets talk</Scroll.Link>}</li>
        </ul>
      )}
      <i className='fas fa-bars fa-2x nav__icon' aria-hidden="true" onClick={toggleNav} />
    </nav>
  )
}

export default Navbar

