// CartItem.js
import React, { useState } from "react";
import "./CartItem.css";

const CartItem = ({ product, removeFromCart, updateItemCount }) => {
  const [count, setCount] = useState(product.count);

  const handleChange = (event) => {
    const newCount = parseInt(event.target.value, 10) || 0;
    setCount(newCount);
    updateItemCount(product.id, newCount);
  };

  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <input
        type="number"
        value={count}
        min="1"
        onChange={handleChange}
        className="cart-item-count"
      />
      <button
        onClick={() => removeFromCart(product.id)}
        className="remove-button"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
