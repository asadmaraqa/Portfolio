import React from 'react';

import BlogCard from './BlogCard';
import "../../sass/_main.scss";

type blogDataPropType={
  blogsData:{
    id:string,
    title:string,
    description:string,
    picture:string,
    alt:string,
    }[];
}


const Blogs:React.FC<blogDataPropType> = (props) => {
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
