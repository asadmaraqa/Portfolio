import React from 'react';

import BlogCard from './BlogCard';
import "../../sass/_main.scss";

const Blogs = ({blogsData}) => {
  return (
    <section className="blogs" id="blogs">
      <h2>Blogs</h2>
      {blogsData.map((blog) =>
        <BlogCard key={blog.id} {...blog} show={true}  />
      )}
      <article>
      </article>
    </section>
  )
}

export default Blogs
