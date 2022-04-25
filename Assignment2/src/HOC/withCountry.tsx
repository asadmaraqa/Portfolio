import React, { useState, useEffect } from "react";

const WithCountry = <Props,> (WrapperComponent:React.ComponentType<Props>, nameOfCountry:string) => {
  const WithCountry = (props:Props)=> {
    const [data, setData] = useState<Props[]>([]);
    const [error, setError] = useState<Error | null>(null);
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
        } catch (error:any) {
          setError(error);
        }
      }
      fetchData();
    }, [nameOfCountry]);
    return <WrapperComponent data={data} error={error} {...props} />;

  };
  return WithCountry;
}; 
export default WithCountry; 