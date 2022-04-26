
import React from 'react'
import useCountry from "../hooks/useCountry"

type PropsHook = {
  data: string[] 
  error: any[] | null
}
const Hooks:React.FC<PropsHook>= (props) => {
  const [error, data] = useCountry("suomi");
  console.log(error)
  return (
    <div>
      {error ? <h1>{error.message}</h1>: data.map((countryName:any) => {
        return <h1 >{countryName.name.common}</h1>
      })}
    </div>
  )
}

export default Hooks