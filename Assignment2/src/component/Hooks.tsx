//still underwork never mind for now

import React from 'react'
import useCountry from "../hooks/useCountry"

const Hooks:React.FC = (props) => {
  const [error, country] = useCountry("suomi");
  return (
    <div>
      {error ? (<div>{error}</div>) :
        (<div>{country && country.map(({countryName}) => {
          console.log(countryName)
          return (countryName.name.common)
        })}
        </div>
        )}
    </div>
  )
}

export default Hooks