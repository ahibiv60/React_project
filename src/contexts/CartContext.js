import React, { createContext, useState, useContext } from 'react';

// Створюємо контекст
const CartContext = createContext();

// Провайдер контексту
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingProductIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingProductIndex >= 0) {
        // Якщо товар вже є в корзині, оновлюємо його
        const updatedItems = [...prevItems];
        updatedItems[existingProductIndex] = product;
        return updatedItems;
      } else {
        // Інакше додаємо новий товар
        return [...prevItems, product];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для використання контексту
export const useCart = () => useContext(CartContext);