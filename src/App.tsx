import React, { useState } from "react";
import type { FilterStatus } from "./types/task";
import { useTasks } from "./hooks/useTasks";
import { filterTasks } from "./db/filtros";
import Header from "./componentes/Header";
import TaskInput from "./componentes/Input";
import SearchBar from "./componentes/SearchBar";
import FilterButtons from "./componentes/Boton";
import TaskList from "./componentes/List";
import "./App.css";

const App: React.FC = () => {
  const { tasks, addTask, toggleTask, removeTask } = useTasks();
  const [status, setStatus] = useState<FilterStatus>("todas");
  const [search, setSearch] = useState<string>("");
  const visibleTasks = filterTasks(tasks, { status, search });

  return (
    <div className="app-container">
      <Header />
      <TaskInput onAdd={addTask} />
      <div className="toolbar">
        <FilterButtons status={status} onStatusChange={setStatus} />
        <SearchBar search={search} onSearchChange={setSearch} />
      </div>
      <TaskList tasks={visibleTasks} onToggle={toggleTask} onDelete={removeTask} />
    </div>
  );
};

export default App;