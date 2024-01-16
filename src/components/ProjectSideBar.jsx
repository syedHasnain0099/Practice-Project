import React from "react";

const ProjectSideBar = ({
  onStartAddProject,
  projects,
  handleSelectProject,
}) => {
  return (
    <aside className="bg-gray-800 text-white h-screen w-1/4 fixed left-0 top-0 p-4">
      <h2 className="text-2xl font-semibold mb-4">Your Projects</h2>
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onStartAddProject}
        >
          + Add Project
        </button>
      </div>
      <ul>
        {projects.map((project) => (
          <li key={project.id} className="mb-2">
            <button
              className="bg-gray-700 hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline-blue"
              onClick={() => {
                handleSelectProject(project.id);
              }}
            >
              {project.title}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectSideBar;
