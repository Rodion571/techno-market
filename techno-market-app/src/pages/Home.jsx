import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = ({ products, onAddToCart }) => {
  return (
    <div className="home">
      <h1>Добро пожаловать в Techno-Market</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;
