import { useEffect, useRef, useState } from "react";

function CountWithRenders() {
  const count = useRef(0);
  const [input, setInput] = useState("");

  useEffect(() => {
    count.current += 1;
  });

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <h1>Number of times component is re-rendered: {count.current}</h1>
    </>
  );
}

export default CountWithRenders;
