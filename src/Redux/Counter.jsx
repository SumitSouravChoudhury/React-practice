import { useDispatch, useSelector } from "react-redux";
import { incrementByAmount, increment, decrement } from "./CounterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <>
      <h1>{count}</h1>
      <button onClick={dispatch(increment())}>Increment</button>
      <button onClick={dispatch(decrement())}>Decrement</button>
      <button onClick={dispatch(incrementByAmount(5))}>Increment By 5</button>
    </>
  );
}
export default Counter;
