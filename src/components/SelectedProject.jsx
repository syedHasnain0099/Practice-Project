import React from "react";

const SelectedProject = ({ project, onDelete }) => {
  const formattedDate = new Date(project.dueDate).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <header className="mb-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold flex-shrink-0">{project.title}</h1>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md"
            onClick={onDelete}
          >
            Delete
          </button>
        </div>
        <p className="text-gray-600">{formattedDate}</p>
        <p className="text-gray-700">{project.description}</p>
      </header>
      <div className="border-t border-gray-300 mt-4">Tasks</div>
    </div>
  );
};

export default SelectedProject;
