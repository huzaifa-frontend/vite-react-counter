import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default Counter;
