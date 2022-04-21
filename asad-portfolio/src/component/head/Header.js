import React, { useState } from 'react'
import "../../sass/_main.scss";
import logo from "../../assets/logo.jpeg"
import Navbar from './navBar/NavBar';
const Header = (scrollToSection ,services) => {
  window.addEventListener("scroll",function(){
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY>100)
  })
  const [mobile, setMobile]=useState(false);
  return (
    
    <header className="header">
<div className='header__logo'>
   <img src={logo} className='header__logo__img'></img>
   <a href="../index.html"><span className="header__logo__text">ASAD MARAQA</span></a>
 </div>
    <Navbar scrollToSection services/>
  </header>


  )
}

export default Header
