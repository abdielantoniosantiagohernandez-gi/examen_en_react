import React, { useState } from "react";

interface TaskInputProps {
  onAdd: (text: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onAdd }) => {
  const [value, setValue] = useState("");
  const handleAdd = () => { onAdd(value); setValue(""); };

  return (
    <div className="task-input">
      <input
        className="input-field"
        value={value}
        placeholder="Nueva tarea..."
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="paw-button" onClick={handleAdd}>🐾 Agregar</button>
    </div>
  );
};

export default TaskInput;