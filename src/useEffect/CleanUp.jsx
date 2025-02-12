import { useEffect } from "react";

function CleanUp() {
  useEffect(() => {
    let interval = setInterval(() => {
      console.log("Hi");
    }, 1000);

    return () => clearInterval(interval);
  }, []);
}
export default CleanUp;
