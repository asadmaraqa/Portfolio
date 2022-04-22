import React from 'react'
import useCountry from "../hooks/useCountry"

const Hooks = () => {
  const [error,country] = useCountry("suomi");
  return (
    <div>{error ? (<div>{error}</div>):
      (<div>{country && country.map((countryName) => {
        return (countryName.name.common)
      })}
      </div>
      )}
    </div>
  )
}

export default Hooks