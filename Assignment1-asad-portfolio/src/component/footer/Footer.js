import React from 'react'
import "../../sass/_main.scss"
const Footer = () => {
  return (
    <footer className="footer">
      <p>All copyright reserved to Asad</p>
      <ul className="footer__ul">
        <li ><a href="https://www.facebook.com/">
        <i className="fa fa-facebook fa-2x" ></i></a></li>
        <li><a href="https://github.com/">
        <i className="fa fa-github fa-2x"></i>
        </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer