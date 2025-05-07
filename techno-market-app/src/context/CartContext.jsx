import React, { createContext, useContext, useState } from 'react';

// Контекст для корзины
const CartContext = createContext();

// Провайдер для корзины
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Добавление товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: product.quantity || 1 }];
    });
  };

  // Полное удаление товара
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Удаление одного экземпляра товара
  const removeOneFromCart = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Обновление количества вручную
  const updateQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeOneFromCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста
export const useCart = () => useContext(CartContext);
