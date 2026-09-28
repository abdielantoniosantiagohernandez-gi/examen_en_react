import React from "react";
import type { FilterStatus } from "../types/task";

interface FilterButtonsProps {
  status: FilterStatus;
  onStatusChange: (status: FilterStatus) => void;
}

const OPTIONS: { value: FilterStatus; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "completado", label: "Completadas" },
  { value: "pendiente", label: "Pendientes" },
];

const FilterButtons: React.FC<FilterButtonsProps> = ({ status, onStatusChange }) => (
  <div className="filter-buttons">
    {OPTIONS.map((opt) => (
      <button key={opt.value} onClick={() => onStatusChange(opt.value)}
        className={`fish-button ${status === opt.value ? "active" : ""}`}>
        {opt.label}
      </button>
    ))}
  </div>
);

export default FilterButtons;