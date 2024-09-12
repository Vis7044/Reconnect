import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex">
      <Sidebar/>
      <Outlet/>
      <div className='w-80 h-full fixed right-0 bg-white'>
          aljflksj
      </div>
    </div>
  );
}

export default App;
