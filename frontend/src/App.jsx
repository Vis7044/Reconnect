import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen">
      {sidebarOpen && <Sidebar/>}
      <Outlet/>
      
    </div>
  );
}

export default App;
