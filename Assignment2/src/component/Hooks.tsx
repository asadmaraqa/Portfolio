
import React from 'react'
import useCountry from "../hooks/useCountry"


const Hooks:React.FC= () => {
  const {errorData, data} = useCountry("suomi");
console.log(errorData)
  return (
    <div>
      {errorData ? <div>{errorData.message}</div> : data && data.map((countryName:any ) => {
        return <h1 key={countryName.name.common}>{countryName.name.common}</h1>
      })}
    </div>
  )
}

export default Hooks