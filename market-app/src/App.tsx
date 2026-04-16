import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import { useAppSelector } from './app/hooks';
import AddressPage from './pages/AddressPage';

function App() {
  const [search, setSearch] = useState<string>("");
  const favorites = useAppSelector((state) => state.favorites.favorites);

  return (
    <div className="app-wrapper">
      <header className="header-bar">
        <div className="logo-area">E-MARKET</div>
        
        <div className="search-controls">
          <input 
            type="text" 
            className="input-field"  
            placeholder="Search products..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </header>

      <div style={{ padding: '20px', background: '#f8f9fa' }}>
        <Link to="/" style={{ marginRight: '15px', textDecoration: 'none', fontWeight: 'bold' }}>
            🏠 Ana Sayfa
        </Link>
        <Link to="/favorites" style={{ marginRight: '15px', textDecoration: 'none', fontWeight: 'bold', color: '#ff4757' }}>
            ❤️ Favorilerim ({favorites.length})
        </Link>
        <Link to="/cart" style={{ marginRight: '15px', textDecoration: 'none', fontWeight: 'bold', color: '#119749' }}>
            🛒 Sepetim 
        </Link>
        <Link to="/address" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#1e90ff' }}>
            📍 Adres Bilgilerim
        </Link>
      </div>

      <main className="main-content">
        <Routes>
          {/* Arama kelimesini Products'a paslıyoruz */}
          <Route path="/" element={<Products search={search} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorites" element={<Favorites />} /> 
          <Route path="/address" element={<AddressPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;