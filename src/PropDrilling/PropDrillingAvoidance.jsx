import { useContext } from "react";
import { createContext } from "react";

const DataContext = createContext();

function Parent() {
  const user = { name: "Sumit", age: 24 };

  return (
    <>
      <DataContext.Provider value={user}>
        <Child3 />
        <Child1 />
      </DataContext.Provider>
    </>
  );
}

function Child1() {
  return <Child2 />;
}

function Child2() {
  return <Child3 />;
}

function Child3() {
  const data = useContext(DataContext);
  return (
    <>
      <h1>{data.name}</h1>
      <h3>{data.age}</h3>
    </>
  );
}

export default Parent;
