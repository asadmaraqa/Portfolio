import React from 'react';
import { Link } from 'react-router-dom';
import ButtonMain from '../buttonMain/ButtonMain';

import "../../sass/_main.scss";

type blogData={
    id:string,
    title:string,
    description:string,
    picture:string,
    alt:string,
}

const BlogCard:React.FC<blogData> = (props) => {
  let path=window.location.pathname;
  const condition=path==="/"? false:true;
  return (
    <article className={condition?"blog__article":"blogs__article"} >
      <img src={props.picture} alt={props.alt}  className="blogs__image" />
      <h3 id={props.id} className="blogs__h3">{props.title}</h3>
      <p className="blogs__p">{!condition?(props.description.substring(1,90)) : props.description} </p>
      {condition ? null :<Link to={`/blog/${props.id}`}> <ButtonMain id={props.id}/></Link>}
    </article>
    
  )
}


export default BlogCard