import React from 'react';

const FilterPanel = ({ onFilterChange }) => {
  return (
    <div className="filter-panel">
      <h3>Фильтры</h3>
      <label>Цена:</label>
      <input type="range" min="0" max="10000" onChange={onFilterChange} />
      {/* Можно добавить другие фильтры */}
    </div>
  );
};

export default FilterPanel;
