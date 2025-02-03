import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getLibraryDetailsRequest } from "../../redux/reducers/GetLibraryDetails";
import { getLibraryUserRequest } from "../../redux/reducers/LibraryUser";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const LibraryDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.login);
  const { libraryDetails, loading, error } = useSelector(
    (state) => state.LibraryDetails
  );
  const { libraryUser } = useSelector((state) => state.libraryUser);
  console.log(libraryUser);
  useEffect(() => {
    dispatch(getLibraryUserRequest(id));
    if (token) {
      dispatch(getLibraryDetailsRequest({ id, token }));
    }
  }, [dispatch, id, token]);

  if (loading) {
    return <p>Loading library details...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (!libraryDetails) {
    return <p>No library details available.</p>;
  }

  return (
    <div className="p-6">
      {/* Library Details Section */}
      <motion.h1
        className="font-bold mb-4 border-b border-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Library Details
      </motion.h1>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold">{libraryDetails.name}</h1>
        </div>
        <div className="flex justify-center mt-2">
          <p className="flex justify-center items-center">
            <strong>
              <CiLocationOn />
            </strong>{" "}
            {libraryDetails.location}
          </p>
        </div>

        <p>
          <strong>Seats:</strong> {libraryDetails.seats}
        </p>
      </motion.div>

      {/* Library Plans Table */}
      <motion.h2
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Library Plans
      </motion.h2>
      {libraryDetails.libraryPlan && libraryDetails.libraryPlan.length > 0 ? (
        <motion.table
          className="w-full border-collapse border border-gray-300 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">Plan Name</th>
              <th className="border border-gray-300 p-2">Plan Amount</th>
              <th className="border border-gray-300 p-2">Plan Frequency</th>
            </tr>
          </thead>
          <tbody>
            {libraryDetails.libraryPlan.map((plan, index) => (
              <motion.tr
                key={plan.library_plan_id}
                className="hover:bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <td className="border border-white p-2">{plan.plan_name}</td>
                <td className="border border-white p-2">{plan.plan_amount}</td>
                <td className="border border-white p-2">
                  {plan.planDetails.plan_frequency}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      ) : (
        <p>No plans available for this library.</p>
      )}

      {/* Library User Table */}
      <motion.h2
        className="text-xl font-semibold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Library User Details
      </motion.h2>
      {libraryUser && libraryUser.length > 0 ? (
        <motion.table
          className="w-full border-collapse border border-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-2">User Name</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Plan</th>
              <th className="border border-gray-300 p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {libraryUser.map((user, index) => (
              <motion.tr
                key={user.library_user_id}
                className="hover:bg-gray-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <td className="border border-gray-300 p-2">
                  {user.associatedUser?.name || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">
                  {user.associatedUser?.email || "N/A"}
                </td>

                <td className="border border-gray-300 p-2">
                  {user.libraryPlan?.plan_name || "N/A"}
                </td>
                <td className="border border-gray-300 p-2">{user.status}</td>
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      ) : (
        <p>No user details available for this library.</p>
      )}
    </div>
  );
};

export default LibraryDetails;
