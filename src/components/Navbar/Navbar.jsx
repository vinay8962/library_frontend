import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">
        Library Management System
      </h1>
      <button className="bg-Button text-white px-4 py-2 rounded">Login</button>
    </div>
  );
};

export default Navbar;
