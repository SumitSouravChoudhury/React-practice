import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [counts, setCounts] = useState(0);

  useEffect(() => {
    console.log("Render");
  }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <h1>{counts}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCounts(counts + 1)}>Increments</button>
    </>
  );
}

export default App;
