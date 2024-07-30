// CartContext.js
import React, { createContext, useState, useContext } from "react";

// Створюємо контекст
const CartContext = createContext();

// Провайдер контексту
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({}); // Зміна на об'єкт

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };

      if (newItems[product.id]) {
        // Якщо товар вже є в корзині, збільшуємо кількість
        newItems[product.id].count += 1;
      } else {
        // Додаємо новий товар з початковою кількістю 1
        newItems[product.id] = { ...product, count: 1 };
      }

      return newItems;
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => {
      const { [productId]: _, ...rest } = prevItems; // Видалення товару
      return rest;
    });
  };

  const updateItemCount = (productId, newCount) => {
    setCartItems((prevItems) => {
      const newItems = { ...prevItems };

      if (newItems[productId]) {
        newItems[productId].count = newCount;
      }

      return newItems;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Хук для використання контексту
export const useCart = () => useContext(CartContext);
