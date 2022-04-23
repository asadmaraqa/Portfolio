import React from 'react'
import { useParams } from 'react-router-dom';
import { BlogsData } from "../../mockData/BlogsData";
import BlogCard from '../../component/blogs/BlogCard';
import Footer from '../../component/footer';
import Header from '../../component/header';

const BlogPage = () => {
  let { id } = useParams();
  return (
    <div className='blogs__container'>
      <Header />
      <section className="blogs__allblogs">
        <h1>{BlogsData[id].title}</h1>
      </section>
      <BlogCard id={id} tilte={BlogsData[id].title} description={BlogsData[id].description} picture={BlogsData[id].picture} alt={BlogsData[id].alt} show={false} />
      <Footer />
    </div>
  )
}

export default BlogPage