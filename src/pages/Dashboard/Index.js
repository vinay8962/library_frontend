import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/SideBar.jsx/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-cream">
      {/* Sidebar */}
      <div className="fixed md:relative w-64 transition-all duration-300">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 min-h-screen transition-all duration-300">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">
          {/* Nested routes will be rendered here */}
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
