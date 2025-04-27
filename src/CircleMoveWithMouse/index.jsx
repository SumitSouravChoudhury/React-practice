import { useRef } from "react";
import Circle from "./Circle";

const MainPage = () => {
  const rootRef = useRef();
  const circleRef = useRef();

  function handleMouseMove(e) {
    const circle = circleRef.current;
    circle.style.left = `${e.clientX}px`;
    circle.style.top = `${e.clientY}px`;
  }

  return (
    <div
      style={{ position: "relative", height: "100vh" }}
      ref={rootRef}
      onMouseMove={handleMouseMove}
    >
      <Circle ref={circleRef} />
    </div>
  );
};

export default MainPage;
