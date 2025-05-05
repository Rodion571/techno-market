import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [products] = useState([
    // Пример данных для продуктов
    { id: 1, name: 'Ноутбук', price: 50000, image: '/images/laptop.jpg' },
    { id: 2, name: 'Смартфон', price: 30000, image: '/images/smartphone.jpg' },
    // добавь свои товары
  ]);

  const onAddToCart = (product) => {
    console.log('Добавлен в корзину:', product);
  };

  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} onAddToCart={onAddToCart} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
