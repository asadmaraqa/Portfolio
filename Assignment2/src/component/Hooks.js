
/*import React from 'react'
import useCountry from "../hooks/useCountry"

type data ={
  country:object
}
const Hooks = () => {
  const [error, country] = useCountry("suomi");
  console.log(typeof country)
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

export default Hooks*/