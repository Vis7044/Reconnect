import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex">
      <Sidebar/>
      <Outlet/>
    </div>
  );
}

export default App;
