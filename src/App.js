import React from "react";
import { useEffect, useState } from "react";
import randomcolor from "randomcolor";

const App = () => {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(randomcolor);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    setColor(randomcolor());
  }, [count]);

  return (
    <div>
      <h1 style={{ color: color }}>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default App;
