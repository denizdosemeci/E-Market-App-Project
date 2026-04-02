import React from 'react';
import { getProducts } from './services/productService';
import type { Product } from './types/Product';
import './App.css'; // Stil dosyamızı bağladık
import Products from './pages/Products'
import Cart from './pages/Cart';

function App() {

  return (
    <div className="app-wrapper">
      {/* Üst Bar */}
      <header className="header-bar">
        <div className="logo-area">
          <div className="logo-dot"></div>
          E-MARKET
        </div>

        <div className="search-controls">
          <input type="text" className="input-field" placeholder="Search for products..." />
          <select className="select-field">
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </header>

      <main className="main-content">
        {/* <Products /> */}
        <Cart />
      </main>

    </div>


    
  );
}

export default App;