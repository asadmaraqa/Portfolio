import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const useCountry = (nameOfCountry) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = `https://restcountries.com/v3.1/name/${nameOfCountry}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(baseUrl);
        if (!req.ok) {
          throw new Error("not found");
        }
        const res = await req.json();
        setData(res);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [baseUrl]);
  return [error, data];
};
useCountry.prototype = {
  name: PropTypes.string,
}
export default useCountry;