import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../../assets/6920933-removebg-preview.png";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { fetchRolesRequest } from "../../redux/reducers/Role";
import { registerUserRequest } from "../../redux/reducers/Register";

const Register = () => {
  // const [roles, setRoles] = useState([]);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { roles } = useSelector((state) => state.roles);

  console.log(roles);

  useEffect(() => {
    dispatch(fetchRolesRequest());
  }, [dispatch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      name: userName,
      email,
      password,
      roleId: userRole,
      mobile,
      address,
    };

    dispatch(registerUserRequest(userData));
    toast.success("Registration successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen  flex flex-col">
      <div className="flex justify-between items-center w-full h-14 md:px-24 px-2 bg-white shadow-md">
        <h1 className="text-lg font-semibold text-gray-800">
          Library Management System
        </h1>
        <h3 className="text-lg text-textColor">
          Already have an account?
          <button
            className="ml-2 bg-Button text-white px-3 w-32 h-11 py-1 rounded-lg  transition"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        </h3>
      </div>

      <div className="flex bg-cream flex-col md:flex-row flex-grow items-center justify-center p-6">
        {/* Left Side (Image) */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center">
          <img src={Image} alt="Register" className="w-4/5 max-w-md" />
        </div>

        {/* Right Side (Form) */}
        <div className="flex w-full md:w-1/2 items-center justify-center">
          <form
            className=" p-8 rounded-lg shadow-lg w-full max-w-md"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
              Register
            </h2>

            <div className="flex gap-2">
              <div>
                <label htmlFor="">Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="w-full p-3 mb-3  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Email</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 mb-3   rounded-lg focus:outline-none  "
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 mb-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex gap-2">
              <div>
                <label htmlFor="">Phone No.</label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full p-3 mb-3   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="">Role</label>
                <select
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="w-full p-3 mb-4   rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Role</option>
                  {roles.length === 0 ? (
                    <option value="">No roles available</option>
                  ) : (
                    roles.map((role) => (
                      <option key={role.id} value={role.id}>
                        {role.roleName}
                      </option>
                    ))
                  )}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="">Address</label>
              <input
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 mb-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-Button text-white p-3 rounded-lg  transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
