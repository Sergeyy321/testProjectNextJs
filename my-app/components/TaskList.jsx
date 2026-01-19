"use client";

import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { useState, useEffect } from "react";
import SortableTaskItem from "./SortableTask";

export default function TaskList({ tasks, onChange }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(tasks);
  }, [tasks]);

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (!over || active.id === over.id) return;

    setItems((items) => {
      const oldIndex = items.findIndex((t) => t.id === active.id);
      const newIndex = items.findIndex((t) => t.id === over.id);
      return arrayMove(items, oldIndex, newIndex);
    });
  };

  if (items.length === 0) {
    return <p className="text-gray-400">No tasks</p>;
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext
        items={items.map((t) => t.id)}
        strategy={verticalListSortingStrategy}
      >
        <ul className="space-y-2">
          {items.map((task) => (
            <SortableTaskItem
              key={task.id}
              task={task}
              onChange={onChange}
            />
          ))}
        </ul>
      </SortableContext>
    </DndContext>
  );
}
