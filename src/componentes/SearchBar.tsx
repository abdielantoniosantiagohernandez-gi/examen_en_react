import React from "react";

interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => (
  <div className="search-bar">
    <span className="ear-icon">🐱</span>
    <input
      className="search-field"
      value={search}
      placeholder="Buscar..."
      onChange={(e) => onSearchChange(e.target.value)}
    />
  </div>
);

export default SearchBar;