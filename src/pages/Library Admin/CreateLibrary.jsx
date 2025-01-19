import React, { useState, useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createLibraryRequest } from "../../redux/reducers/CreateLibrary";

const CreateLibrary = () => {
  const [libraryName, setLibraryName] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.CreateLibrary);

  const { token, userId } = useSelector((state) => state.login);

  // Memoize the data object to avoid unnecessary recalculations
  const formData = useMemo(
    () => ({
      owner_id: userId,
      name: libraryName,
      location,
      seats,
      start_time: openingTime,
      close_time: closingTime,
      plans: plans.filter(
        (plan) => plan.plan_name && plan.plan_frequency && plan.plan_amount
      ),
    }),
    [libraryName, location, seats, openingTime, closingTime, plans]
  );

  // Memoize handleSubmit to prevent unnecessary re-creations
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!token) {
        alert("User is not authenticated. Please log in first.");
        return;
      }

      dispatch(createLibraryRequest({ data: formData, token }));
    },
    [dispatch, formData, token]
  );

  // Memoize addPlan function to prevent unnecessary re-creations
  const addPlan = useCallback(() => {
    setPlans((prevPlans) => [
      ...prevPlans,
      { plan_name: "", plan_frequency: "", plan_amount: "" },
    ]);
  }, []);

  // Memoize handlePlanChange function to avoid unnecessary re-creations
  const handlePlanChange = useCallback((index, field, value) => {
    setPlans((prevPlans) => {
      const updatedPlans = [...prevPlans];
      updatedPlans[index][field] = value;
      return updatedPlans;
    });
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Create Library
        </h2>

        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Library Name
            </label>
            <input
              type="text"
              value={libraryName}
              onChange={(e) => setLibraryName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Location
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Seats
            </label>
            <input
              type="number"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Opening Time
            </label>
            <input
              type="time"
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Closing Time
            </label>
            <input
              type="time"
              value={closingTime}
              onChange={(e) => setClosingTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Library Plans</h3>

            {plans.map((plan, index) => (
              <div
                key={index}
                className="mb-4 p-4 border rounded-lg bg-gray-100"
              >
                <label className="block text-gray-600 font-medium mb-1">
                  Plan Name
                </label>
                <input
                  type="text"
                  value={plan.plan_name}
                  onChange={(e) =>
                    handlePlanChange(index, "plan_name", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />

                <label className="block text-gray-600 font-medium mt-2">
                  Plan Frequency
                </label>
                <input
                  type="text"
                  value={plan.plan_frequency}
                  onChange={(e) =>
                    handlePlanChange(index, "plan_frequency", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />

                <label className="block text-gray-600 font-medium mt-2">
                  Plan Amount
                </label>
                <input
                  type="number"
                  value={plan.plan_amount}
                  onChange={(e) =>
                    handlePlanChange(index, "plan_amount", e.target.value)
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>
            ))}

            <button
              type="button"
              onClick={addPlan}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              + Add Plan
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg"
            disabled={loading}
          >
            {loading ? "Creating..." : "Create Library"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLibrary;
