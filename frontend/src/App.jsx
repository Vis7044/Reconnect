import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import BottomNav from "./components/BottomNav";
import UpiPayment from "./pages/UpiPayment";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="h-screen">
      {sidebarOpen && <Sidebar/>}
      <Outlet/>
      <BottomNav/>
      <UpiPayment/>
    </div>
  );
}

export default App;
