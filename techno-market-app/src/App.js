// App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalog from './components/Catalog'; 
import Sidebar from './components/Sidebar'; // Импортируем Sidebar
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [products] = useState([
    { id: 1, name: 'Ноутбук', price: 50000, image: '/images/laptop.jpg', brand: 'Dell', type: 'Ноутбук' },
    { id: 2, name: 'Смартфон', price: 30000, image: '/images/smartphone.jpg', brand: 'Apple', type: 'Смартфон' },
    { id: 3, name: 'Телевизор', price: 25000, image: '/images/tv.jpg', brand: 'Samsung', type: 'Телевизор' },
  ]);

  const onAddToCart = (product) => {
    console.log('Добавлен в корзину:', product);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Sidebar /> {/* Добавляем Sidebar */}
          <div className="main-content">
            <Header />
            <Routes>
              <Route path="/" element={<Home products={products} onAddToCart={onAddToCart} />} />
              <Route path="/catalog" element={<Catalog products={products} onAddToCart={onAddToCart} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
