import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import FilterPanel from './FilterPanel';
import { useCart } from '../context/CartContext';

const Catalog = ({ products, onAddToCart }) => {
  const { addToCart } = useCart();

  const [filters, setFilters] = useState({
    price: 10000,
    brand: '',
    category: '',
  });

  const [appliedFilters, setAppliedFilters] = useState({
    price: 10000,
    brand: '',
    category: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10; // Количество товаров на странице

  useEffect(() => {
    setAppliedFilters(filters); // Применяем фильтры при изменении состояния
    setCurrentPage(1); // Сбрасываем страницу при изменении фильтров
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      price: 10000,
      brand: '',
      category: '',
    });
    setAppliedFilters({
      price: 10000,
      brand: '',
      category: '',
    });
    setCurrentPage(1); // Сбросить страницу при сбросе фильтров
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setCurrentPage(1); // Сбросить страницу при применении фильтров
  };

  // Фильтрация товаров
  const filteredProducts = products.filter((product) => {
    return (
      product.price <= appliedFilters.price &&
      (!appliedFilters.brand || product.brand === appliedFilters.brand) &&
      (!appliedFilters.category || product.category === appliedFilters.category)
    );
  });

  // Определяем индекс первого и последнего товара на текущей странице
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Обработчики для смены страницы
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Рассчитываем количество страниц
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="catalog">
      <FilterPanel
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        onApplyFilters={handleApplyFilters}
      />

      {appliedFilters && filteredProducts.length > 0 && (
        <h3 className="selected-item-title">Ви обрали товар:</h3>
      )}

      <div className="product-list">
        {appliedFilters && filteredProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          ))
        ) : appliedFilters ? (
          <p>Товара за даними філтрами не знайдено. Шукай краще</p>
        ) : (
          <p>Оберіть парметри на натисніть "Застосувати"</p>
        )}
      </div>

      {/* Пагинация */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Попередня
          </button>
          <span>
            Сторінка {currentPage} з {totalPages}
          </span>
          <button
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Наступна
          </button>
        </div>
      )}
    </div>
  );
};

export default Catalog;
