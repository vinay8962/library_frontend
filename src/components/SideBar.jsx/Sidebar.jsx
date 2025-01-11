import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-Button text-white w-64 h-screen p-4 fixed md:relative">
      <h2 className="text-xl font-bold mb-4">Dashboard</h2>
      <ul>
        <Link to="/">
          <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
            Home
          </li>
        </Link>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Seats
        </li>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Students
        </li>
        <Link to="/createlibrary">
          <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
            Add Library
          </li>
        </Link>
        <Link to="/bookinglibrary">
          <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
            Booking Library
          </li>
        </Link>
        <li className="mb-2 p-2 hover:bg-cream hover:text-textColor rounded cursor-pointer">
          Settings
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
