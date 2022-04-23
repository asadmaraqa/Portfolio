import React from 'react';
import logo from "../../assets/logo.jpeg";
import Navbar from './navBar';

import "../../sass/_main.scss";

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <header className="header">
      <div className='header__logo' aria-label='Logo for Asad Maraqa portfolio'>
        <img src={logo} alt="logo" className='header__img'></img>
        <span className="header__text">ASAD MARAQA</span>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header
