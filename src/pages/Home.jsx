import React, { useEffect } from "react";

import { ImLibrary } from "react-icons/im";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLibraryRequest } from "../redux/reducers/GetLibrary";

const Home = () => {
  const dispatch = useDispatch();
  const { library, loading, error } = useSelector((state) => state.getLibrary);
  const { token, userId } = useSelector((state) => state.login);
  console.log(library);
  useEffect(() => {
    dispatch(getLibraryRequest({ userId, token }));
  }, [dispatch, token, userId]);
  return (
    <div className="p-2">
      <div className="w-full border-b border-gray-400 mb-2 flex justify-start">
        <h1 className="text-3xl font-bold text-center mb-1 text-gray-800">
          Welcome to the Library
        </h1>
      </div>
      <div className="flex justify-around ">
        <Link to="/library">
          <motion.div
            className="bg-thirdPrimary w-64 h-36 border  rounded-3xl shadow-md shadow-gray-500 flex items-center transform transition-transform duration-300 hover:scale-105"
            initial={{ y: -70, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "linear" }}
          >
            <div className="w-2/6 flex justify-center items-center">
              <div className="w-2/6 flex justify-center items-center relative">
                <motion.div
                  className="w-20 h-20 rounded-full border-dashed border-primary border-2 flex justify-center items-center absolute"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                <div className="absolute">
                  <ImLibrary size={32} className="text-gray-700" />
                </div>
              </div>
            </div>
            <div className="w-8/12 pl-3">
              <h1 className="text-xl font-semibold text-primary">Library</h1>
              <p className="text-lg text-gray-600 mt-2">{library.length}</p>
            </div>
          </motion.div>
        </Link>
        <motion.div
          className="bg-thirdPrimary w-64 h-36 border   rounded-3xl shadow-md shadow-gray-500 flex items-center transform transition-transform duration-300 hover:scale-105"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeIn" }}
        >
          <div className="w-2/6 flex justify-center items-center">
            <div className="w-2/6 flex justify-center items-center relative">
              <motion.div
                className="w-20 h-20 rounded-full border-dashed border-primary border-2 flex justify-center items-center absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="absolute">
                <ImLibrary size={32} className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="w-8/12 pl-3">
            <h1 className="text-xl font-semibold text-primary">Library</h1>
            <p className="text-lg text-gray-600 mt-2">00</p>
          </div>
        </motion.div>

        <motion.div
          className="bg-thirdPrimary w-64 h-36 border  rounded-3xl shadow-md shadow-gray-500 flex items-center transform transition-transform duration-300 hover:scale-105"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "linear" }}
        >
          <div className="w-2/6 flex justify-center items-center">
            <div className="w-2/6 flex justify-center items-center relative">
              <motion.div
                className="w-20 h-20 rounded-full border-dashed border-primary border-2 flex justify-center items-center absolute"
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              ></motion.div>
              <div className="absolute">
                <ImLibrary size={32} className="text-gray-700" />
              </div>
            </div>
          </div>
          <div className="w-8/12 pl-3">
            <h1 className="text-xl font-semibold text-primary">Library</h1>
            <p className="text-lg text-gray-600 mt-2">00</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
