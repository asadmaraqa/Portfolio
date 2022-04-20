import React from 'react'
import Header from './component/head/Header'
import "./App.scss"
import Hero from './component/hero/Hero'
import Services from './component/services/Services'
import TechStack from './component/techStack/TechStack'
import Blogs from "./component/blogs/Blogs"
import Form from './component/form/Form'
import Footer from './component/footer/Footer'
const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Services/>
      <TechStack/>
      <Blogs/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default App
