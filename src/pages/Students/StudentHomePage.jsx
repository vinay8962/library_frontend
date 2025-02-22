import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserRequest } from "../../redux/reducers/GetUser";
import Avatar from "../../assets/user-avatar.png";

const StudentHomePage = () => {
  const dispatch = useDispatch();
  const { userId } = useSelector((state) => state.login);
  const { user, loading, error } = useSelector((state) => state.getUser);

  useEffect(() => {
    if (userId) {
      dispatch(getUserRequest(userId));
    }
  }, [dispatch, userId]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center  p-6">
      {loading && (
        <p className="text-gray-700 text-lg animate-pulse">Loading...</p>
      )}
      {error && <p className="text-red-500 text-lg">{error}</p>}
      {user && (
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl flex flex-col md:flex-row gap-8">
          {/* Left Side: User Info */}
          <div className="flex-1 flex flex-col items-center text-center bg-purple-100 p-6 rounded-2xl shadow-md">
            <img
              src={Avatar}
              alt="User Avatar"
              className="w-32 h-32 rounded-full border-4 border-purple-500 shadow-lg mb-4"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {user.name}
            </h2>
            <p className="text-md text-gray-700">📞 {user.mobile}</p>
            <p className="text-md text-gray-700">📍 {user.address}</p>
            <p className="text-md text-gray-700">
              📅 Joined: {new Date(user.createdAt).toDateString()}
            </p>
          </div>

          {/* Right Side: Library Info */}
          <div className="flex-1 bg-white p-6 rounded-2xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🏛 Library Details
            </h3>
            {user.libraryUsers?.length > 0 ? (
              user.libraryUsers.map((libUser, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4 border border-gray-200"
                >
                  <p className="text-gray-900 font-medium">
                    <strong>📖 Library:</strong> {libUser.library.name}
                  </p>
                  <p className="text-gray-700">
                    <strong>📍 Address:</strong>{" "}
                    {libUser.library.location || "Not Provided"}
                  </p>
                  <p className="text-gray-700">
                    <strong>💎 Plan:</strong> {libUser.libraryPlan.plan_name} ($
                    {libUser.libraryPlan.plan_amount})
                  </p>
                  <p className="text-gray-700">
                    <strong>📅 Start:</strong>{" "}
                    {new Date(libUser.start_date).toDateString()}
                  </p>
                  <p className="text-gray-700">
                    <strong>📅 End:</strong>{" "}
                    {new Date(libUser.end_date).toDateString()}
                  </p>
                  <p className="text-green-600 font-semibold">
                    🟢 Status: {libUser.status}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-lg text-gray-600">
                No Library Membership Found.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentHomePage;
