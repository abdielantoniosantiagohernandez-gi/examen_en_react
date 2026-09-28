import React from "react";
import type { Task } from "../types/task";
import TaskItem from "./Item";

interface TaskListProps {
  tasks: Task[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onToggle, onDelete }) => (
  <ul className="task-list">
    {tasks.map((task) => (
      <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
    ))}
  </ul>
);

export default TaskList;