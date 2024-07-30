import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard'; // Переконайтесь, що шлях вірний
import './ProductList.css';

const products = [
  { id: 1, name: 'Product 1', price: '$10', image: 'path/to/image1.jpg' },
  { id: 2, name: 'Product 2', price: '$20', image: 'path/to/image2.jpg' },
  { id: 3, name: 'Product 3', price: '$30', image: 'path/to/image3.jpg' },
  { id: 4, name: 'Product 4', price: '$40', image: 'path/to/image4.jpg' },
  { id: 5, name: 'Product 5', price: '$50', image: 'path/to/image5.jpg' },
  { id: 6, name: 'Product 6', price: '$60', image: 'path/to/image6.jpg' },
  { id: 7, name: 'Product 7', price: '$70', image: 'path/to/image7.jpg' },
  { id: 8, name: 'Product 8', price: '$80', image: 'path/to/image8.jpg' },
  { id: 9, name: 'Product 9', price: '$90', image: 'path/to/image9.jpg' },
  { id: 10, name: 'Product 10', price: '$100', image: 'path/to/image10.jpg' },
  { id: 11, name: 'Product 11', price: '$110', image: 'path/to/image11.jpg' },
  { id: 12, name: 'Product 12', price: '$120', image: 'path/to/image12.jpg' }
];

const ProductList = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
