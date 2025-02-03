import React from "react";

const LibrarySelection = ({ library, handleLibraryClick, selectedLibrary }) => {
  console.log(library);
  return (
    <div className="flex flex-wrap gap-4 mb-6">
      {library?.map((lib) => (
        <button
          key={lib.id}
          onClick={() => handleLibraryClick(lib.id)}
          className={`p-3 border rounded-lg ${
            selectedLibrary === lib.id ? "bg-primary text-white" : "bg-gray-200"
          } hover:bg-secondPrimary`}
        >
          {lib.name}
        </button>
      ))}
    </div>
  );
};

export default LibrarySelection;
