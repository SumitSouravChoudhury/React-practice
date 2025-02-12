import { useWindowWidth } from "./useWindowWidth";

function Usage() {
  const width = useWindowWidth();
  return (
    <>
      <h1>{width}</h1>
    </>
  );
}
export default Usage;
