/* eslint-disable react/display-name */
import { forwardRef } from "react";

const Circle = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        backgroundColor: "blue",
        top: "0",
        left: "0",
        transform: "translate(-50%, -50%)",
      }}
    ></div>
  );
});

export default Circle;
