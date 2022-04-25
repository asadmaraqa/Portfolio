/*import React, { useEffect, useState } from "react";

type resultProps = {
  name: object;
  commmon: string;
};
const useCountry= (nameOfCountry:string) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  console.log(error)
  const baseUrl = `https://restcountries.com/v3.1/name/${nameOfCountry}`;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(baseUrl);
        if (!req.ok) {
          throw new Error("not found");
        }
        const res = await req.json();
        setData(res[0]);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [baseUrl]);
  return [error, data];
};

export default useCountry;*/