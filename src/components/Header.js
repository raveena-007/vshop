import React from 'react';
import './Header.css';

const Header = ({ cartCount }) => (
  <header className="header">
    <h1>Vshop</h1>
    <div className="cart-info">
      🛒 Cart: {cartCount} items
    </div>
  </header>
);

export default Header;
