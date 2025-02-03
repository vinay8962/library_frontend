import React, { useState, useEffect } from "react";
import Image from "../../assets/6920933-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "../../redux/reducers/Login";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, role } = useSelector((state) => state.login);

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ email, password }));
  };

  // ✅ FIX: Run this only when `role` changes (not on every render)
  useEffect(() => {
    if (role) {
      if (role === 101) {
        toast.success("Welcome Admin!");
        // navigate("/admin-dashboard"); // Redirect to admin page
      } else if (role === 102) {
        toast.success("Welcome Library Admin!");
        navigate("/", { replace: true });
      } else if (role === 103) {
        navigate("/student-home", { replace: true });
        toast.success("Welcome Student!");
      } else {
        toast.error("Invalid role!");
      }
    }
  }, [role, navigate]); // Runs only when `role` changes

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <div className="flex justify-between items-center w-full h-14 md:px-24 px-2 bg-white shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">
          Library Management System
        </h1>
        <h3 className="text-lg text-textColor">
          Don't have an account?
          <button
            className="ml-2 bg-Button text-white px-3 w-32 h-11 py-1 rounded-lg transition"
            onClick={() => navigate("/register")}
          >
            Sign Up
          </button>
        </h3>
      </div>

      <div className=" flex flex-col md:flex-row flex-grow items-center justify-center p-6">
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img src={Image} alt="Login" className="w-4/5 max-w-md" />
        </div>

        <div className=" flex w-full md:w-1/2 items-center justify-center">
          <form
            className="p-8 bg-thirdPrimary rounded-lg shadow-lg shadow-gray-500 w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
              Login
            </h2>

            <div className="mb-4">
              <label className="block text-textColor text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full p-3 rounded-lg focus:outline-textColor"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-textColor text-sm font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full p-3 rounded-lg focus:border-textColor"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-Button text-white p-3 rounded-lg transition duration-300"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
