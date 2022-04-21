import React, { useRef } from 'react'
import Header from '../component/head/Header'
import "../sass/_main.scss"
import Hero from '../component/hero/Hero'
import Services from '../component/services/Services'
import TechStack from '../component/techStack/TechStack'
import Blogs from "../component/blogs/Blogs"
import Form from '../component/form/Form'
import Footer from '../component/footer/Footer'
const Home = () => {
 const services=useRef(null); 
 const scrollToSection=(elementRef)=>{
  window.scrollTo({
   top:elementRef
  })
 }
  return (
    <div className='home__container'>
      <Header scrollToSection services/>
      <Hero/>
      < div ref={services}><Services/></div>
      <TechStack/>
      <Blogs/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
