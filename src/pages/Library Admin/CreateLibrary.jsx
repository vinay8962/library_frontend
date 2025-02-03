import React, { useState, useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createLibraryRequest } from "../../redux/reducers/CreateLibrary";
import PlanCard from "../../components/PlanCard";
import { planRequest } from "../../redux/reducers/Plan";

const CreateLibrary = () => {
  const [libraryName, setLibraryName] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");
  const [selectedPlans, setSelectedPlans] = useState([]);
  const [plans, setPlans] = useState([]);

  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.CreateLibrary);
  const { token, userId } = useSelector((state) => state.login);
  const { plan } = useSelector((state) => state.plans);

  useEffect(() => {
    dispatch(planRequest());
  }, [dispatch]);

  useEffect(() => {
    if (plan) {
      setPlans(plan); // Initialize local plans state from the Redux plan state
    }
  }, [plan]);

  const formData = useMemo(
    () => ({
      owner_id: userId,
      name: libraryName,
      location,
      seats,
      start_time: openingTime,
      close_time: closingTime,
      libraryplan: selectedPlans,
    }),
    [
      libraryName,
      location,
      seats,
      openingTime,
      closingTime,
      selectedPlans,
      userId,
    ]
  );
  // console.log(formData);
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!token) {
        Swal.fire({
          icon: "warning",
          title: "Authentication Required",
          text: "User is not authenticated. Please log in first.",
        });
        return;
      }

      if (selectedPlans.length === 0) {
        Swal.fire({
          icon: "warning",
          title: "No Plan Selected",
          text: "Please select at least one plan.",
        });
        return;
      }

      dispatch(createLibraryRequest({ data: formData, token }));
      Swal.fire({
        icon: "success",
        title: "Library Created!",
        text: "Your library has been created successfully.",
      });
    },
    [dispatch, formData, token, selectedPlans]
  );

  const togglePlanSelection = useCallback((plan) => {
    setSelectedPlans((prevSelected) => {
      const isAlreadySelected = prevSelected.find(
        (p) => p.plan_id === plan.plan_id
      );
      if (isAlreadySelected) {
        return prevSelected.filter((p) => p.plan_id !== plan.plan_id);
      }
      return [...prevSelected, plan];
    });
  }, []);

  const handlePlanChange = useCallback((index, field, value) => {
    setPlans((prevPlans) => {
      const updatedPlans = [...prevPlans];
      updatedPlans[index] = { ...updatedPlans[index], [field]: value };
      return updatedPlans;
    });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Create Library
        </h2>

        {error &&
          Swal.fire({
            icon: "error",
            title: "Error",
            text: error,
          })}

        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
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
            <div>
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
          </div>

          <div className="grid gap-6 md:grid-cols-3 mt-6">
            <div>
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
            <div>
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
            <div>
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
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-700">
              Library Plans
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {plans.map((planItem, index) => (
                <PlanCard
                  key={planItem.plan_id}
                  plan={planItem}
                  isSelected={
                    !!selectedPlans.find((p) => p.plan_id === planItem.plan_id)
                  }
                  onClick={() => togglePlanSelection(planItem)}
                  onChange={(field, value) =>
                    handlePlanChange(index, field, value)
                  }
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-8 bg-Button text-white font-semibold py-3 rounded-lg transition duration-300 disabled:opacity-50"
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
