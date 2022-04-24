import React from "react";
import PropTypes from "prop-types";
import withCountry from "../HOC/withCountry";

const Hoc = ({ error,data }) => {
  if (data) {
    data = data.map((countryName) => {
      return countryName.name.common
    });
  }

  return (
    <div>
      {error ? <div>{error}</div> : <div>{data}</div>}
    </div>
  );
};
Hoc.prototype = {
  data: PropTypes.object,
  error: PropTypes.object
}
export default withCountry(Hoc, "suomi"); 