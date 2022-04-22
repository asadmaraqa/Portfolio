
import {React, useState, useEffect } from "react";

const withCountry = (Component, name) => {
  const withCountry = (props) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const baseUrl = `https://restcountries.com/v3.1/name/${name}`;

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
      }
      fetchData();
    }, []);
    return <Component {...props} data={data} error={error}  />;

  };
  return withCountry;
}; 
export default withCountry;