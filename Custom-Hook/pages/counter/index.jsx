import UseCounter from "@/components/hooks/UseCounter";
import React from "react";

export default function Index() {
  const [count, addCounter, removeCounter] = UseCounter(0);

  return (
    <div>
      <p>this is count : {count}</p>
      <button onClick={addCounter}>add</button>
      <button onClick={removeCounter}>remove</button>
    </div>
  );
}
