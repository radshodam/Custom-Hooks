import React, { useState } from "react";

export default function UseCounter(init) {
  const [count, setCount] = useState(init);
  const addCounter = () => {
    setCount((perv) => perv + 1);
  };

  const removeCounter = () => {
    setCount((perv) => perv - 1);
  };

  return [count, addCounter, removeCounter];
}
