# 🐱 To-Do List de Gatitos

## Cómo correrlo
```bash
npm install
npm run dev
```

## Estructura de archivos (cada uno ≤ 25 líneas)

**"Base de datos" (capa de datos y tipos)**
- `src/types/task.ts` — interfaces `Task`, `TaskFilters` y tipos.
- `src/utils/taskApi.ts` — simula lecturas/escrituras a una BD con **Promesas**.
- `src/utils/filterTasks.ts` — lógica pura de filtrado (estado + búsqueda).
- `src/hooks/useTasks.ts` — hook que conecta la UI con la "BD" simulada.

**Componentes (React + TypeScript)**
- `src/components/Header.tsx` — título e icono.
- `src/components/TaskInput.tsx` — input + botón patita para agregar.
- `src/components/SearchBar.tsx` — buscador con orejita de gato.
- `src/components/FilterButtons.tsx` — botones pez (todas/durmiendo/ronroneando).
- `src/components/TaskItem.tsx` — una tarea individual (huella, texto, etiqueta, eliminar).
- `src/components/TaskList.tsx` — mapeo de la lista con `key={task.id}`.
- `src/App.tsx` — arma la app y guarda el estado de filtros.

## Conceptos de clase evidenciados
- Tipado estático e interfaces (`types/task.ts`).
- Objetos literales (`OPTIONS`, `NETWORK_DELAY`).
- Template strings (clases dinámicas `fish-button ${...}`, log de filtro).
- Módulos `import`/`export` en cada archivo.
- Promesas (`taskApi.ts`, simula async con `setTimeout`).
- Custom hook (`useTasks`) usando `useState`.
