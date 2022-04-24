import React, { useState, useEffect } from "react";

const WithCountry = (WrapperComponent, nameOfCountry) => {
  const WithCountry = (props) => {
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
      }
      fetchData();
    }, [nameOfCountry]);
    return <WrapperComponent error={error} data={data} {...props} />;

  };
  return WithCountry;
}; 
export default WithCountry; 