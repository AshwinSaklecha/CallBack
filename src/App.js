import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={incrementCount}>Increment Counter</button>


      <h3></h3>

      <h3>Counter: {count}</h3>

      <ChildComponent count={count} onClick={incrementCount} />
    </div>
  );
}

const ChildComponent = React.memo(function ({ count, onClick }) {
  console.log("Child Component Rendered");
  return (
    
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Increment</button>
    </div>
  );
});

export default App;
