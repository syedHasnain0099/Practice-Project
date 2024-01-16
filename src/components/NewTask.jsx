import React, { useState } from "react";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={(e) => setEnteredTask(e.target.value)}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={() => {
          onAddTask(enteredTask);
          setEnteredTask("");
        }}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
