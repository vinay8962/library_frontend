import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../redux/reducers/Login";
import { persistor } from "../../redux/store";
import { RxAvatar } from "react-icons/rx";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.login);

  const handleAuthAction = async () => {
    if (token) {
      // Logout flow
      dispatch(logout()); // Clear Redux state
      await persistor.purge(); // Clear persisted state
    }
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="bg-[#F1F1F2] shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">
        Library Management System
      </h1>

      <div className="flex items-center gap-2">
        <div>
          <RxAvatar size={"30px"} />
        </div>
        <div>
          <button
            className="bg-Button text-white px-4 py-2 rounded"
            onClick={handleAuthAction}
          >
            {token ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
