import { deleteTask, updateTask } from "../services/taskApi";
import TaskCheckbox from "./TaskCheckbox";
import TaskMenu from "./TaskMenu";

export default function TaskItem({ task, onChange }) {
  const toggleDone = async () => {
    await updateTask(task.id, {
      isDone: !task.isDone,
    });
    onChange();
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onChange();
  };

  return (
    <li
      className="
        flex items-center justify-between
        p-3 rounded-md
        bg-gray-900 border border-gray-700
        text-gray-100
      "
      >
      {/* LEFT: checkbox + title */}
      <div className="flex items-center gap-3">
      <TaskMenu onDelete={handleDelete}  />
        <TaskCheckbox
          checked={task.isDone}
          onChange={toggleDone}
        />

        <span
          className={`
            ${task.isDone ? "line-through text-gray-500" : ""}
          `}
        >
          {task.title}
          <span className="ml-2 text-sm text-gray-500">
            p:{task.priority}
          </span>
        </span>
      </div>

      {/* RIGHT: menu (delete) */}
    </li>
  );
}
