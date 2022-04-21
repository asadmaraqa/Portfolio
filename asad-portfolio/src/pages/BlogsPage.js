import React from 'react'
import Blogs from '../component/blogs/Blogs'
import Footer from '../component/footer/Footer'
import Header from '../component/head/Header'
import "../sass/_main.scss"
const BlogsPage = () => {
  return (
    <div className='blogs__container'>
      <Header />
      <section className="hero--allblogs">
        <h1>All the blogs are here</h1>
      </section>
      <Blogs />
      <Footer />
    </div>
  )
}

export default BlogsPage