import React, { useState } from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 50 },
    { id: 2, name: 'Product 2', price: 30 },
    { id: 3, name: 'Product 3', price: 20 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="app">
      <Header cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} />
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} />
      <ToastContainer />
    </div>
  );
};

export default App;
