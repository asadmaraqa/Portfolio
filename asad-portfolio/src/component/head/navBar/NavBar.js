import React, {useState, useEffect} from 'react'
import './_NavBar.scss'
import logo from "../../../assets/logo.jpeg"

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

  return (
    <nav className='nav'>
      {(toggleMenu || screenWidth > 750) && (
      <ul className="nav__list">
      <li className="nav__items">Home</li>
      <li className="nav__items">Services</li>
      <li className="nav__items">Contact</li>
    </ul>
      )}
      <i className='fas fa-bars fa-2x nav__icon' aria-hidden="true" onClick={toggleNav}/>
    </nav>
  )
}