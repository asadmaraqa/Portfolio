import React from 'react';

import BlogCard from './BlogCard';


import "../../sass/_main.scss";

interface blogsData{
  blogsData:{
    id:string,
    title:string,
    description:string,
    picture:string,
    alt:string,
    }[];
}


const Blogs:React.FC<blogsData> = (props) => {
  console.log(props.blogsData)
  return (
    <section className="blogs" id="blogs">
      <h2>Blogs</h2>
      {props.blogsData.map((blog) =>
        <BlogCard key={blog.id} {...blog} />
      )}
      <article>
        
      </article>
    </section>
  )
}

export default Blogs
