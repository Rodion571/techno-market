import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Catalog from './components/Catalog';
import Sidebar from './components/Sidebar';
import Checkout from './pages/Checkout';
import MyOrders from './pages/MyOrders'; // <-- добавь импорт компонента
import { CartProvider } from './context/CartContext';
import { OrderProvider } from './context/OrderContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import products from './products';

function App() {
  const onAddToCart = (product) => {
    console.log('Додан до кошику:', product);
  };

  return (
    <OrderProvider>
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
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/my-orders" element={<MyOrders />} /> {/* <-- добавлен маршрут */}
              </Routes>
              <Footer />
            </div>
          </div>
        </Router>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
