import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange, onResetFilters }) => {
  const [price, setPrice] = useState(10000);
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');

  // Обработка изменения фильтров
  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPrice(newPrice);
    onFilterChange({ price: newPrice, brand, type });
  };

  const handleBrandChange = (e) => {
    const newBrand = e.target.value;
    setBrand(newBrand);
    onFilterChange({ price, brand: newBrand, type });
  };

  const handleTypeChange = (e) => {
    const newType = e.target.value;
    setType(newType);
    onFilterChange({ price, brand, type: newType });
  };

  return (
    <div className="filter-panel">
      <h3>Фильтры</h3>

      {/* Фильтр по цене */}
      <label>Цена:</label>
      <input
        type="range"
        min="0"
        max="10000"
        value={price}
        onChange={handlePriceChange}
      />
      <p>Максимальная цена: {price}₽</p>

      {/* Фильтр по бренду */}
      <label>Бренд:</label>
      <select value={brand} onChange={handleBrandChange}>
        <option value="">Выберите бренд</option>
        <option value="Samsung">Samsung</option>
        <option value="Apple">Apple</option>
        <option value="Sony">Sony</option>
        {/* Добавь другие бренды по необходимости */}
      </select>

      {/* Фильтр по типу */}
      <label>Тип товара:</label>
      <select value={type} onChange={handleTypeChange}>
        <option value="">Выберите тип</option>
        <option value="Телевизор">Телевизор</option>
        <option value="Смартфон">Смартфон</option>
        <option value="Ноутбук">Ноутбук</option>
        {/* Добавь другие типы товаров по необходимости */}
      </select>

      {/* Кнопка для сброса фильтров */}
      <button onClick={onResetFilters}>Сбросить фильтры</button>
    </div>
  );
};

export default FilterPanel;
