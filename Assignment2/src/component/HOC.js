import React from "react";
import withCountry from "../HOC/withCountry";
import PropTypes from "prop-types"
const Hoc = ({ error, country }) => {
 let data;
 if(data){
  data=country.map((countryName)=>{
   return countryName.name.common
  });
 }
  if (error) {
    data=error.message;
  }

  return (
    <div>
     {data}
    </div>
  );
};
Hoc.prototype={
 data:PropTypes.array,
 error:PropTypes.object
}
export default withCountry(Hoc,"finland");