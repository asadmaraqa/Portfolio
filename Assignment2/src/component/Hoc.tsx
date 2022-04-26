import React from "react";
import PropTypes from "prop-types";
import withCountry from "../HOC/withCountry";

type PropsHoc = {
  data: string[] 
  setErrorData: Error | null

}
const Hoc = ({ data, setErrorData }: PropsHoc) => {

  return (
    <div>
      {setErrorData ? <h1>{setErrorData.message}</h1>: data.map((countryName: any) => {
        return <h1 key={countryName.name.common}>{countryName.name.common}</h1>
      })}
    </div>
  );
};

export default withCountry(Hoc, "suomi"); 