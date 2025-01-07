import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-Button text-white w-64 h-screen p-4 fixed md:relative">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Home
        </li>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Seats
        </li>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Students
        </li>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
