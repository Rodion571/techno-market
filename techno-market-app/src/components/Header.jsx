import React from 'react';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const itemCount = cart.reduce((total, item) => total + (item.quantity || 1), 0);

  return (
    <header className="App-header">
      <div className="logo">Techno-Market</div>
      <div className="cart-icon">
        🛒 <span className="cart-count">{itemCount}</span>
      </div>
    </header>
  );
};

export default Header;
