import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { fetchProducts } from '../features/productSlice';
import { addToFavorites, removeFromFavorites } from '../features/favoriteSlice';
import type { Product } from '../types/Product';
import { addToCart } from '../features/cartSlice';

interface ProductsProps {
  search: string;
}

const Products: React.FC<ProductsProps> = ({ search }) => {
  const dispatch = useAppDispatch();
  const { items: products } = useAppSelector((state) => state.products);

  const favorites = useAppSelector((state) => state.favorites.favorites);
  console.log("Favorilerim:", favorites); 

  const [sortBy, setSortBy] = React.useState<string>(''); 

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // KLASİK FİLTRELEME 
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.price - b.price;
    } else if (sortBy === 'price-desc') {
      return b.price - a.price;
    } else {
      return 0;
    }
  });

  return (
  <>
      <div className="sorting-wrapper" style={{ marginBottom: '20px', textAlign: 'right' }}>
        <select 
          className="sort-select"
          value={sortBy} 
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Fiyata Göre Sırala</option>
          <option value="price-asc">Fiyat: Artan</option>
          <option value="price-desc">Fiyat: Azalan</option>
        </select>
      </div>


    
    <div className="products-grid">
      {sortedProducts.map((product) => {
        const isFavorite = favorites.some((fav: Product) => fav.id === product.id);

        const handleLike = (e: React.MouseEvent) => {
          e.preventDefault();
          if (isFavorite) {
            dispatch(removeFromFavorites(product));
          } else {
            dispatch(addToFavorites(product)); 
          }
        };

        return (
          <article key={product.id} className="product-item">
            <div className="img-container">
              <button 
                className={`like-btn ${isFavorite ? 'active' : ''}`} 
                onClick={handleLike}
              >
                {isFavorite ? '❤️' : '🤍'} 
              </button>
              <img src={product.thumbnail} alt={product.title} style={{ width: '100%' }} />
            </div>
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className="btn-add" onClick={() => dispatch(addToCart(product))}>SEPETE EKLE</button>
          </article>
        );
      })}
      
      {filteredProducts.length === 0 && <p>Ürün bulunamadı.</p>}
    </div>
    </>
  );
};

export default Products;



// .some() şunu sorar: "Bu listenin içinde en az bir tane benim ID'm ile aynı olan eleman var mı?"
// Eğer 'isFavorite' true ise; demek ki bu ürün zaten beğenilmiş.
// O zaman butona basınca favorilerden ÇIKARMALIYIZ.
// Eğer 'isFavorite' false ise; demek ki bu ürün henüz beğenilmemiş.
// O zaman butona basınca favorilere EKLEMELİYİZ.
