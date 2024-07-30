// CartPage.js
import React from "react";
import { useCart } from "../../contexts/CartContext";
import CartItem from "../../components/CartItem/CartItem"; // Оновіть шлях, якщо потрібно
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateItemCount } = useCart();

  return (
    <div className="cart-page">
      <h1>Cart Page</h1>
      {Object.keys(cartItems).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {Object.values(cartItems).map((item) => (
            <CartItem
              key={item.id}
              product={item}
              removeFromCart={removeFromCart}
              updateItemCount={updateItemCount}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
