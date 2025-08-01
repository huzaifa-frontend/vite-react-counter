import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
      <h2 className="text-red-500 font-bold">Tailwind is working!</h2>
    </div>
  );
}

export default Counter;
