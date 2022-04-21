import React from 'react'
import "./_TechStack.scss"
const TechStack = () => {
  return (
    <section className="techstack">
      <h2 className="techstack__h2">Tech stack</h2>
      <ul className="techstack__ul">
        <li><i className="fab fa-js fa-4x"></i></li>
        <li><i className="fab fa-react fa-4x"></i></li>
        <li><i className="fab fa-sass fa-4x" aria-hidden="true"></i></li>
        <li><i className="fab fa-css3 fa-4x" aria-hidden="true"></i></li>
      </ul>
    </section>
  )
}

export default TechStack