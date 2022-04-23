import React from "react";
import PropTypes from "prop-types";
import withCountry from "../HOC/withCountry";

const Hoc = ({ error,data }) => {
  if (data) {
    data = data.map((countryName) => {
      return countryName.name.common
    });
  }
  if (error) {
    data = error.message;
  }

  return (
    <div>
      {data}
    </div>
  );
};
Hoc.prototype = {
  data: PropTypes.array,
  error: PropTypes.object
}
export default withCountry(Hoc, "suomi");