import React from 'react'
import "../../sass/_main.scss"
import { BlogsData } from "./BlogsData"
import BlogCard from './BlogCard'
const Blogs = () => {
  return (
    <section className="blogs" id="blogs">
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
