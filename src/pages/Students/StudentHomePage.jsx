import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { getUserRequest } from "../../redux/reducers/GetUser";
import Avatar from "../../assets/user-avatar.png";
import { getSeatRequest } from "../../redux/reducers/GetSeat";

const StudentHomePage = () => {
  const { userId } = useSelector((state) => state.login);
  const { user, loading, error } = useSelector((state) => state.getUser);
  const { seat } = useSelector((state) => state.getSeat);
  console.log(seat);
  const dispatch = useDispatch();
  console.log(user);
  useEffect(() => {
    if (userId) {
      dispatch(getUserRequest(userId));
      dispatch(getSeatRequest({ id: userId.id }));
    }
  }, [dispatch, userId]);

  return (
    <div>
      <div className="w-full h-full p-8 flex items-center justify-center">
        {loading && (
          <p className="text-white text-lg animate-pulse">Loading...</p>
        )}
        {error && <p className="text-red-500 text-lg">{error}</p>}

        {user && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white  backdrop-blur-lg rounded-3xl shadow-2xl p-8 w-full max-w-5xl flex flex-col md:flex-row gap-8"
          >
            {/* Left Side: Avatar + User Info */}
            <div className="flex-1 flex flex-col items-center">
              <motion.img
                src={Avatar} // Replace with user's avatar if available
                alt="User Avatar"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="w-40 h-40 rounded-full border-4 text-black border-purple-500 shadow-lg mb-6"
              />
              <h2 className="text-3xl font-bold  mb-4">{user.name}</h2>
              <p className="text-lg  mb-2">
                <strong>📞 Mobile:</strong> {user.mobile}
              </p>
              <p className="text-lg  mb-2">
                <strong>📍 Address:</strong> {user.address}
              </p>
              <p className="text-lg mb-2">
                <strong>📅 Joined:</strong>{" "}
                {new Date(user.createdAt).toDateString()}
              </p>
            </div>

            {/* Right Side: Library Info */}
            <div className="flex-1">
              <h3 className="text-3xl font-semibold mb-6">🏛 Library Details</h3>

              {user.libraryUsers?.length > 0 ? (
                user.libraryUsers.map((libUser, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="bg-white/30 p-6 rounded-2xl shadow-xl mb-6 hover:scale-105 transition-transform"
                  >
                    <p className="text-lg text-gray-900 mb-2">
                      <strong>📖 Library Name:</strong> {libUser.library.name}
                    </p>
                    <p className="text-lg text-gray-900 mb-2">
                      <strong>📍 Library Address:</strong>{" "}
                      {libUser.library.location || "Not Provided"}
                    </p>
                    <p className="text-lg text-gray-900 mb-2">
                      <strong>💎 Plan:</strong> {libUser.libraryPlan.plan_name}{" "}
                      ($
                      {libUser.libraryPlan.plan_amount})
                    </p>
                    <p className="text-lg text-gray-900 mb-2">
                      <strong>📅 Start Date:</strong>{" "}
                      {new Date(libUser.start_date).toDateString()}
                    </p>
                    <p className="text-lg text-gray-900 mb-2">
                      <strong>📅 End Date:</strong>{" "}
                      {new Date(libUser.end_date).toDateString()}
                    </p>
                    <p className="text-lg font-semibold text-green-600">
                      🟢 Status: {libUser.status}
                    </p>
                  </motion.div>
                ))
              ) : (
                <p className="text-lg text-white">
                  No Library Membership Found.
                </p>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default StudentHomePage;
