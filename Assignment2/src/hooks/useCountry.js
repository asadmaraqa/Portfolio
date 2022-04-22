import {useEffect, useState } from "react";

const useCountry = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const baseUrl = `https://restcountries.com/v3.1/name/${name}`;
        useEffect(() => {
          const fetchData=async()=> {
            try {
             const req=await fetch(baseUrl);
             if (!req.ok){
              throw new Error("not found");
             }
             const res=await req.json();
             setData(res);
            }catch (error){
             setError(error.message);
            }
           };
           fetchData();
        }, [baseUrl]);
        return [error,data];
  };
  export default useCountry;