import React, { useState } from 'react'
import "./_Header.scss";
import logo from "../../assets/logo.jpeg"
import Navbar from './navBar/NavBar';
const Header = () => {
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
    <Navbar/>
  </header>


  )
}

export default Header
