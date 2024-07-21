import ReactDOM from "react-dom/client";
import "./index.css";
import { useState } from "react";

const root = ReactDOM.createRoot(document.getElementById("root"));
/*
  1. What are hooks ?
    Hooks in react are plain javascript functions.
    hooks can only be called inside another javascript function.
    every hook should start with `use` prefix.
  2. what is useState ?
  3. Primitive & Non Primitive States
  4. Asynchronous nature of setState
  5. lazy intialization 
*/

// setState(callbackFn) => (prev) => nextValue
// Queue = []
// Counter (count = 18)

function compute() {
  console.log("inside compute");
  let sum = 0;
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }
  return sum;
}

function Counter() {
  const [count, setCount] = useState(compute);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Counter component</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

root.render(<Counter />);
