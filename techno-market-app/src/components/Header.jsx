import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="logo">Techno-Market</div>
      <nav>
        <a href="/">Главная</a>
        <a href="/catalog">Каталог</a>
        <a href="/cart">Корзина</a>
      </nav>
      <div className="cart-icon">
        <span>0</span> {/* Тут будет количество товаров в корзине */}
      </div>
    </header>
  );
};

export default Header;
