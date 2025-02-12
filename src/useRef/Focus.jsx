import { useRef } from "react";

function Focus() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </>
  );
}

export default Focus;
