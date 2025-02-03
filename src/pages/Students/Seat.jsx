import React, { useEffect, useState } from "react";
import { PiChairBold } from "react-icons/pi";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getLibraryRequest } from "../../redux/reducers/GetLibrary";
import { getSeatRequest } from "../../redux/reducers/GetSeat";
import { getLibraryUserRequest } from "../../redux/reducers/LibraryUser";
import { RxCross1 } from "react-icons/rx";
import { seatBookingRequest } from "../../redux/reducers/SeatBooking";

const Seat = () => {
  const [selectedLibraryData, setSelectedLibraryData] = useState(null);
  const [totalSeats, setTotalSeats] = useState(0);
  const [seatStatus, setSeatStatus] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [selectedUserId, setSelectedUserId] = useState(""); // Track selected user
  const [isModalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { seat } = useSelector((state) => state.getSeat);
  const { library } = useSelector((state) => state.getLibrary);
  const { token, userId } = useSelector((state) => state.login);
  const { libraryUser } = useSelector((state) => state.libraryUser);

  useEffect(() => {
    dispatch(getLibraryRequest({ userId, token }));
  }, [dispatch, userId, token]);

  const handleLibraryClick = (libraryData) => {
    setSelectedLibraryData(libraryData);
    dispatch(getSeatRequest({ id: libraryData.id }));
    dispatch(getLibraryUserRequest({ id: libraryData.id }));
  };

  const handleSeatBooking = () => {
    if (!selectedLibraryData || !selectedSeat || !selectedUserId) {
      alert("Please select all details before submitting!");
      return;
    }

    dispatch(
      seatBookingRequest({
        library_id: selectedLibraryData.id,
        seat_id: selectedSeat,
        user_id: selectedUserId,
        booking_start_date_time: "2025-01-27T10:00:00",
        booking_end_date_time: "2025-01-27T12:00:00",
      })
    );

    closeModal();
  };

  useEffect(() => {
    if (seat?.length) {
      setTotalSeats(seat.length);
      setSeatStatus(seat.map((s) => s.status === "free"));
    } else {
      setTotalSeats(0);
      setSeatStatus([]);
    }
  }, [seat]);

  const handleSeatClick = (seatIndex) => {
    if (seatStatus[seatIndex]) {
      setSelectedSeat(seatIndex + 1);
      setModalOpen(true);
    }
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Seat Layout</h2>

      {/* Library Buttons */}
      <div className="flex flex-wrap gap-4 mb-6">
        {library?.map((lib) => (
          <button
            key={lib.id}
            onClick={() => handleLibraryClick(lib)}
            className={`p-3 border rounded-lg ${
              selectedLibraryData?.id === lib.id
                ? "bg-primary text-white"
                : "bg-gray-200"
            } hover:bg-primary`}
          >
            {lib.name}
          </button>
        ))}
      </div>

      {/* Seat Layout */}
      <div className="space-y-8 w-full">
        {Array.from({ length: totalSeats }, (_, index) => index + 1)
          .reduce((rows, seat, index) => {
            const rowIndex = Math.floor(index / 10);
            if (!rows[rowIndex]) {
              rows[rowIndex] = [];
            }

            const isFree = seatStatus[index];

            rows[rowIndex].push(
              <motion.div
                key={seat}
                initial={{ opacity: 0, scale: 0.8, y: -70 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                onClick={() => handleSeatClick(index)}
                className={`w-10 h-10 border cursor-pointer flex items-center justify-center rounded-lg ${
                  isFree
                    ? "bg-thirdPrimary shadow-black text-black hover:bg-primary hover:text-white border border-primary"
                    : "bg-red-500 shadow-red-500 text-white"
                }`}
              >
                <PiChairBold />
                <p className="text-xs">{seat}</p>
              </motion.div>
            );
            return rows;
          }, [])
          .map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-8">
              {row}
            </div>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-2xl w-[90%] max-w-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-full flex justify-end">
              <button
                onClick={closeModal}
                className="text-black p-2 rounded-full hover:bg-red-200 transition-colors"
              >
                <RxCross1 size={20} />
              </button>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Seat Details</h3>
              <p className="mb-2">
                <strong>Library:</strong> {selectedLibraryData?.name}
              </p>
              <p className="mb-4">
                <strong>Seat:</strong> {selectedSeat}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6"
            >
              <label
                htmlFor="userSelect"
                className="block mb-2 font-medium text-gray-600"
              >
                Select User
              </label>
              <motion.select
                id="userSelect"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                value={selectedUserId}
                onChange={(e) => setSelectedUserId(e.target.value)}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
              >
                <option value="">Select a user</option>
                {libraryUser?.map((user) => (
                  <option
                    key={user.library_user_id}
                    value={user.library_user_id}
                  >
                    {user.associatedUser.name}
                  </option>
                ))}
              </motion.select>
            </motion.div>

            <div className="w-full flex justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSeatBooking}
                className="w-1/2 bg-thirdPrimary text-black border border-primary font-semibold py-2 rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                Submit
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default Seat;
