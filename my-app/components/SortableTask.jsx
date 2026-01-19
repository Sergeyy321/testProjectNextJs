"use client";

import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskItem from "./TaskItem";
import { GripVertical } from "lucide-react";

export default function SortableTaskItem({ task, onChange }) {
  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`
        relative
        ${isDragging ? "opacity-60" : ""}
      `}
    >
      <TaskItem task={task} onChange={onChange} />

      {/* drag handle */}
      <button
        {...attributes}
        {...listeners}
        className="
          absolute bottom-2 right-2
          p-1
          text-gray-500
          hover:text-gray-300
          cursor-grab active:cursor-grabbing
          focus:outline-none
        "
        aria-label="Drag task"
      >
        <GripVertical size={16}  className="ml-1" />
      </button>
    </li>
  );
}
