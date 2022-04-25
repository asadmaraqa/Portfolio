import React from 'react'

import { BlogsData } from "../../mockData/BlogsData";
import BlogCard from '../../component/blogs/BlogCard';
import Footer from '../../component/footer';
import Header from '../../component/header';

const pathArray = window.location.pathname.split('/');
const urlId:any = pathArray[2];
const BlogPage:React.FC = () => {
 
  return (
    <div className='blogs__container'>
      <Header />
      <section className="blogs__allblogs">
        <h1>{BlogsData[urlId].title}</h1>
      </section>
      <BlogCard id={urlId} title={BlogsData[Number(urlId)].title} description={BlogsData[Number(urlId)].description} picture={BlogsData[Number(urlId)].picture} alt={BlogsData[Number(urlId)].alt} />
      <Footer />
    </div>
  )
}

export default BlogPage