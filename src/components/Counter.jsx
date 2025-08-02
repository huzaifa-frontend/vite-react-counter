import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition duration-300 relative">
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 px-4 py-1 border border-gray-400 rounded text-sm font-medium dark:text-white text-gray-900"
      >
        {isDarkMode ? "Light" : "Dark"}
      </button>

      <h2 className="text-4xl font-bold mb-6">Count: {count}</h2>

      <div className="flex gap-4">
        <button
          onClick={handleIncrease}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Increase
        </button>
        <button
          onClick={handleDecrease}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          Decrease
        </button>
        <button
          onClick={handleReset}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
