import { useState } from "react";
import type { Task } from "../types/task";
import { createTaskInDB, deleteTaskFromDB } from "../types/taskApi";

const INITIAL_TASKS: Task[] = [
  { id: "task-1", text: "Hacer la tarea de tecnologias web", completed: true },
  { id: "task-2", text: "Completar ejercicios de condicionales y voz pasiva en ingles", completed: true },
  { id: "task-3", text: "Configurar esquema de roles y privilegios en PostgreSQL", completed: false },
  { id: "task-4", text: "Terminar el analizador léxico con Flex y Bison", completed: false },
  { id: "task-5", text: "Jugar toda la noche para pasar de nivel", completed: false }
];

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);

  const addTask = async (text: string) => {
    if (!text.trim()) return;
    const newTask = await createTaskInDB(text);
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  const removeTask = async (id: string) => {
    const deletedId = await deleteTaskFromDB(id);
    setTasks((prev) => prev.filter((t) => t.id !== deletedId));
  };

  return { tasks, addTask, toggleTask, removeTask };
};