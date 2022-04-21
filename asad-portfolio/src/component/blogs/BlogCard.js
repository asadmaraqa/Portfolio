import React from 'react'
import "../../sass/_main.scss"
import ButtonMain from '../buttonMain/ButtonMain';
import { Link } from 'react-router-dom'

const BlogCard = ({id,title,description, picture,alt,show}) => {
  return (
    <article className={show==false?"blog__article":"blogs__article"} >
      <img src={picture} alt={alt}  className="blogs__image" />
      <h3 id={id} class="blogs__h3">{title}</h3>
      <p class="blogs__p">{show==false?description: description.substring(1,90)} ...</p>
      {show==false ? null :<Link to={`${id}`}> <ButtonMain title={title} description={description} pic={picture}/></Link>}
    </article>
    
  )
}

export default BlogCard