import React from 'react'
import Header from './component/head/Header'
import "./App.scss"
import Hero from './component/hero/Hero'
import Services from './component/services/Services'
import TechStack from './component/techStack/TechStack'

const App = () => {
  return (
    <div className='container'>
      <Header/>
      <Hero/>
      <Services/>
      <TechStack/>
    </div>
  )
}

export default App
