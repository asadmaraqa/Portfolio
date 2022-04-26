import React from 'react';
import { Link } from 'react-router-dom';

import ButtonMain from '../buttonMain/ButtonMain';
import "../../sass/_main.scss";

type blogDataPropType = {
    id:string,
    title:string,
    description:string,
    picture:string,
    alt:string,
}

const BlogCard:React.FC<blogDataPropType> = ({id, title,description,picture,alt}) => {
  let path=window.location.pathname.slice(0, -1);
  const condition=path===`/blog/` ? true:false;
  return (
    <article className={condition?"blog__article":"blogs__article"} >
      <img src={picture} alt={alt}  className="blogs__image" />
      <h3 id={id} className="blogs__h3">{title}</h3>
      <p className="blogs__p">{condition?(description.substring(1,90)) : description} </p>
      {!condition ? <Link to={`/blog/${id}`}> <ButtonMain id={id}/></Link>:""}
    </article>
    
  )
}


export default BlogCard