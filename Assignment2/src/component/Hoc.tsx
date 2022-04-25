import React from "react";
import PropTypes from "prop-types";
import withCountry from "../HOC/withCountry";

type PropsHoc = {
  data: any[]
  error: any[] | null

}
const Hoc = ({ data, error }: PropsHoc) => {

  return (
    <div>
      {error ? <h1>{error}</h1>: data.map((countryName: any) => {
        return <h1 key={countryName.name.common}>{countryName.name.common}</h1>
      })}
    </div>
  );
};

export default withCountry(Hoc, "suomi"); 