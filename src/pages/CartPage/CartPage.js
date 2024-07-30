import React from 'react';
import { useCart } from '../../contexts/CartContext';
import CartItem from '../../components/CartItem/CartItem'; // Оновіть шлях, якщо потрібно
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map(item => (
            <CartItem key={item.id} product={item} removeFromCart={removeFromCart} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
