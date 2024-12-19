import React from 'react';
import './ProductList.css';

const ProductList = ({ products, addToCart }) => (
  <div className="product-list">
    {products.map((product) => (
      <div className="product-card" key={product.id}>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;
