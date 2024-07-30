import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import Header from "./components/Header/Header";
import ProductList from "./components/ProductList/ProductList";
import CartPage from "./pages/CartPage/CartPage";
import "./App.css";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
