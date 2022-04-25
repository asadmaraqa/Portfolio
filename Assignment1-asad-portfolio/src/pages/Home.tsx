import React from 'react';
import Header from '../component/header';
import Hero from '../component/hero';
import Services from '../component/services';
import TechStack from '../component/techStack';
import Blogs from "../component/blogs";
import Form from '../component/form';
import Footer from '../component/footer';
import { BlogsData } from "../mockData/BlogsData";
import {ServicesData} from "../mockData/ServicesData";

import "../sass/_main.scss";

const Home:React.FC = () => {
  return (
    <div className='home__container'>
      <Header/>
      <Hero/>
      <Services servicesData={ServicesData}/>
      <TechStack/>
      <Blogs blogsData={BlogsData}/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Home
