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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-4xl font-bold text-gray-800 mb-6">Count: {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={handleIncrease}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow transition duration-200"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow transition duration-200"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
