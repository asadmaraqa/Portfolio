import {useEffect, useState } from "react";

const useCountry = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = `https://restcountries.com/v3.1/name/${name}`;
        useEffect(() => {
            fetch(baseUrl)
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => setError(err));
        }, [baseUrl]);
        return [error,data];
  };
  export default useCountry;