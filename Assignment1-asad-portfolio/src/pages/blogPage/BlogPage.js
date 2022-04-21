import React from 'react'
import { useParams } from 'react-router-dom';
import BlogCard from '../../component/blogs/BlogCard';
import Footer from '../../component/footer/Footer'
import Header from '../../component/head/Header'
import { BlogsData } from "../../component/blogs/BlogsData";


const BlogPage = () => {
  let { id } = useParams();
  return (
    <div className='blogs__container'>
      <Header />
      <section class="hero--allblogs">
        <h1>{BlogsData[id].title}</h1>
      </section>
      <BlogCard id={id} description={BlogsData[id].description} picture={BlogsData[id].picture} show={false} />
      <Footer />
    </div>
  )
}

export default BlogPage