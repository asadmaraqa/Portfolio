import React from 'react'
import "./_Blogs.scss"
const BlogCard = ({id,title,description}) => {
  console.log({id});
  return (
    <article class="blogs__article">
      <img src={"../../assets/img-1.jpg"} alt="Keyboard with blue lights" width="200px" class="blogs__image" />
      <h3 id="4" class="blogs__h3">{title}</h3>
      <p class="blogs__p">{description.substring(1,90)} ...</p>
      <button onclick="window.location.href='pages/blog.html';" id={id} aria-labelledby="btn4 4" class="btn blogs__btn">Read
        More</button>
    </article>
  )
}

export default BlogCard