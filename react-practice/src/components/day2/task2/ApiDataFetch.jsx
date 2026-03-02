import React, { useEffect, useState } from "react";

const ApiDataFetch = () => {
  const [data, setData] = useState([]);
  const [isloading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetching() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) {
          throw new Error("Fetch Failed!");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetching();
    return ()=>console.log("Cleared logs");
  }, []);
  if(isloading) return <h1>Loading......</h1>
  if(error) return <h1>Error: {error}</h1>
  return <div>
   { console.log(data)}
    {data.map((item) => (
        <h3 key ={item.id} >Name: {item.name}</h3>
    ))}
  </div>;
};

export default ApiDataFetch;
