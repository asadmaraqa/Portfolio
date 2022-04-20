import React from 'react'
import "./_Footer.scss"
const Footer = () => {
  return (
   <footer class="footer">
   <p>All copyright reserved to Asad</p>
   <ul class="footer__ul">
     <li><a href="https://www.facebook.com/">
      <img src="../assets/images/facebook.jpeg" alt="Follow me on facebook"
           width="50px"/></a></li>
     <li><a href="https://github.com/">
      <img src="../assets/images/github.jpeg" alt="Follow me on github"
           width="50px"/></a>
     </li>
   </ul>
 </footer>
  )
}

export default Footer