import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen">
      {sidebarOpen && <Sidebar/>}
      <Outlet/>
      <BottomNav/>
    </div>
  );
}

export default App;
