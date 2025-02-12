import { useState, useMemo } from "react";

function MemoCounter() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(0);

  const countValue = useMemo(() => {
    console.log("Performing expensive calculation...");
    let sum = 0;
    for (let i = 0; i < 10000; i++) {
      sum += i;
    }

    return sum;
  }, [count]);

  return (
    <>
      <h1>Expensive Calculation</h1>
      <h3>Count: {count}</h3>
      <h3>{countValue}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>Unrelated Calculation</h1>
      <h3>Count: {increment}</h3>
      <button onClick={() => setIncrement(increment + 1)}>Increment</button>
    </>
  );
}

export default MemoCounter;
