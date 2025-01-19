import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLibraryRequest } from "../redux/reducers/GetLibrary";

const Home = () => {
  const dispatch = useDispatch();
  const { library, loading, error } = useSelector((state) => state.getLibrary);
  const { token, userId } = useSelector((state) => state.login);
  console.log(userId, token);
  useEffect(() => {
    dispatch(getLibraryRequest({ userId, token }));
  }, [dispatch, token, userId]);

  if (loading) {
    return (
      <div className="text-center text-xl text-gray-700">
        Loading libraries...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 text-lg">
        Error loading libraries: {error.message || "Unknown error"}
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Welcome to the Library
      </h1>
      <div className="flex flex-wrap justify-center gap-6">
        {library && library.length > 0 ? (
          library.map((lib) => (
            <div
              className="bg-white border border-gray-300 rounded-lg shadow-md p-4 w-72 transform transition hover:scale-105 hover:shadow-lg"
              key={lib.id}
            >
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {lib.name}
              </h2>
              <p className="text-gray-700 mb-1">
                <strong>Location:</strong> {lib.location}
              </p>
              <p className="text-gray-700 mb-1">
                <strong>Seats:</strong> {lib.seats}
              </p>
              <p className="text-gray-700">
                <strong>Owner ID:</strong> {lib.owner_id}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg">
            No libraries available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
