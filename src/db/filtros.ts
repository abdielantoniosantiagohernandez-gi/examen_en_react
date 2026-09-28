import type { Task, TaskFilters } from "../types/task";

export const filterTasks = (tasks: Task[], { status, search }: TaskFilters): Task[] => {
  console.log(`Filtro aplicado: estado=${status}, busqueda="${search}"`);
  return tasks
    .filter((task) => {
      if (status === "pendiente") return !task.completed;
      if (status === "completado") return task.completed;
      return true;
    })
    .filter((task) => task.text.toLowerCase().includes(search.toLowerCase()));
};