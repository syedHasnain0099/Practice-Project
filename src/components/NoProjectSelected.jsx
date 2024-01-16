import React from "react";
import noProjectImage from "../assets/no-projects.png";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className="text-center mt-10">
      <img
        src={noProjectImage} // Add your image source
        alt="No Project Selected"
        className="mx-auto mb-4"
        width={100}
        height={100}
      />
      <h2 className="text-2xl font-semibold mb-2">No Project Selected</h2>
      <p className="text-gray-600 mb-4">
        Select a Project or get started with a new one.
      </p>
      <p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onStartAddProject}
        >
          Create a new Project
        </button>
      </p>
    </div>
  );
};

export default NoProjectSelected;
