// Layout Structure
import React from "react";
import Sidebar from "../../components/SideBar.jsx/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Index = ({ children }) => {
  return (
    <div className="flex h-screen bg-cream">
      {/* Sidebar */}
      <div className="fixed md:relative w-64 transition-all duration-300">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col flex-1 min-h-screen w-full transition-all duration-300">
        <Navbar />
        <main className="flex-1 p-6 overflow-auto">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
