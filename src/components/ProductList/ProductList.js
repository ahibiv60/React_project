import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard"; // Переконайтесь, що шлях вірний
import "./ProductList.css";

const products = [
  {
    id: 1,
    name: "Sobranie Cocktail",
    price: "$10",
    image:
      "https://content2.rozetka.com.ua/goods/images/big_tile/384053534.jpg",
  },
  {
    id: 2,
    name: "Sobranie Black",
    price: "$20",
    image:
      "https://content2.rozetka.com.ua/goods/images/big_tile/384056591.jpg",
  },
  {
    id: 3,
    name: "Sobranie Superline",
    price: "$30",
    image:
      "https://content.rozetka.com.ua/goods/images/big_tile/455708794.jpg",
  },
  {
    id: 4,
    name: "Sobranie Golds",
    price: "$40",
    image:
      "https://content2.rozetka.com.ua/goods/images/big_tile/455708809.jpg",
  },
  {
    id: 5,
    name: "Product 5",
    price: "$50",
    image: "https://content.rozetka.com.ua/goods/images/big_tile/455708789.jpg",
  },
  {
    id: 6,
    name: "Product 6",
    price: "$60",
    image: "https://content.rozetka.com.ua/goods/images/big_tile/187917319.jpg",
  },
  {
    id: 7,
    name: "Product 7",
    price: "$70",
    image: "https://cdn.27.ua/799/a5/85/6661509_1.jpeg",
  },
  {
    id: 8,
    name: "Product 8",
    price: "$80",
    image:
      "https://content1.rozetka.com.ua/goods/images/big_tile/187917326.jpg",
  },
  {
    id: 9,
    name: "Product 9",
    price: "$90",
    image:
      "https://content2.rozetka.com.ua/goods/images/big_tile/340902412.jpg",
  },
  {
    id: 10,
    name: "Product 10",
    price: "$100",
    image: "https://content2.rozetka.com.ua/goods/images/big_tile/377889365.jpg",
  },
  {
    id: 11,
    name: "Product 11",
    price: "$110",
    image: "https://content2.rozetka.com.ua/goods/images/big_tile/384053479.jpg",
  },
  {
    id: 12,
    name: "Product 12",
    price: "$120",
    image: "https://content2.rozetka.com.ua/goods/images/big_tile/455711955.jpg",
  },
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
