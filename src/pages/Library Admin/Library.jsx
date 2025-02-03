import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getLibraryRequest } from "../../redux/reducers/GetLibrary";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineChairAlt } from "react-icons/md";

const Library = () => {
  const dispatch = useDispatch();
  const { library, loading, error } = useSelector((state) => state.getLibrary);
  const { token, userId } = useSelector((state) => state.login);

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
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
        Available Libraries
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {library && library.length > 0 ? (
          library.map((lib) => (
            <Link
              to={`/libraryDetails/${lib.id}`}
              key={lib.id}
              className="group block transform transition hover:scale-105"
            >
              <div className="bg-white border border-gray-200 rounded-2xl shadow-md p-6 group-hover:shadow-lg">
                <h3 className="text-xl font-semibold text-primary group-hover:text-blue-500">
                  {lib.name}
                </h3>
                <p className="text-gray-600 mt-2 flex items-center">
                  <strong>
                    <FaLocationDot />
                  </strong>{" "}
                  {lib.location}
                </p>
                <p className="text-gray-600 flex items-center">
                  <strong>
                    <MdOutlineChairAlt />
                  </strong>{" "}
                  {lib.seats}
                </p>
                <div className="mt-4">
                  <button className="bg-thirdPrimary text-black py-2 px-4 rounded-xl border border-primary shadow-sm hover:bg-primary hover:text-white transition">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-600 text-lg w-full">
            No libraries available.
          </p>
        )}
      </div>
    </div>
  );
};

export default Library;
