import React from 'react';
import './CartItem.css';

const CartItem = ({ product, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={() => removeFromCart(product.id)}>Remove</button>
    </div>
  );
};

export default CartItem;
