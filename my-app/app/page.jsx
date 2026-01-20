"use client";

import { useEffect, useState } from "react";
import { getTasks } from "../services/taskApi";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskSelect from "../components/TaslSelect";
import TaskSearch from "../components/TaskSearch";
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const filteredTasks = tasks.filter((task) =>
  task.title.toLowerCase().includes(search.toLowerCase())
);
  const loadTasks = async () => {
    try {
      const res = await getTasks(
        filter === "all" ? {} : { status: filter }
      );
      setTasks(res.data);
    } catch (error) {
      console.error("Error loading tasks", error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, [filter]);

  return (
    <main className="max-w-xl mx-auto mt-10 p-4">
      <h1 className="text-2xl font-bold mb-4">TODO App</h1>
<TaskSelect value={filter} onChange={setFilter} />
<TaskSearch value={search} onChange={setSearch} />
      <TaskForm onTaskAdded={loadTasks} />

      <div className="flex gap-2 my-4">
        <button onClick={() => setFilter("all")}   className="
    px-3 py-1 rounded-md
    bg-gray-200 dark:bg-gray-700
    text-gray-900 dark:text-gray-100
    hover:bg-gray-300 dark:hover:bg-gray-600
    transition
  ">All</button>
        <button onClick={() => setFilter("done")}   className="
    px-3 py-1 rounded-md
    bg-gray-200 dark:bg-gray-700
    text-gray-900 dark:text-gray-100
    hover:bg-gray-300 dark:hover:bg-gray-600
    transition
  ">Done</button>
        <button onClick={() => setFilter("undone")}   className="
    px-3 py-1 rounded-md
    bg-gray-200 dark:bg-gray-700
    text-gray-900 dark:text-gray-100
    hover:bg-gray-300 dark:hover:bg-gray-600
    transition
  ">Undone</button>
      </div>

      <TaskList tasks={filteredTasks} onChange={loadTasks}  />
    </main>
  );
}
