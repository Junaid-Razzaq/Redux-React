import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, handlereset } from "./Counterslice";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(handlereset())}>Reset</button>
      </div>
    </div>
  );
}
