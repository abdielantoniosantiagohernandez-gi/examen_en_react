export interface Task {
  id: string;
  text: string;
  completed: boolean;
} 

export type FilterStatus = "todas" | "completado" | "pendiente";

export interface TaskFilters {
  status: FilterStatus;
  search: string;
} 