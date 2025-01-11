import axios from "axios";
import React, { useState } from "react";

const CreateLibrary = () => {
  const [libraryName, setLibraryName] = useState("");
  const [location, setLocation] = useState("");
  const [seats, setSeats] = useState("");
  const [openingTime, setOpeningTime] = useState("");
  const [closingTime, setClosingTime] = useState("");

  const libraryAdmin = 1;
  const token = "wewwewjkscs";
  const API_URL = process.env.REACT_APP_API_URL;
  const handleSubmit = async () => {
    const data = {
      owner_id: libraryAdmin,
      name: libraryName,
      location: location,
      seats: seats,
      start_time: openingTime,
      close_time: closingTime,
    };
    try {
      const response = await axios.post(`${API_URL}/library`, data, {
        headers: {
          Authorization: `${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      setLibraryName("");
      setLocation("");
      setSeats("");
      setOpeningTime("");
      setClosingTime("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center  ">
      <div className=" shadow-md rounded-lg p-6 w-full max-w-md">
        <div className="w-full flex">
          <h2 className="text-2xl font-bold mb-4 text-center text-gray-700">
            Create Library
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Library Name
            </label>
            <input
              type="text"
              value={libraryName}
              onChange={(e) => setLibraryName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Seats
            </label>
            <input
              type="text"
              value={seats}
              onChange={(e) => setSeats(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Opening Time
            </label>
            <input
              value={openingTime}
              onChange={(e) => setOpeningTime(e.target.value)}
              type="time"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-Button text-white py-2 rounded-lg  transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLibrary;
