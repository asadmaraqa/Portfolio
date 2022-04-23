import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import ButtonMain from '../buttonMain/ButtonMain';

import "../../sass/_main.scss";

const BlogCard = ({id,title,description, picture,alt,show}) => {
  const Blogid= Number(id);
  return (
    <article className={show==false?"blog__article":"blogs__article"} >
      <img src={picture} alt={alt}  className="blogs__image" />
      <h3 id={Blogid} className="blogs__h3">{title}</h3>
      <p className="blogs__p">{show?(description.substring(1,90)) : description} </p>
      {show==false ? null :<Link to={`/blog/${Blogid}`}> <ButtonMain id={Blogid}/></Link>}
    </article>
    
  )
}
BlogCard.propTypes = {
  Blogid: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  picture:PropTypes.string,
  alt:PropTypes.string,
  show:PropTypes.bool
}


export default BlogCard