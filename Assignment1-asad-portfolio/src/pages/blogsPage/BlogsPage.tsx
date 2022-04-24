import React from 'react';
import Blogs from '../../component/blogs';
import Footer from '../../component/footer';
import Header from '../../component/header';
import { BlogsData } from "../../mockData/BlogsData";

import "../../sass/_main.scss";

const BlogsPage:React.FC = () => {

  return (
    <div className='blogs__container'>
      <Header />
      <section className="blogs__allblogs">
        <h1>All the blogs are here</h1>
      </section>
      <Blogs blogsData={BlogsData}/>
      <Footer />
    </div>
  )
}

export default BlogsPage