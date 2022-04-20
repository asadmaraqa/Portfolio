import React from 'react'
import "./_Blogs.scss"
import { BlogsData } from "./BlogsData"
import BlogCard from './BlogCard'
const Blogs = () => {
  return (
    <section class="blogs">
      <h2>Blogs</h2>
      {BlogsData.map((blog) =>
       <BlogCard key={blog.id} {...blog}/>
      )}
      <article>
      </article>
    </section>
  )
}

export default Blogs
