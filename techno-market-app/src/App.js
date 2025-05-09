// App.js

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Catalog from './components/Catalog';
import Sidebar from './components/Sidebar';
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import products from './products';  // Импортируем массив продуктов из файла

function App() {
  const onAddToCart = (product) => {
    console.log('Добавлен в корзину:', product);
  };

  return (
    <CartProvider>
      <Router>
        <div className="app-container">
          <Sidebar />
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
