import { useState, useCallback } from "react";
import PropTypes from "prop-types";

function Child({ onclick }) {
  console.log("Child component");
  return (
    <>
      <button onClick={onclick}>Click Me</button>
    </>
  );
}
Child.propTypes = {
  onclick: PropTypes.string.isRequired,
};

function Memoized() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onclick={handleClick} />
    </>
  );
}

export default Memoized;
