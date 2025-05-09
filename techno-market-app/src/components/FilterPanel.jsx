import React, { useState } from 'react';

const FilterPanel = ({ onFilterChange, onResetFilters }) => {
  const [price, setPrice] = useState(10000);
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');

  const brandsByCategory = {
    Ноутбуки: ["Acer", "Lenovo", "Apple", "HP", "Dell", "MSI", "Asus", "Huawei", "Xiaomi"],
    Телевізори: ["Samsung", "LG", "Sony", "Hisense", "TCL", "Philips"],
    Смартфони: ["Samsung", "Apple", "Xiaomi", "Huawei", "Realme", "Oppo", "OnePlus"],
    Мікрохвильовки: ["Samsung", "LG", "Panasonic", "Miele", "Bosch"],
    Станції: ["Anker", "Xiaomi", "Baseus", "UGREEN"],
    Приставки: ["Sony", "Microsoft", "Nintendo"],
    Розхідники: ["Epson", "Canon", "HP", "Brother"],
    Холодильники: ["Samsung", "LG", "Bosch", "Siemens", "Electrolux"],
    Духовки: ["Bosch", "Siemens", "Electrolux", "Whirlpool", "Gorenje"],
    Пароочисники: ["Polti", "Bissell", "Shark", "Kitfort", "Thomas"]
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleBrandChange = (e) => {
    setBrand(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setBrand(''); // Скидаємо бренд при зміні категорії
  };

  const handleApplyFilters = () => {
    onFilterChange({ price, brand, category }); // Передаємо фільтри до батьківського компонента
  };

  const handleReset = () => {
    setPrice(10000);
    setBrand('');
    setCategory('');
    onResetFilters(); // Скидаємо фільтри в батьківському компоненті
  };

  return (
    <div className="filter-panel-inline">
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Тип</option>
        <option value="Ноутбуки">Ноутбуки</option>
        <option value="Телевізори">Телевізори</option>
        <option value="Смартфони">Смартфони</option>
        <option value="Мікрохвильовки">Мікрохвильовки</option>
        <option value="Станції">Зарядні станції</option>
        <option value="Приставки">Ігрові приставки</option>
        <option value="Розхідники">Розхідники</option>
        <option value="Холодильники">Холодильники</option>
        <option value="Духовки">Духовки</option>
        <option value="Пароочисники">Пароочисники</option>
      </select>

      <select value={brand} onChange={handleBrandChange} disabled={!category}>
        <option value="">Бренд</option>
        {category && brandsByCategory[category]?.map((b) => (
          <option key={b} value={b}>{b}</option>
        ))}
      </select>

      <label className="price-label">
        Ціна:
        <input
          type="range"
          min="0"
          max="100000"
          value={price}
          onChange={handlePriceChange}
        />
        <span>{price}$</span>
      </label>

      <button onClick={handleApplyFilters}>Застосувати</button>
      <button onClick={handleReset}>Очистити</button>
    </div>
  );
};

export default FilterPanel;
