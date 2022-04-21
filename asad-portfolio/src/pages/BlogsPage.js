import React from 'react'
import Blogs from '../component/blogs/Blogs'
import Header from '../component/head/Header'
import "../sass/_main.scss"
const BlogsPage = () => {
  return (
   <div className='blogs__container'>
    <Header/>
    <section class="hero--allblogs">
      <h1>All the blogs are here</h1>
    </section>
    <Blogs/>
    </div>
  )
}

export default BlogsPage