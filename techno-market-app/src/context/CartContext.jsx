import React, { createContext, useContext, useState } from 'react';

// Контекст для корзины
const CartContext = createContext();

// Провайдер для корзины
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Добавление товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Удаление товара из корзины
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Изменение количества товара в корзине
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста
export const useCart = () => useContext(CartContext);
