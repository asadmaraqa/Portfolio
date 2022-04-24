import React from 'react';

import "../../sass/_main.scss";

interface buttonId{
  id:string,
}

const ButtonMain:React.FC<buttonId> = (prop) => {
  return (
    <button aria-labelledby={prop.id} className="btn blogs__btn" >Read
    More</button>
  )
}

export default ButtonMain