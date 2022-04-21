import React, { useState, useEffect } from 'react'
import './_NavBar.scss'
import logo from "../../../assets/logo.jpeg"
import { Link } from 'react-router-dom'

export default function Navbar() {
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
  const scrollHandler =(e,sectionName)=>{ let section = document.getElementById(sectionName);
  e.preventDefault();
  section && section.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(sectionName, sectionName, "/"+sectionName);}
  return (
    <nav className='nav'>
      {(toggleMenu || screenWidth > 750) && (
        <ul className="nav__list">
          <li className="nav__items"><Link to="/">Home</Link></li>
          <li className="nav__items"><Link to="/blogs">Blogs</Link></li>
          <li className="nav__items"><a href="/" onClick={e => {scrollHandler(e,"services")}}>Services</a></li>
          <li className="nav__items"><a href="/" onClick={e => {scrollHandler(e,"blogs")}}>Blogs</a></li>
          <li className="nav__items"><a href="/" onClick={e => {scrollHandler(e,"letsTalk")}}>Lets talk</a></li>
        </ul>
      )}
      <i className='fas fa-bars fa-2x nav__icon' aria-hidden="true" onClick={toggleNav} />
    </nav>
  )
}