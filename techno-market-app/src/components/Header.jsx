import React from 'react';
import { Link } from 'react-router-dom'; 
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="App-header">
      <div className="logo">Techno-Market</div>
      <Link to="/cart" className="cart-icon">
        🛒 <span className="cart-count">{itemCount}</span>
      </Link>
    </header>
  );
};

export default Header;
