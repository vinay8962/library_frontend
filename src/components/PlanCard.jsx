import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PlanCard = ({ plan, isSelected, onClick, onChange }) => {
  const { plan_name, plan_amount, plan_frequency } = plan;

  return (
    <div
      className={`relative bg-white border rounded-lg shadow-md p-6 flex flex-col items-start cursor-pointer ${
        isSelected ? "border-blue-500 bg-blue-50" : "border-gray-200"
      }`}
      onClick={onClick}
    >
      {/* Check Icon for Selected Plans */}
      {isSelected && (
        <FaCheckCircle
          className="absolute top-2 right-2 text-blue-500 text-xl"
          title="Selected"
        />
      )}

      {/* Plan Name Input */}
      <div className="w-full mb-4">
        <input
          type="text"
          value={plan_name}
          placeholder="Enter plan name"
          onChange={(e) => onChange("plan_name", e.target.value)}
          className="w-full px-3 py-2 border border-t-0 border-l-0 bg-transparent border-r-0 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        />
      </div>

      {/* Plan Amount Input */}
      <div className="w-full mb-4 flex items-center">
        <label className="block text-xl font-medium text-gray-600 mr-2">
          ₹
        </label>
        <input
          type="number"
          value={plan_amount}
          placeholder="0"
          onChange={(e) => onChange("plan_amount", e.target.value)}
          className="w-20 flex-1 px-3 py-2 border border-t-0 border-l-0 border-r-0 bg-transparent rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none appearance-none"
        />
        <p className="text-xl text-gray-600 ml-2 flex w-full">
          /<span className="font-semibold">{plan_frequency || "Monthly"}</span>
        </p>
      </div>
      <ul className="mt-4 space-y-2 text-sm text-gray-600">
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Feature 1
        </li>
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Feature 2
        </li>
        <li className="flex items-center">
          <span className="text-blue-500 mr-2">✔</span> Feature 3
        </li>
      </ul>
    </div>
  );
};

export default PlanCard;
