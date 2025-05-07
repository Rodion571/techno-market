// src/components/Catalog.jsx
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import { useCart } from '../context/CartContext';

const Catalog = ({ products, onAddToCart }) => {
  const { addToCart } = useCart();
  const [filters, setFilters] = useState({
    price: 10000,
    brand: '',
    type: '',
  });

  // Обработка изменения фильтров
  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      price: 10000,
      brand: '',
      type: '',
    });
  };

  // Фильтрация товаров
  const filteredProducts = products.filter((product) => {
    return (
      product.price <= filters.price &&
      (filters.brand === '' || product.brand === filters.brand) &&
      (filters.type === '' || product.type === filters.type)
    );
  });

  return (
    <div className="catalog">
      <FilterPanel
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => addToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
