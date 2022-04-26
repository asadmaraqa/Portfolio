import React, { useEffect, useState } from "react";

const useCountry =  (nameOfCountry:string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState< any | null>(null);
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
        setError(error)
      }
    }
    fetchData();
  }, [baseUrl]);
  return [error, data];
};

export default useCountry;