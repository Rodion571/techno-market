import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Catalog from './components/Catalog';
import Sidebar from './components/Sidebar';
import Checkout from './pages/Checkout'; // Импортируем компонент Checkout
import { CartProvider } from './context/CartContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import products from './products';

function App() {
  const onAddToCart = (product) => {
    console.log('Додан до кошику:', product);
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
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} /> {/* Добавляем маршрут для Checkout */}
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
