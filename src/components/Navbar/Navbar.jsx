import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/Login";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.login);
  console.log(token);
  const handleAuthAction = () => {
    if (token) {
      dispatch(logout());
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">
        Library Management System
      </h1>
      <button
        className="bg-Button text-white px-4 py-2 rounded"
        onClick={handleAuthAction}
      >
        {token ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
