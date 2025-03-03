import React from "react";
import { useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaChair,
  FaUserPlus,
  FaCogs,
  FaBookOpen,
} from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import { motion } from "framer-motion";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { role } = useSelector((state) => state.login);

  const sidebarVariants = {
    open: { width: "16rem", transition: { duration: 0.3 } },
    closed: { width: "4rem", transition: { duration: 0.3 } },
  };

  return (
    <div className="relative">
      <motion.div
        className="bg-Button text-gray-800 h-screen p-4 fixed z-40"
        variants={sidebarVariants}
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <div className="flex justify-between items-center mb-4">
          {isOpen && (
            <h2 className="text-xl font-bold text-black">Dashboard</h2>
          )}
          <button
            className="text-white p-2 rounded-full focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross1 size="20px" className="font-extrabold" />
            ) : (
              <HiMiniBars3 size="20px" className="font-extrabold" />
            )}
          </button>
        </div>

        <ul className="space-y-2">
          {role === 102 ? (
            <>
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
                >
                  <FaHome size={"25px"} className={`${isOpen ? "mr-2" : ""}`} />
                  {isOpen && "Home"}
                </Link>
              </li>
              <li>
                <Link
                  to="/seats"
                  className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
                >
                  <FaChair
                    size={"25px"}
                    className={`${isOpen ? "mr-2" : ""}`}
                  />
                  {isOpen && "Seats"}
                </Link>
              </li>
              <li>
                <Link
                  to="/createStudents"
                  className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
                >
                  <FaUserPlus
                    size={"25px"}
                    className={`${isOpen ? "mr-2" : ""}`}
                  />
                  {isOpen && "Create Students"}
                </Link>
              </li>
              <li>
                <Link
                  to="/students"
                  className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
                >
                  <FaBookOpen
                    size={"25px"}
                    className={`${isOpen ? "mr-2" : ""}`}
                  />
                  {isOpen && "Students"}
                </Link>
              </li>
              <li>
                <Link
                  to="/createlibrary"
                  className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
                >
                  <MdLibraryAdd
                    size={"25px"}
                    className={`${isOpen ? "mr-2" : ""}`}
                  />
                  {isOpen && "Add Library"}
                </Link>
              </li>
            </>
          ) : role === 103 ? (
            <li>
              <Link
                to="/bookinglibrary"
                className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
              >
                <FaBookOpen
                  size={"25px"}
                  className={`${isOpen ? "mr-2" : ""}`}
                />
                {isOpen && "Booking Library"}
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/"
                className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
              >
                <FaHome size={"25px"} className={`${isOpen ? "mr-2" : ""}`} />
                {isOpen && "Home"}
              </Link>
            </li>
          )}
          <li>
            <Link
              to="/settings"
              className="flex items-center p-2 hover:bg-secondPrimary hover:text-thirdPrimary rounded cursor-pointer"
            >
              <FaCogs size={"25px"} className={`${isOpen ? "mr-2" : ""}`} />
              {isOpen && "Settings"}
            </Link>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default Sidebar;
