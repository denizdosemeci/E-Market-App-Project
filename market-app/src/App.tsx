import React, { useEffect, useState } from 'react';
import { getProducts } from './services/productService';
import type { Product } from './types/Product';

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Eyvah, ürünler gelmedi:", error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Market Ürün Listesi</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '8px', textAlign: 'center' }}
          >
            <img 
              src={product.thumbnail} 
              alt={product.title} 
              style={{ width: '100%', height: '150px', objectFit: 'cover' }} 
            />
            
            <h3 style={{ fontSize: '1.1rem' }}>{product.title}</h3>
            <p style={{ fontWeight: 'bold', color: '#2c3e50' }}>{product.price} $</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;