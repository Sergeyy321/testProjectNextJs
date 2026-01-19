import { useState } from "react";
import { addTask } from "../services/taskApi";

export default function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState(5);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    await addTask({
      title,
      priority,
    });

    setTitle("");
    setPriority(5);
    onTaskAdded();
  };

  return (
  <form onSubmit={handleSubmit} className="flex gap-3 mb-4 w-full items-end">
  {/* Task Title Input */}
  <input
    type="text"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
    placeholder="New task"
    className="
      flex-1 px-3 py-2 rounded-md
      bg-gray-900 text-gray-100
      border border-gray-700
      placeholder-gray-500
      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    "
  />

  {/* Priority block */}
  <div className="flex flex-col items-center gap-1">
    <label
      htmlFor="priority"
      className="text-xs text-gray-400"
    >
      Priority
    </label>

    <input
      id="priority"
      type="number"
      min="1"
      max="10"
      value={priority}
      onChange={(e) => setPriority(Number(e.target.value))}
      className="
        w-20 px-3 py-2 rounded-md
        bg-gray-900 text-gray-100
        border border-gray-700
        text-center
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
      "
    />
  </div>

  {/* Add Button */}
  <button
    type="submit"
    className="
      px-4 py-2 rounded-md
      bg-blue-600 text-white
      hover:bg-blue-500
      focus:outline-none focus:ring-2 focus:ring-blue-500
    "
  >
    Add
  </button>
</form>

  );
}
