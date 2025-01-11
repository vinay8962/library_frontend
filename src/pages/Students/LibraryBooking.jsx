import React, { useState } from "react";

const LibraryBooking = () => {
  const [libraryName, setLibraryName] = useState("");
  const [startDateTime, setStartDateTime] = useState("");
  const [endDateTime, setEndDateTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Library Name:", libraryName);
    console.log("Booking Start:", startDateTime);
    console.log("Booking End:", endDateTime);
    alert("Booking Submitted!");
  };

  return (
    <div className="flex justify-center items-center    ">
      <div className="  shadow-md rounded-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
          Library Booking
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Library Name */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Library Name
            </label>
            <input
              type="text"
              value={libraryName}
              onChange={(e) => setLibraryName(e.target.value)}
              placeholder="Enter library name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Booking Start Date & Time */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Booking Start Date & Time
            </label>
            <input
              type="datetime-local"
              value={startDateTime}
              onChange={(e) => setStartDateTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Booking End Date & Time */}
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Booking End Date & Time
            </label>
            <input
              type="datetime-local"
              value={endDateTime}
              onChange={(e) => setEndDateTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Submit Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default LibraryBooking;
