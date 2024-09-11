import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p className="text-4xl bg-red-400">Hello</p>
      <h1>DotBot</h1>
      <h3>Alumini</h3>
    </>
  );
}

export default App;
