import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar.jsx/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-cream">
      {/* Sidebar */}
      <div
        className={`fixed md:relative ${
          isSidebarOpen ? "w-64" : "w-16"
        } transition-all duration-300`}
      >
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setSidebarOpen} />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 min-h-screen transition-all duration-300  `}
      >
        <Navbar />
        <main className="flex-1 p-6 w-full overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
