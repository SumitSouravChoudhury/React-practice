import { useEffect, useState } from "react";

function Title() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </>
  );
}

export default Title;
