import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import FilterPanel from './FilterPanel';
import ProductCard from './ProductCard';

const Catalog = ({ products, onAddToCart }) => {
  const { addToCart } = useCart();

  const [filters, setFilters] = useState({
    price: 10000,
    brand: '',
    category: '',
    search: '', // Added search state
  });

  const [appliedFilters, setAppliedFilters] = useState({
    price: 10000,
    brand: '',
    category: '',
    search: '', // Added search state
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  useEffect(() => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      price: 10000,
      brand: '',
      category: '',
      search: '', // Reset search
    });
    setAppliedFilters({
      price: 10000,
      brand: '',
      category: '',
      search: '', // Reset search
    });
    setCurrentPage(1);
  };

  const handleApplyFilters = () => {
    setAppliedFilters(filters);
    setCurrentPage(1);
  };

  // Filtering products
  const filteredProducts = products.filter((product) => {
    const categoryMatch = !appliedFilters.category || product.category === appliedFilters.category;
    const brandMatch = !appliedFilters.brand || product.brand === appliedFilters.brand;
    const priceMatch = product.price <= appliedFilters.price;
    const searchMatch = !appliedFilters.search || product.name.toLowerCase().includes(appliedFilters.search.toLowerCase());

    return categoryMatch && brandMatch && priceMatch && searchMatch;
  });

  // Pagination indexes
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Pagination
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
