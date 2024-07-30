import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import "./Header.css";

const Header = () => {
  const { cartItems } = useCart();
  const cartCount = Object.keys(cartItems).length
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">
          <Link to="/" className="store-link">
            My Store
          </Link>
        </h1>
        <Link to="/cart" className="cart-button">
          <img className="cart-icon" src={"/header.png"} alt="Cart" />
          <span className="cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
