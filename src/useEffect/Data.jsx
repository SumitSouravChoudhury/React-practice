import { useEffect } from "react";
import { useState } from "react";

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {data &&
        data.map((user) => {
          return <h3 key={user.id}>{user.name}</h3>;
        })}
    </>
  );
}

export default Data;
