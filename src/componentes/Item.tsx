import React from "react";
import type { Task } from "../types/task";

interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle, onDelete }) => (
  <li className={`task-item ${task.completed ? "completed" : ""}`}>
    <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
    <span className="task-text">{task.text}</span>
    <span className={`status-tag ${task.completed ? "tag-done" : "tag-pending"}`}>
      {task.completed ? "Tareas" : "Que haceres"}
    </span>
    <button className="paw-print" onClick={() => onToggle(task.id)}>🐾</button>
    <button className="delete-cat" onClick={() => onDelete(task.id)}>🐱</button>
  </li>
);

export default TaskItem;