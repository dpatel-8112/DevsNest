import React, { useState } from "react";

function Home() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount((preCount) => preCount + 5)}>+5</button>
      <button onClick={() => setCount((preCount) => preCount + 1)}>+1</button>
      <span style={{ padding: "20px" }}>{count}</span>
      <button onClick={() => setCount((preCount) => preCount - 1)}>-1</button>
      <button onClick={() => setCount((preCount) => preCount - 5)}>-5</button>
    </div>
  );
}

export default Home;
